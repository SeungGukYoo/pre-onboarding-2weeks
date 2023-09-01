import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { styled } from 'styled-components';
import { unified } from 'unified';
import Spinner from '../../components/Layout/Loading';

function Description() {
  const [markdownText, setMarkdownText] = useState('');
  const { issuesStore, isSuccess } = useSelector(state => state.issue);
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const markdownChangeHtml = async () => {
      const { value } = await unified()
        .use(remarkParse)
        .use(remarkHtml)
        .process(issuesStore[param.id]?.body);
      setMarkdownText(value);
    };

    if (isSuccess) {
      console.info(issuesStore[param.id]);
      if (issuesStore[param.id]) markdownChangeHtml();
      else navigate('/error');
    }
  }, [isSuccess, issuesStore, navigate, param.id]);
  const createMarkdown = useCallback(() => {
    return { __html: markdownText };
  }, [markdownText]);

  const DateFormatter = issuesStore[param.id]?.created_at.match(/(\d{4})-(\d{2})-(\d{2})T/);
  let DateFormatterString;
  if (issuesStore[param.id]) {
    DateFormatterString = `${DateFormatter[1]}년 ${DateFormatter[2]}월 ${DateFormatter[3]}일`;
  }

  return (
    <DescriptionContainer>
      {isSuccess ? (
        issuesStore[param.id] && (
          <>
            <InfoContainer>
              <ImageContainer>
                <Image src={issuesStore[param.id].user.avatar_url} alt="avatar" />
                <ImageTextContainer>
                  <TitleText>
                    <span>#{issuesStore[param.id].number}</span>
                    {issuesStore[param.id].title}
                  </TitleText>

                  <p>
                    작성자: {issuesStore[param.id].user.login} 작성일: {DateFormatterString}
                  </p>
                </ImageTextContainer>
              </ImageContainer>
              <div>
                <p>코멘트 {issuesStore[param.id].comments}</p>
              </div>
            </InfoContainer>

            <div dangerouslySetInnerHTML={createMarkdown()} />
          </>
        )
      ) : (
        <Spinner />
      )}
    </DescriptionContainer>
  );
}

export default Description;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;
const ImageContainer = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 50px;
  object-fit: contain;
`;
const ImageTextContainer = styled.div`
  margin: auto 0;
  padding-left: 20px;
  text-align: left;
`;
const TitleText = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
`;
const DescriptionContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
  color: black;
`;

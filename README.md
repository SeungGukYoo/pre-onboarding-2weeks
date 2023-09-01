# 👹 원티드 프리온보딩 2주차 과제 👹

## 개요

- 본 페이지는 원티드 프리온보딩 인턴십 2주차 팀과제를 위한 리드미입니다.
- 해당 repository는 2주차 팀 프로젝트를 위한 작업물이며, 리팩토링과 best practice 코드가 적용된 작업물은 아닙니다.

## 1. 프로젝트 요구 사항

- 무한 스크롤
- 이슈 목록 가져오기(open된 이슈 중 코멘트가 많은 순서대로)
- 다섯번째 셀마다 광고 이미지 출력(광고를 클릭시 원티드 주소로 이동)

## 2. 개발 환경 및 배포 URL

[🔗 AWS 배포링크](http://wanted-aws-self-study.s3-website.ap-northeast-2.amazonaws.com/)

## 3. 프로젝트 구조

<img width="150" alt="스크린샷 2023-09-01 오후 1 58 23" src="https://github.com/SeungGukYoo/study/assets/119836116/c065e659-b9d2-4af4-be9c-0f6f56f3fbc0">

## 4. 기술 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img height=20 src="https://img.shields.io/badge/redux-toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img height=20 src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img 
 height=20 src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">

## 5. UI

1. 전체 페이지
   <img width="820" alt="스크린샷 2023-09-01 오후 2 08 45" src="https://github.com/SeungGukYoo/study/assets/119836116/4250d2cc-c4fe-4b69-b18a-4bf5ebd5e5f6">

2. 상세 페이지
   <img width="820" alt="스크린샷 2023-09-01 오후 2 08 57" src="https://github.com/SeungGukYoo/study/assets/119836116/011cbf53-fda0-46d7-bcd5-8366da3100f2">
3. 에러 페이지
   <img width="700" alt="스크린샷 2023-09-01 오후 2 15 57" src="https://github.com/SeungGukYoo/study/assets/119836116/e662f84c-9bf0-4587-a41b-dc1497060a93">

## 6. 개선 사항

#### 1. remarkJS를 다른 라이브러리로 변경

- remarkJS의 경우에는 다른 라이브러리보다 완벽하게 바꿔주지 않으며, 스타일링 하는 것이 복잡하기 때문에 편리하고, 확장성 있는 라이브러리로 변경을 해서 리팩토링을 진행(**react-markdown**)

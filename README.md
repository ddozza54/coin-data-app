# 🪙 코인 Tracker 

노마드코더 리액트 마스터 클래스에서 만든 가상화폐 정보 웹 어플리케이션입니다.

<br>


## 💰 목차
 
1. 프로젝트 소개

2. 개발 기술

3. 주요 기능 

4. 실행 및 배포
 
 
<br>

<img width="437" alt="image" src="https://github.com/ddozza54/coin-data-app/assets/100435210/0d808d83-0467-487a-b2d2-324b305616c1">


## 🎢 1. 프로젝트 소개

### 제작 기간

- 2023.4.29 - 2023.5.12

### 프로젝트 설명

- 가상화폐 API 를 이용해 코인 정보를 주는 웹 어플리테이션 입니다. 

- 코인에 대한 간단한 정보와 가격에 대한 실시간 정보를 Chart 형식으로 제공합니다.



<br>


## 🖥️ 2. 개발 기술

## FrontEnd

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/styledComponents-CC6699?style=for-the-badge&logo=styledComponents&logoColor=white"> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white"/>

## Tools

<img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Git-e84d31?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white">



<br>

## 🪩 3. 주요 기능

### Coin 리스트 확인 

- "/" 페이지 에서 API 로 받은 코인 데이터의 icon 과 이름을 볼 수 있습니다.

 <img width="383" alt="image" src="https://github.com/ddozza54/coin-data-app/assets/100435210/39c83fad-0165-40cd-9d5e-077e2110a109">


### Coins

- "/:coinName" 페이지에서 해당 코인에 대한 간략한 설명을 볼 수 있습니다.

  <img width="426" alt="image" src="https://github.com/ddozza54/coin-data-app/assets/100435210/f29475fd-0f85-45f6-9c4d-18da31e69e4a">

  
- Chart 버튼 클릭 시 가격 변화에 대한 차트를 볼 수 있습니다.

  <img width="367" alt="image" src="https://github.com/ddozza54/coin-data-app/assets/100435210/8cb43871-bd57-487f-9cb3-a8a1636d263e">


- Price 버튼 클릭 시 최고가, 최저가, 오늘의 거래량을 수치로 확인할 수 있습니다.

 <img width="368" alt="image" src="https://github.com/ddozza54/coin-data-app/assets/100435210/73e4e609-4325-4321-bfa0-e769af63b740">


### Dark Mode, Light Mode 토글 버튼

<img width="88" alt="image" src="https://github.com/ddozza54/coin-data-app/assets/100435210/e3b95f1f-947d-4aa8-96a4-696a3dc52a0a"> <img width="91" alt="image" src="https://github.com/ddozza54/coin-data-app/assets/100435210/5251a5fa-4a43-4aa2-975b-17f71a720e1a">


- 오른쪽 상단에 위치한 Mode 버튼 클릭 시 컬러 Mode 가 바뀝니다.

- Recoil 의 Atom 을 이용해 전역에서 쓰이는 state 공유를 간단하게 할 수 있습니다. 



  
<br>

## 🔨 4. 실행 및 배포

- 실행 : npm start

- 배포 링크 : git pages 이용 - [ 클릭 시 이동 ](https://ddozza54.github.io/coin-data-app/)


# 프리온보딩 휴먼스케이프 과제 5조의 1조 <승규님,승연님>
저희조는 과제의 페이지가 많지 않아서 조를 3개조로 나누고 각 나눈 팀원끼리 진행하였습니다.
덕분에 사람당 더 많은 과제를 수행할 수 있었고 그만큼 경험도 많이 쌓였습니다.
모르는게 있으면 중간중간 조와 조끼리 소통도 하며 문제를 해결하였습니다.

# 페이지 설명
병명을 검색하면 그와 비슷한 병명을 찾아서 추천해주는 검색창 사이트 입니다.

### 필수사항
- **Github Repository URL**
- **README.md**
    - 구현한 방법과 이유, 어려웠던 점에 대한 간략한 내용 서술 (o)
    - 누구나 따라 할 수 있을 정도의 자세한 실행 방법 (o)
    - 함수형 컴포넌트 사용 필수 (o)
- **secret key, api key 등을 레포지토리에 올리지 않도록 유의** (o)
    - api주소를 env에 따로저장하여 gitignore설정을 해주었습니다.

### 도전과제
- API 호출 최적화
    - 호출별로 로컬 캐싱을 구현합니다. (expire time까지도 있으면 좋음) (o)
        - exprie time은 rtk query의 keepUnusedDataFor옵션을 사용해서 구현하였습니다.
    - 입력 마다 호출하지 않고 자신만의 전략으로 API 호출 횟수를 줄입니다. (o)
- 키보드만으로도 추천 검색어들로 이동이 가능 (o)
- 배포하여 웹에서 바로 사용 할 수 있도록 제공 (o)

## 자세한 실행방법
1. git clone
```
git clone https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-10-1.git
```
2. npm install
```
npm install
```
3. npm run start
```
npm run start
```
## 배포 링크
https://wanted-codestates-project-05-10-1.vercel.app/

## 기술 스택
- React.js
- styled-components
- redux, redux-toolkit
- RTK Query


## <승규님>

### 구현한 내용
- 기본 검색창 구현
 <img width="704" alt="스크린샷 2022-03-11 오후 2 16 41" src="https://user-images.githubusercontent.com/22316798/157807494-b905a5d3-b8f6-41a0-80bf-d06d9d9b6c1b.png">

- 검색시 api호출 최적화를 위한 디바운스 구현 (입력 마다 호출하지 않고 자신만의 전략으로 API 호출 횟수를 줄입니다.)
<img width="704" alt="스크린샷 2022-03-11 오후 2 16 41" src="https://user-images.githubusercontent.com/22316798/157807564-84fa751d-fe0f-47e8-afd2-6aaa0cb4e4ca.gif">

- 키보드만으로도 추천 검색어들로 이동이 가능하게 구현
 <img width="704" alt="스크린샷 2022-03-11 오후 2 16 41" src="https://user-images.githubusercontent.com/22316798/157807557-99e7fbf5-45cf-4a72-bc5f-37391965eac3.gif">
 
- 키보드를 위아래로 누르면 index의 값을 저장했다가 리스트의 id값과 같으면 선택된것과 같은 효과를 보이도록 스타일을 조정해주었습니다.

- 검색창 상태에 따른 다른 문구 출력 구현
 <img width="704" alt="스크린샷 2022-03-11 오후 2 16 41" src="https://user-images.githubusercontent.com/22316798/157868795-d7c046f1-cda4-441e-9029-9cb58581a09e.gif">

### 어려웠던 점
- 최적화를 위한 디바운스 구현이 어려웠습니다. 처음에는 setTimeout으로 구현해 보려 했으나 잘 안되서 찾아보니 lodash라는 라이브러리의  디바운스라는 걸 알게되어서 그것을 사용했습니다. 하지만 RTK Query와 같이 사용하려하니 부족한 부분이 있어서 디바운스를 훅으로 만들어서   사용해서 해결하였습니다. 처음에 setTimeout만으로도 잘만 했다면 금방 했을거 같은 아쉬움이 남습니다.
- 캐싱을 하기위해 RTK쿼리를 사용하였습니다. 하지만 처음 사용하다보니 분석하는데 좀 시간이 걸렸고 어떤 옵션을  사용해야 우리가 원하는 기능을 구현할 수 있는지 몰랐던게 컸던거 같습니다. 물론 지금은 문서를 보고 원하는 옵션을 찾아서 적재적소에 사용하였습니다. 하나를 예를 들자면 api가 호출하는 쿼리가 빈값이여도 호출하는 문제가 있었습니다. 이 문제를 해결하기 위해선 RTK Query에서 skip이라는 속성을 사용해줘야 했습니다. 이렇게 또 하나의 라이브러리를 배워가니 기쁩니다.

<br>

## <승연님>

### 구현한 내용
- src/services/searchWord, src/app/store

- 리액스 리덕스 툴킷 configureStore 생성하였습니다.
- RTK-Query로 api요청을 하여 데이터를 받아오는 것을 하였습니다.
- UI 반응형을 구현하였습니다.

<br>

   <img width="704" alt="gif" src="https://user-images.githubusercontent.com/54584337/157824971-8071c65e-8f22-416e-a442-b0fc307304de.gif">

<br>


### 어려웠던 점
- 처음에는 리덕스를 사용에서 상태 관리를 하려고 했지만 리소스도 많이 차지하여 리덕스 툴킷을 사용해서 구현이 가능하고 RTK쿼리 기능이 있어 툴킷으로 변경하여 구현하여 상태 관리를 해결하였습니다.
- 툴킷을 처음 사용해봐서 어려운 점이 있었지만 공식문서를 보면서 해결하였습니다.

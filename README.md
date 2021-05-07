# Baseball Project

## Members

- Woody(BE)
- DD(FE)
- Luke(FE)

## Document

- [Wiki](https://github.com/codesqurd-master-DD/baseball/wiki)를 참고해주세요

- [ Component tree/Feature list ](https://github.com/codesqurd-master-DD/baseball/wiki/Component-tree,-feature-list)

## 진행 상황

### 공통

- 협업룰
- API 요청 시점, Request header, 예상 response JSON 논의

### FE

- 컴포넌트 트리 
- Feature List
- StartPage lazy loading

### BE

- DB 설계
<img width="899" alt="Screen Shot 2021-05-07 at 3 55 19 PM" src="https://user-images.githubusercontent.com/74452069/117409857-a117d100-af4c-11eb-9458-a4f1b670d6e5.png">

- [DDL : 테이블 생성 sql](https://github.com/codesqurd-master-DD/baseball/blob/4e2bc5f5bbf994be95e36be597d6c07bf0c74e74/backend/src/main/resources/static/schema.sql)
- [DML : 데이터 삽입 sql](https://github.com/jihye-woo/play-ground/tree/master/%EB%AC%B8%EC%9E%90%EC%97%B4%EC%B2%98%EB%A6%AC/baseball-dml-generator)
  - game, team, player 테이블에 대한 insert 쿼리 생성 스크립트
    - insert_game.py
    - insert_team.py
  - 생성된 insert 쿼리문
    - insert_game_query.txt : game 데이터 insert 쿼리문
    - insert_player_query.txt : player 데이터 insert 쿼리문
    - insert_team_query.txt : team 데이터 insert 쿼리문


## Current Demo

![carousel3](https://user-images.githubusercontent.com/41738385/117398846-26de5100-af3a-11eb-8d0a-5006cb7ad9a0.gif)

- 스크롤 이벤트에 반응하는 lazy loading 구현

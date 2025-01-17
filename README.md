# The Night of AiIt SlotMachine
이벤트 룰렛을 통해 당첨자를 랜덤으로 선발하는 웹 애플리케이션


## 목차
1. [소개](#소개)
2. [기능](#기능)
3. [설치 방법](#설치-방법)
4. [사용 방법](#사용_방법)
5. [기술 스택](#기술-스택)



## 소개
이 프로젝트는 대학 행사를 위한 룰렛 기능을 제공합니다. 이벤트 룰렛을 통해 당첨자를 랜덤으로 선발할 수 있습니다.



## 기능
주요 기능 목록
- 룰렛 UI를 통한 당첨자 랜덤 선발
- 당첨자의 데이터베이스 업데이트
- 이전 당첨자 제외 처리


## 설치 방법
### 1. 사전 요구사항
- **Java 17**
- **Node.js 16 이상**
- **MySQL 8.0 이상**
- Gradle (Spring Boot 기본 빌드 도구)

### 2. 백엔드 설정
- 1. **MySQL 데이터베이스 생성:**
     MySQL에 접속하여 아래 명령어로 `eventspin` 데이터베이스를 생성
   ```sql
   CREATE DATABASE eventspin;
- 2. **환경 설정 파일 변경:**
     `application.properties` 파일을 수정하여 데이터베이스 정보를 입력
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/eventspin?useSSL=false&serverTimezone=UTC
   spring.datasource.username=your-username
   spring.datasource.password=your-password
- 3. **백엔드 실행:**
     Spring Boot 실행

### 3. 프론트엔드 설정
- 1. **의존성 설치:**
     React 프로젝트 디렉토리로 이동 의존성 설치
  ```bash
  cd aiit/src/main/slot-machine
  npm install
- 2. **React 개발 서버 실행:**
     React 개발 서버를 실행
  ```bash
  npm start

### 4. 애플리케이션 실행
- 1. **백엔드(Spring Boot) 실행**
- 2. **프론트엔드(React) 실행:**
     `http://localhost:3000`을 통해 접속하여 룰렛 UI를 확인 가능


## 사용 방법
1. **이벤트 참여자 데이터베이스 입력:**
   이벤트에 참여할 참가자 정보를 미리 데이터베이스에 입력함 (이 부분은 관리자만 수행)
   - 관리자 인터페이스를 통해 참가자 정보를 추가하거나, 직접 SQL 쿼리로 데이터를 입력
   - user_id의 경우 7자리 숫자
   - 예시 SQL:
     ```sql
     INSERT INTO participants (user_id, is_drawn) VALUES ('1234567', false);
     INSERT INTO participants (user_id, is_drawn) VALUES ('8765432', false);
     ```

2. **당첨자 선발:**
   룰렛을 통해 랜덤으로 당첨자를 선발
   - 룰렛 UI에서 "당첨자 선발" 버튼을 클릭하면, 시스템이 랜덤으로 당첨자를 선택하고, 그 결과를 웹 UI 상에서 확인 가능
  

## 기술 스택

### 백엔드:
- **Spring Boot (Java 17)**
- **MySQL (8.0 이상)**
- **Gradle**

### 프론트엔드:
- **React (16 이상)**
- **CSS**
- **Axios**

### 기타:
- **Git**
- **npm**


     

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
- 1. **MySQL 데이터베이스 생성** :
     MySQL에 접속하여 아래 명령어로 `eventspin` 데이터베이스를 생성
   ```sql
   CREATE DATABASE eventspin;
- 2. **환경 설정 파일 변경** :
     application.properties 파일을 수정하여 데이터베이스 정보를 입력
     
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/eventspin?useSSL=false&serverTimezone=UTC
   spring.datasource.username=your-username
   spring.datasource.password=your-password

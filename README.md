src
├── app # 애플리케이션 초기화와 전역 설정
│ ├── App.tsx # 전역 라우트 및 레이아웃 관리
│ ├── firebase.ts # Firebase 초기화
│ ├── providers.tsx # 전역 상태/컨텍스트 관리
│ ├── routes # 라우트 정의 및 보호 로직
│ │ ├── index.ts # 주요 라우트 정의
│ │ └── ProtectedRoute.tsx # 인증된 사용자 전용 라우트
│ └── layouts # 전역 레이아웃
│ ├── MainLayout.tsx
│ ├── AuthLayout.tsx
│ └── index.ts
├── shared # 공통 모듈 (컴포넌트, 훅, 스타일, 유틸리티 등)
│ ├── components # 공통 컴포넌트
│ │ ├── Button
│ │ │ ├── Button.tsx
│ │ │ ├── Button.module.scss
│ │ │ └── index.ts
│ │ └── Navbar
│ │ ├── Navbar.tsx
│ │ ├── Navbar.module.scss
│ │ └── index.ts
│ ├── hooks # 공통 훅
│ │ └── useAuth.ts # 인증 상태를 반환하는 훅
│ ├── styles # 전역 스타일과 Bootstrap 설정
│ │ ├── global.scss # 전역 스타일
│ │ ├── variables.scss # Bootstrap 변수 오버라이드
│ │ ├── mixins.scss # 커스텀 믹스인
│ │ └── index.ts
│ └── utils # 공통 유틸리티 함수
│ ├── formatDate.ts
│ └── index.ts
├── entities # 도메인 단위 모듈 (유저, 메시지 등)
│ ├── user # 사용자 도메인
│ │ ├── model
│ │ │ ├── userSlice.ts # Redux Slice
│ │ │ ├── selectors.ts # 사용자 데이터 셀렉터
│ │ │ └── index.ts
│ │ ├── ui
│ │ │ ├── UserProfile
│ │ │ │ ├── UserProfile.tsx
│ │ │ │ ├── UserProfile.module.scss
│ │ │ │ └── index.ts
│ │ └── index.ts
│ ├── message # 메시지 도메인
│ │ ├── model
│ │ │ ├── messageSlice.ts
│ │ │ ├── selectors.ts
│ │ │ └── index.ts
│ │ ├── ui
│ │ │ ├── MessageItem
│ │ │ │ ├── MessageItem.tsx
│ │ │ │ ├── MessageItem.module.scss
│ │ │ │ └── index.ts
│ │ └── index.ts
├── features # 기능 단위 모듈 (채팅, 인증 등)
│ ├── chat
│ │ ├── model
│ │ │ ├── chatSlice.ts # 채팅 상태 관리
│ │ │ ├── selectors.ts # 채팅 데이터 셀렉터
│ │ │ └── index.ts
│ │ ├── ui
│ │ │ ├── ChatBox
│ │ │ │ ├── ChatBox.tsx
│ │ │ │ ├── ChatBox.module.scss
│ │ │ │ └── index.ts
│ │ ├── api
│ │ │ ├── chatApi.ts # Firestore 관련 API
│ │ │ └── index.ts
│ │ └── index.ts
│ ├── auth # 인증 기능
│ │ ├── model
│ │ │ ├── authSlice.ts # 인증 상태 관리
│ │ │ ├── selectors.ts # 인증 데이터 셀렉터
│ │ │ └── index.ts
│ │ ├── ui
│ │ │ ├── LoginForm
│ │ │ │ ├── LoginForm.tsx
│ │ │ │ ├── LoginForm.module.scss
│ │ │ │ └── index.ts
│ │ └── index.ts
├── pages # 페이지 단위
│ ├── Home
│ │ ├── Home.tsx
│ │ ├── Home.module.scss
│ │ └── index.ts
│ ├── Login
│ │ ├── Login.tsx
│ │ ├── Login.module.scss
│ │ └── index.ts
│ ├── ChatRoom
│ │ ├── ChatRoom.tsx
│ │ ├── ChatRoom.module.scss
│ │ └── index.ts
│ └── NotFound
│ ├── NotFound.tsx
│ └── NotFound.module.scss
└── index.tsx # React 애플리케이션 진입점

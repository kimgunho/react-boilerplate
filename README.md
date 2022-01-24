# React Boilerplate

```
$ git clone git@github.com:kimgunho/react-boilerplate.git
npm install
npm start

```

## 설치 라이브러리

### react 라이브러리

- react-router-dom : 라우트
- recoil : global state

### 스타일 라이브러리

- sass
- classnames
- react-icons

## 환경

### eslint

**플러그인**

- @babel/core
- @babel/eslint-parser
- @babel/preset-react
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks

**default Roles**

```js
  'react/react-in-jsx-scope': 'off', // 리엑트 기본 import문을 생략해도 가능
  'no-unused-vars': 'error', // 사용하지않는 변수 error처리
  'no-console': 'off', // 콘솔로그를 사용하수 있음
```

### prettier

```js
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "useTabs": false,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

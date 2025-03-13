## What I learned

### ✅ split()
: 문자열을 배열로 나누는 js 메서드.
- 주어진 구분자를 기준으로 문자열을 나누고, 그 결과를 반환함.
  - 구분자를 지정하지 않으면, 문자열을 하나하나의 문자로 나누게 됨.

```javascript
const str = "Web";
const arr = str.split(""); // 빈 문자열을 기준으로 나누기
console.log(arr); // ["W", "e", "b"]
```
### ✅ textContent
: HTML 요소의 텍스트 내용을 가져오거나 설정하는 속성

### ✅ shift()
: 배열에서 첫 번째 요소를 제거하고, 그 값을 반환하는 메서드

### ✅ setTimeout()
: 딜레이를 두고 특정 함수를 실행하도록 예약하는 함수
>setTimeout(함수, 지연시간);
- 지연시간: 밀리초 단위 (1000ms = 1초)

```javascript
setTimeout(writeTxt, Math.floor(Math.random()*100));
```
-> writeTxT 함수를 0부터 100ms 사이의 랜덤 시간 후에 실행하도록 예약함.
Math.random에서 0~1 사이의 숫자를 반환하고, Math.floor()는 그 값을 내림 처리해서 정수로 만듦.

### ✅ Math.floor()
: 내림 함수. 소수점 이하를 버리고 가장 가까운 작은 정수를 반환

### ✅ pop()
: js 배열에서 맨 마지막 요소를 제거 

### ✅ join()
: js 배열의 모든 요소를 문자열로 결합하는 메서드

```javascript
let arr = ['Hello', 'World'];
let str = arr.join(' ');  // 공백을 구분자로 결합
console.log(str);  // "Hello World"

```
- 배열의 모든 요소를 지정된 구분자를 사용해서 하나의 문자열로 합친다. 
- 구분자를 넣지 않으면 기본적으로 쉼표(,)로 요소들이 결합됨.

### ✅ `index = (index + 1) % txtArr.length;`
이 연산은 index 값이 배열의 길이를 넘지 않게 만듦
예를 들어, index가 5일 때 (5 + 1) % 5는 6 % 5 = 1이 돼서 index가 다시 1로 순환됨.

### ✅ 텍스트 타이핑 효과 코드 summary
이 코드는 텍스트를 한 글자씩 타이핑하고 지우는 애니메이션 효과를 주는 자바스크립트 코드야.

- 작동 방식:
1. txtArr 배열에 저장된 텍스트들을 차례대로 한 글자씩 spanEl에 표시함.
2. writeTxt() 함수는 currentTxt 배열에서 첫 글자를 꺼내서 spanEl에 추가하고, 글자가 모두 출력되면 3초 후에 deleteTxt() 함수가 실행돼서 글자를 지우기 시작함.
3. deleteTxt() 함수는 마지막 글자를 하나씩 지우고, 모두 지워지면 index 값을 증가시켜서 txtArr 배열에서 다음 텍스트로 넘어감.
4. 텍스트가 모두 지워지면 다시 writeTxt() 함수로 돌아가서 새로운 텍스트를 타이핑하는 작업을 반복함.
5. index 값은 순환되도록 처리되어 텍스트 배열의 끝까지 순차적으로 반복됨.

- 주요 기능:
1. shift() : 배열의 첫 번째 글자를 꺼내어 spanEl에 추가.
2. pop() : 배열의 마지막 글자를 제거.
3. join("") : 배열을 텍스트로 합침.
4. setTimeout() : 일정 시간 후에 함수를 실행.
5. Math.random()과 Math.floor() : 랜덤한 시간 간격을 생성.


### ✅ 화살표 함수
```javascript
const 함수명 = (매개변수) => { 
  // 함수 내용
}
```

```javascript
const square = num => {
  return num * num;
};

console.log(square(5)); // 출력: 25

```

### ✅ 즉시 실행 함수
```javascript
(function() {
  // 이 함수는 선언되자마자 실행됨
})();
```
---

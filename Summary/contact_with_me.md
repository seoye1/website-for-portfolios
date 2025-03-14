## What I learned

### ✅ autocomplete
: 입력 필드(<input>, <textarea>)에서 이전에 입력했던 값을 자동으로 제안해 주는 기능임
예를 들어, 로그인 폼에서 아이디를 한 번 입력하고 나면, 다음에 같은 필드에 들어갔을 때 이전에 입력했던 아이디를 제안해 줌.

- 속성값:
  on: 자동 완성 활성화 (기본값)
  off: 자동 완성 비활성화

### ✅ outline
: 요소에 외곽선을 그리는 css 속성
- 위치: 요소의 경계선 밖에 그려짐 (공간 차지 X).
- 겹침: 다른 요소와 겹치지 않음.
- 포커스 표시: 주로 키보드로 포커싱할 때 시각적 표시로 사용됨.
>outline: [색상] [두께] [스타일];

### ✅ box-shadow
: 요소에 그림자를 추가하는 css 속성
요소의 테두리 바깥쪽이나 안쪽에 그림자를 만들 수 있음.
>box-shadow: [x-오프셋] [y-오프셋] [블러 반경] [색상];
```css
/* ex */
box-shadow: 0 0 10px #719ece;
```
0: x-오프셋 (수평 이동) - 0px (그림자가 좌우로 이동하지 않음)
0: y-오프셋 (수직 이동) - 0px (그림자가 위아래로 이동하지 않음)
10px: 블러 반경 - 10px (그림자가 10px 만큼 퍼짐)
#719ece: 색상 

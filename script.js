// 텍스트 작성과 삭제 즉시 실행 함수
(function(){
  const spanEl = document.querySelector('main h2 span');
  const txtArr= ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-END Developer'];
  let index=0;
  let currentTxt=txtArr[index].split(""); /* 문자열이 배열 형태로 한 글자씩 쪼개짐 */

  function writeTxt(){
    spanEl.textContent += currentTxt.shift(); /* 맨 앞 첫 글자 꺼내서 spanEl에 추가 */
    if(currentTxt.length !== 0){
      setTimeout(writeTxt, Math.floor(Math.random()*100));
      /* writeTxT 함수를 0부터 100ms 사이의 랜덤 시간 후에 실행하도록 예약함.
      Math.random에서 0~1 사이의 숫자를 반환하고, Math.floor()는 그 값을 내림 처리해서 정수로 만듦.
       */
    } else {
      currentTxt = spanEl.textContent.split(""); /* 문자열을 배열 형태로 하나씩 쪼갬 */
      setTimeout(deleteTxt, 3000); /* 3초 있다가 deleteTxt 함수 실행 */
    }
  }
  function deleteTxt() {
    currentTxt.pop(); /* 마지막 글자 제거 */
    spanEl.textContent = currentTxt.join(""); /* 배열을 다시 텍스트로 결합. 구분자를 넣지 않았으므로 쉼표로 요소들이 결합됨.
    즉, 삭제된 글자가 없어진 텍스트를 spanEl에 다시 업데이트 */

    if(currentTxt.length !== 0){
      setTimeout(deleteTxt, Math.floor(Math.random()*100)); /* 랜덤 시간으로 계속 지움 */
    } else {
      index = (index + 1) % txtArr.length; /* 인덱스 0,1,2,3,4 반복. 이 연산은 index 값이 배열의 길이를 넘지 않게 만듦. 예를 들어 index가 5일 때 (5+1)%5=1이 되어 index가 다시 1로 순환됨.*/
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }
  writeTxt();
})();

/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
/* 이 코드의 목적:
스크롤을 내리면 헤더에 active라는 클래스가 추가되고, 다시 위로 올리면 그 클래스가 삭제 */
(function(){
  const headerEl = document.querySelector("header");

  /* 스크롤을 내리거나 올릴 때마다 scrollCheck 함수를 실행하도록 설정 */
  window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
  });

  /* 스크롤을 체크하는 함수 */
  function scrollCheck() {
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset; /* 현재 스크롤 위치를 가져와서 browserScrollY에 저장 */

    if (browerScrollY > 0) { /* 스크롤을 내리면 */
      headerEl.classList.add("active");
    } else { /* 스크롤을 맨 위로 올리면 */
      headerEl.classList.remove("active");
    }
  }
})();

// 애니메이션 스크롤
(function(){
  const animationMove = function(selector){
    // ① selector 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
  };
// 스크롤 이벤트 연결하기
  const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
  for(let i = 0; i < scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click', function(e){
      const target = this.dataset.target;
      animationMove(target);
    });
  }
})();

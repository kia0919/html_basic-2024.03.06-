const ID = 'userIdentity';
const PASSWORD = 'P!ssw0rd';/*상수 const에 ID, PASSWORD 값 지정.*/

/*onSignInButtonClickHandler함수는 로그인 버튼 클릭했을 때 실행.*/
/*해당 코드는 onSignInButtonClickHandler함수가 event객체를 사용하지 않고 있음 */
function onSignInButtonClickHandler(event) {
/*사용자가 입력한 ID값을 가져온다 */
    const id = document.getElementById('id').value;
/*사용자가 입력한 PASSWORD값을 가져온다. */
    const password = document.getElementById('password').value;
/*HTML에서ID가 sign-in-essage인 요소를 찾아 signInMessageElement변수에 할당.*/
    const signInMessageElement = document.getElementById('sign-in-message');
/*웹 페이지에서 사용자가 입력한 id와 PASSWORD가 위에서 지정한 상수 ID, PASSWORD값이 일치하는지 확인, 이 경우 로그인 성공했다는것을 의미 */
    if (id === ID && password === PASSWORD) {
/*로그인 성공했음을 사용자에게 알리는 메시지 */
        alert('로그인 성공!')
/*??????????????????????????????????????????*/
        signInMessageElement.textContent = '';
/*ID, PASSWORD가 잘못될 경우, 로그인 결과메시지가로그인 정보가 일치하지 않습니다. 로 표시 된다. */
    } else {
        signInMessageElement.textContent = '로그인 정보가 일치하지 않습니다.';
    }
}
/*onSignUpLinkClickHandler함수는 회원가입 링크를 눌렀을 때, 회원가입 페이지로 이동시키는 역할 */
function onSignUpLinkClickHandler(event) {
/*현재 해당 파일은 sign-in로그인 파일과 연결되 있지만 해당 블럭의 코드만, sign-up링크와 연결이 된다.
그래서  onSignUpLinkClickHandler함수가 회원가입 링크를 클릭했을 때 실행이 된다.*/
    window.location.href = '../sign-up';
}
/*HTML에서 sign-up-link인id를 찾아signUpLinkElement에 할당 */
const signUpLinkElement = document.getElementById('sign-up-link');

/*위에서 할당한 회원가입의 signUpLinkElement링크 요소에 클릭 이벤트를 추가하
클릭 이벤트 발생 시 onSignUpLinkClickHandler함수가 실행되어 회원가입 페이지로 이동하게 된다
addEventListener에 click메서드는 이벤트 속성으로, onSignUpLinkClickHandler함수가 실행되도록 설정 */
signUpLinkElement.addEventListener('click', onSignUpLinkClickHandler);
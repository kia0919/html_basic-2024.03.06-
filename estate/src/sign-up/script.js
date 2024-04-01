const ID = 'userIdentity';
const PASSWORD = 'P!ssw0rd';
const EMAIL = 'email@email.com';
const AUTH_NUMBER = '1010'; // 각 상수 값 지정

// 사용자가 입력한 값들을 저장하는 변수들을 초기화 함
let id = '', password = '', passwordCheck = '', email = '', authNumber = ''; 
// isDuplicate:중복가능여부, isEmail: 이메일 유효성, isDuplicateEmail: 이메일 중복 여부, isEqualAuthNumber: 인증번호 일치 여부 왜 FALSE임,
// ispasswordPattern: 비밀번호 패턴 일치여부, isEqualPassword: 비밀번호 일치 여부
let isDuplicate = true, isPasswordPattern = false, isEqualPassword = false, isEmail = false, 
isDuplicateEmail = true,
isEqualAuthNumber = false;


//Dom으로 변수 선언
// document.getElementById: id 속성 값으로 요소 노드를 한개 선택.
// 사용자가 정보에 입력하는 입력상자에 대한 참조
// Dom으로 HTML에 있는 (ID명)을 가져와서 ...Element에 할당
const idInputElement = document.getElementById('id');
const passwordInputElement = document.getElementById('password');
const passwordCheckInputElement = document.getElementById('password-check');
const emailInputElement = document.getElementById('email');
const authNumberInputElement = document.getElementById('auth-number');

const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
const checkEmailButtonElement = document.getElementById('check-email-button');
const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

const idMessageElement = document.getElementById('id-message');
const passwordMessageElement = document.getElementById('password-message');
const passwordCheckMessageElement = document.getElementById('password-check-message');
const emailMessageElement = document.getElementById('email-message');
const authNumberMessageElement = document.getElementById('auth-number-message');

const signUpButtonElement = document.getElementById('sign-up-button');
const signInLinkElement = document.getElementById('sign-in-link');


// event 핸들러 함수: 버튼을 클릭할 때 실행되는 함수,
// onIdInputHandler함수는 event객체를 사용하지 않음
function onIdInputHandler (event) {
// target: 실제로 이벤트를 발생시킨 요소
// event객체를 사용하지 않는 대신,event.target.value에서 함수에 사용하는값을 가져옴
// 이밴트 객체에서, 입력한 값을 id변수에 할당
    id = event.target.value;    
// 상수ID값 입력시, isDuplicate = true 인해 중복된 것이라는 의미가 담긴다.
// 입력한 id의 값이 이미 사용 중이면 해당 변수에 true를 할당, 아니면 false를 할당
    isDuplicate = true; 
//입력한 id값이 존재한다면 checkDuplicateButtonElement요소의 classname이 input-primary-button으로 className이 바뀜
    if (id) checkDuplicateButtonElement.className = 'input-primary-button';
//존재하지 않는다면 checkDuplicateButtonElement요소의 className이 input-disable-button으로 ClassName이 바뀜
    else checkDuplicateButtonElement.className = 'input-disable-button';
}

// onPasswordInputHandler함수: 비밀번호 패턴확인 함수 
function onPasswordInputHandler (event) {
    // 비밀번호 변수에 이벤트가 발생한 실제 요소의 value 값을 할당한다.
    // let으로 지정한 password는 ""빈 문자열로, 사용자가 입력한 password값을 입력할 때 event가 실행 됨
    password = event.target.value;

    // 비밀번호 패턴을 정규식으로 영문자와 숫자를 반드시 포함한 상태로 8~13자로 지정
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,13}$/;
    // 비밀번호 변수에 들어있는 값이 비밀번호 패턴과 일치하는지 확인
    isPasswordPattern = passwordReg.test(password);
    // 비밀번호 패턴이 일치하지 않을 때
    if (!isPasswordPattern) {
        // passwordMessage 요소의 클래스 명을 'input-message error';으로 바꾼다.
        passwordMessageElement.className = 'input-message error';
        // passwordMessage 요소의 텍스트를 다음과 같이 바꾼다.
        passwordMessageElement.textContent = '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요';
        // 변경 작업이 이뤄진 후 함수를 종료한다.
        return;
    }

    // 비밀번호 패턴이 일치할 경우에만 아래 코드가 실행됨
    // passwordMessage 요소의 클래스명을  'input-message'으로 바꾼다.
    passwordMessageElement.className = 'input-message';
    // passwordMessage 요소의 텍스트를 빈문자열로 바꾼다.
    passwordMessageElement.textContent = '';
}

// event 핸들러 함수: 버튼을 클릭할 때 실행되는 함수
// onPasswordCheckInputHandler함수는 입력된 비밀번호 값을 가져와 패턴 확인,
// 일치하지 않으면 에러메시지 표시
function onPasswordCheckInputHandler (event) {
// passwordcheck에 이벤트 객체의 입력한 값을 가져와 할당한다.
    passwordCheck = event.target.value; 
// isEqualPassword: 비밀번호와, 입력한 비밀번호 값이 일치하는지 여부를 나타냄
// password: 입력한 비밀번호 값
// passwordChecek: 사용자가 입력한 비밀번호 확인 값
// 즉 입력한 비번과, 사용자가 입력한 비밀번호 확인 값이 일치한다면
    isEqualPassword = password === passwordCheck;
// 비밀번호과, 입력한 비밀번호 값이 일치하지 않는다면
    if (!isEqualPassword) {
// 해당 클래스 네임을, 에러 스타일 적용
        passwordCheckMessageElement.className = 'input-message error';
// 에러 메시지를 다음과 같이 지정
        passwordCheckMessageElement.textContent = '비밀번호가 일치하지 않습니다.';
        return;
    }

// 비밀번호 확인 메시지 요소의 className을 input-message로 설정
    passwordCheckMessageElement.className = 'input-message';
// 해당 요소의 텍스트 내용을 빈문자열로 설정, 위 아래 둘다 초기화 하는 것
    passwordCheckMessageElement.textContent = '';
}

// onEmailInputHandler함수: 이메일 유효성(정규식) 검사하는 함수
function onEmailInputHandler (event) {
// 이메일 이벤트의 입력 요소 값을 가져와서 email에 할당
    email = event.target.value;
// false: 이메일 입력칸 값이 없을 경우 즉, 이메일 유효성
    isEmail = false;
//입력한 이메일 주소가 이미 등록한 이메일임을 나타냄
    isDuplicateEmail = true;

// 만약 입력한 email값이 존재한다면, 이메일중복확인버튼의 요소 className을 input-primary-button으로 지정
// 입력한 이메일 입력이 있음을 나타내고, 버튼을 활성화
    if (email) checkEmailButtonElement.className = 'input-primary-button';
// 입력한 email값이 존재하지 않는다면, 이메일중복확인버튼의 className을 input-disable-button으로 지정
    else checkEmailButtonElement.className = 'input-disable-button';
}

// onAuthNumberInputHandler함수: 인증번호 입력시 실행되는 이벤트 해들러 함수
function onAuthNumberInputHandler (event) {
// 이벤트 객체에서 입력한 인증번호 값을 가져와 할당
    authNumber = event.target.value;
//  입력한 잉증번호과 실제 인증번호가 일치하는지 확인 여부
    isEqualAuthNumber = false;
// 인증번호 입력란이 비어있지 않으면, className을 input-primary-button으로 설정
    if (authNumber) checkAuthNumberButtonElement.className = 'input-primary-button';
// 인증번호 입력란이 비어있으면, className을 input-disable-button으로 설정
    else checkAuthNumberButtonElement.className = 'input-disable-button';
}

// 사욥자가 id를 입력했을 때, 발생하는 이벤트 함수,
// addEventListener:이벤트 속성으로, input(입력), click(클릭)이 발생했을 때 실행되는 함수 지정
idInputElement.addEventListener('input', function (event) {
// 이벤트 발생시(id입력했을 때), onIdInputHandler, setSignUpButton함수가 순차적으로 발생
    onIdInputHandler(event); // 입력된 아이디 중복체크하는 함수 호출
    setSignUpButton();  //회원가입 버튼 상태를 업데이트 해주는 함수 호출(???????앞에서 미리 정의를 하지 않아도 되는건가)
});

// 비밀번호 입력시, 발생되는 이벤트 함수
passwordInputElement.addEventListener('input', function (event) {
//  입력값을 처리하는 함수인 onPasswordInputHandler함수(비번 정규식)를 호출
    onPasswordInputHandler(event);
// 회원가입 버튼상태 업데이트하는 setSignUpButton을 호출
    setSignUpButton();
});

// passwordCheckInputElement요소에, 입력시 발생하는 이벤트 실행
passwordCheckInputElement.addEventListener('input', function (event) {
// 비밀번호 패턴을 체크해주는 함수 호출
    onPasswordCheckInputHandler(event);
// 회원가입 버튼상태를 업데이트 하는 setSignUpButton함수 호출
    setSignUpButton();
});

// emailInputElement요소에 입력 이벤트 
emailInputElement.addEventListener('input', function (event) {
// 이메일 유효성검사 해주는 onEmailInputHandler함수를 호출
    onEmailInputHandler(event);
// 회원가입 버튼 업데이트 하는 setSignUpButton함수 호출 
    setSignUpButton();
});

// authNumberInputElement요소에 입력하면 실행되는 이벤트 설정
authNumberInputElement.addEventListener('input', function (event) {
// 인증번호가 일치여부를 확인하는 onAuthNumberInputHandler함수 호출
    onAuthNumberInputHandler(event);
// 회원가입 버튼 업데이트 하는 setSignUpButton함수 호출 
    setSignUpButton();
});

//onCheckDuplicateClickHandler함수는 아이디 중복확인 버튼을 눌렀을 때 실행되는 이벤트 함수
function onCheckDuplicateClickHandler (event) {
// id가 비었으면함수 종료
    if (!id) return;
// 입력된 아이디와 위에서 상수로 정의한 ID값 비교하여 일치여부 확인인
    isDuplicate = id === ID;
// 일치하여, 이미 사용중인 id라면
    if (isDuplicate) {
// 에러메시지 표시후 함수 종료
        idMessageElement.className = 'input-message error';
        idMessageElement.textContent = '이미 사용중인 아이디 입니다.';
        return;
    }

    // 만약 일치하지 않아, 중복되지 않으면 해당 메시지 표시
    idMessageElement.className = 'input-message primary';
    idMessageElement.textContent = '사용 가능한 아이디 입니다.';
}

// 이메일 확인 버튼 클릭시 실행되는 함수
function onCheckEmailClickHandler (event) {
// 이메일 칸이 빈칸일 때 이메일 인증 버튼이 안눌러 지도록 하는 것.
    if (!email) return;

    // 이메일 유효성검사하기 위한 정규식 표현
    const emailReg = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
// 입력한 이메일과 정규식 표현식이 일치하는 확인 하고, 결과를 할당
    isEmail = emailReg.test(email);
// 만약 일치하지 않으면 다음 메시지 표시.
    if (!isEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이메일 형식이 아닙니다.';
        return;
    }
// 입력한 이메일이 이미 사용중인 이메일인지 유무 확인
    isDuplicateEmail = email === EMAIL;
// 만약 입력한 이메일이 이미 사용중이라면
    if (isDuplicateEmail) {
// 이미 사용중이니까 에러 메시지 표시 지정.
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이미 사용중인 이메일 입니다.';
        return;
    }
// 사용중인 이메일이 아니라면 다음과 같은 텍스트 표시
    emailMessageElement.className = 'input-message primary';
    emailMessageElement.textContent = '인증번호가 전송되었습니다.';
}
// 인증번호 확인에 실행되는 이벤트 함수
function onCheckAuthNumberClickHandler (event) {
// 인증번호 입력란이 비어 있으면 함수 종료
    if (!authNumber) return;
// 입력한 인증번호와 위에서 상수로 지정한 인증버호가 일치하는지 여부 확인
    isEqualAuthNumber = authNumber === AUTH_NUMBER;
// 만약 입력한 인증번호가 상수로 정한 인증번호와 일치하지 않는다면
    if (!isEqualAuthNumber) {
// 다음과 같은 에러 메시지 설정
        authNumberMessageElement.className = 'input-message error';
        authNumberMessageElement.textContent = '인증번호가 일치하지 않습니다.';
        return;
    }
// 일치한다면 나오는 메시지 표시 설정.
    authNumberMessageElement.className = 'input-message primary';
    authNumberMessageElement.textContent = '인증번호가 확인되었습니다.';
}
// checkDuplicateButtonElement요소에 클릭하면 실행되는 이벤트 지정
checkDuplicateButtonElement.addEventListener('click', function (event) {
// id중복확인해주는 함수 호출
    onCheckDuplicateClickHandler(event);
// 회원가입 버튼 업데이트 하는 함수 호출
    setSignUpButton();
});
// checkEmailButtonElement요소에 클릭하면 실행되는 이벤트 지정
checkEmailButtonElement.addEventListener('click', function (event) {
// 이메일 확인 버튼 함수 호출
    onCheckEmailClickHandler(event);
// 회원가입 버튼 업데이트 함수 호출
    setSignUpButton();
});
// checkAuthNumberButtonElement요소에 click하면 실행되는 이벤트 지정
checkAuthNumberButtonElement.addEventListener('click', function (event) {
// 인증번호 확인하는 onCheckAuthNumberClickHandler함수 호출
    onCheckAuthNumberClickHandler(event);
// 회원가입 버튼 업데이트하는 함수 호출
    setSignUpButton();
});

// onSignInLinkClickHandler함수 사용
function onSignInLinkClickHandler (event) {
// 로그인 링크를 눌렀을 때 sign-in 화면으로 이동
    window.location.href = '../sign-in';
}
// 로그인 링크에, onSignInLinkClickHandler 이벤트 지정
signInLinkElement.addEventListener('click', onSignInLinkClickHandler);

// 호원가입버튼 함수
function setSignUpButton () {
// 버튼이 활성화 되는 조건?
    const isPrimaryButton =
// id 비번, 비번확인, 이메일, 인증번호, id중복확인, 입력한비번 패턴, 비밀번호 일치 여부, 입력한 이메일, 입력한 인증번호 확인
// 이 필요함
        id && password && passwordCheck && email && authNumber && 
        !isDuplicate && isPasswordPattern && isEqualPassword && isEmail && !isDuplicateEmail && isEqualAuthNumber;
// 모든 조건 충족 시 버튼이 활성화 되는데 signUpButtonElement의 className을 primary-button으로 변경하고,
// full-width 부모요소의 전체 넓이를 차지하는 css스타일 지정, 물어보기.
    if (isPrimaryButton) signUpButtonElement.className = 'primary-button full-width';
// 조건을 모두 충족하지 않아 버튼 비활성화 이면은, className을 disable-button으로 지정,
// full-width으로 부모요소의 전체 넓이를 차지하는 css스타일 지정.
    else signUpButtonElement.className = 'disable-button full-width';

}
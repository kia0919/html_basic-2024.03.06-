/*
    블록 레벨 스코프 : 
    - 모든 코드 블럭 내에서  선언된 변수는 해당 코드블럭 내에서만 사용 가능 
*/
{
    var funcLevel = 10;
}
console.log(funcLevel);

/* 블록 레밸 변수는 해당 블럭 외부에서 사용 불가능
{
    let blockLevel = 10;
}
console.log(blockLevel);    //blockLevel이므로 해당 변수와 같으 블럭{  }안에 있어야 실행된다.*/

/*
    let
*/

/*
    변수 중복 선언 불가 : 
    - 변수를 동일한 이름으로 여러 개를 생성할 수 없음
*/
var varVariable = 10;
var varVariable = 10;

// let letVariable = 10;
// let letVariable = 10;


/*
    호이스팅 : var, function 선언문을 최상단에 선언한것처럼 동작하는 특성
    - let 키워드로 선언된 변수는 최상단에서 변수의 선언문까지  일시적 사각지대(TDZ: Temporal Dead Zone)에 빠트림
*/
console.log(varHoisting);   //undefined
var varHoisting = 10;       

// ReferenceError: Cannot access 'letHoisting' before initialization
// console.log(letHoisting);   //error.
// let letHoisting = 10;

// ReferenceError: notDefined is not defined
// console.log(notDefined);

/*
    const
*/

/*
    선언과 초기화 : 
    - const는 재할당이 불가능
    - 선언과 동시에 반드시 초기화가 이루어져야 함
*/
// const ASSIGNMENT = 10;
// ASSIGNMENT = 11;     초기화 하지 않고 재할당 하여 에러 뜸

// SyntanError: Missing initializer in const delaration
// const INITIALIZATION; //뒤에 할당값이 없으므로 빨간 줄 뜸.

/*
    상수와 객체 : 
    - 코드의 가독성 향상을 위해 많이 사용됨
    - 객체에 할당하여 참조를 변경하지 못하도록하고  속성만 변경가능하도록 함
    - 일반적으로 객체는 상수로 사용
*/

const king = { name: '이성계'  };
// TypeError: Assignment to constant variable.
// king = { name: '이방과'};

king.name = '이방과';


/*
    var, let, const(언제 쓰는지)
    -  var: ES6 이상을 사용할 수 없을 때 var을 사용함
    - let: 재할당이 발생하는 변수에는 let을 사용함
    - const: 재할당이 일어나지 않는 변수에는 const를 사용함.
*/
/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/
let variable : string 
// variable = true  앞에서 string 타입을 선언해줬으므로 문자열만 지정 가능

function func(arg: number): string{        //string으로 반환
    return arg + '';    //string으로 반환하겠다 했는데 매개변수 타입이 number여서 에러가 뜸, + ' ' 로 문자열로 변경한거임
}

const arrowFunc = (arg:number): string=> {  //위 코드와 같은 코드
    return arg + '';
}

/*
    typescript의 타입
    - string: 문자열
    - number: 숫자
    - boolean: 논리
    - null: null값
    - undefined: 정의되지 않음
    - object: 참조타입
    - away: 배열 타입
    - enum: 열거형 타입
    - void: 함수에서 반환값이 없음
    - any: 모든 타입
*/
// away type
////배열에 타입을 number로 지정했으므로 숫자만 선언 가능
const numbers: number[] =[1, 2, 3, 4, 5];   
// 제너릭 사용하여 타입 선언 가능
const numbers2: Array<number> = [1, 2, 3, 4, 5];

//enum
enum Color {
    RED, GREEN, BLUE
}
const color: Color = Color.RED;

// any: 타입 지정을 뭘 해야할 지 모를때 any타입 사용
// antV변수명에 any타입으로 숫자 10을 선언
let anyV: any = 10;
// 모든 타입 접근 가능하여서, 문자열로 접근하여도 가능
anyV = '10';    

//void
const aFunc = (): void => {

}

/*
    타입추론 : 자주사용
    - 타입을 선언하지 않고 변수에 값이 할당되는 순간에 할당된 값에 따라 변수의 타입이 결정나는 것
*/
let stringVariable = '문자열';
stringVariable = '문자열';


/*
    타입 변환 :
    as: 변수명 변경할 때 사용
    - as 키워드로 형변환 가능 ( 객체일 때 자주 사용 )
*/
const PI: any = '3.14';
let piNumber: number = PI as number; 
piNumber = Number(PI);

/*
    유니온 타입
    - 복수의 타입을 지정하는 방법, |
*/
let union: number | null;
union = 10;
union = null;
// 지정하지 않은 타입 사용으로 에러 뜸
// union = '10';

/*
    리터럴 타입
    - 지정한 리터럴 값만 가질수 있는 타입
*/
let gender: '남' | '여';
gender = '남';
gender = '여';
// 지정한 리터럴 값이 아니므로 에러 뜸
gender = '남자';

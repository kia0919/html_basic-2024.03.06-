/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/
let variable : string   //타입 지정
// variable = true  앞에서 string 타입을 선언해줬으므로 문자열만 지정 가능

function func(arg: number): string{        //string으로 반환
    return arg + '';    //string으로 반환하겠다 했는데 매개변수 타입이 number여서 에러가 뜸, + ' ' 로 문자열로 변경한거임
}

const arrowFunc = (arg:number): string=> {  //위 코드와 같은 코드
    return arg + '';
}

/*
    typescript의 타입
    - 
    -
    - 
    - 
    - 
    - 
    - 
    - 
    - 
    - 
*/


/*
    타입추론 :
    - 
*/



/*
    타입 변환 :
    - 
*/



/*
    유니온 타입
    - 
*/



/*
    리터럴 타입
    - 
*/


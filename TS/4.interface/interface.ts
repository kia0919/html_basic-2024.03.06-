/*
    인터페이스 : 
    - 객체 및 클래스의 타입으로 사용됨
    - 인터페이스에 선언된 속성 또는 메서드의 구현을 강제
    - interface 키워드로 선언
    - 다른 요소들의
*/

/*
    변수(객체)의 타입으로써 인터페이스
*/

// interface King {
//     name: string;
//     tombname: string;
//     birth: string;
//     death: string;
// }

// type예시
type King = {
    name: string,
    tombname: string,
    birth: string,
    death: string
}

const taejo: King = {
    name: '이성계',
    tombname: '태조',
    birth: '1335-11-04',
    death: '1408-06-27'
}


console.log('==================================================');

/*
    클래스의 타입으로써 인터페이스
*/

interface IMath {
    add: (a:number, b:number) => number;
}

class CMath implements IMath {
    add = (a:number, b:number) => {
            return a + b;
    }
}

console.log('==================================================');

/*
    선택적 속성 :
    - ?키워드로 인터페이스의 속성을 선택적으로 구현하도록 지정할 수 있음
*/
interface Person {
    name: string;
    birth: string;
    // 선택적 할당할 때 뒤에 ?키워드
    address?: string;
}
const person: Person = {
    name: '홍길동',
    birth: '2024-04-02',
    //address?는 선택적이기 할당이므로, 따로 선언하지 않아도 에러가 뜨지 않음, 
    //interspace에서 ?를 붙이지 않으면서, 선언지 않으면 에러가 뜬다.
};


console.log('==================================================');
/*
    클래스 정의 : class 키워드를 사용하여 선언
    - constructor(생성자)를 이용해서 멤버 변수를 선언 및 초기화를 할 수 있음
    - 생성자에서 this.키워드를 이용하여 멤버 변수를 지정1
    - new  연산자를 통해서 인스턴스를 생성할 수 있음
*/
// 왕 클래스 : 이름 / 묘명 / 생일 / 사망일
// class king {
//         constructor () {
//             this.name = '이성계';
//             this.tombName = '태조';
//             this.birth = '1335-11-04';
//             this.death = '1408-06-27';
//         }
// }

// const taejo = new king();
// console.log(taejo);
/*king {
    name: '이성계',
    tombName: '태조',
    birth: '1335-11-04',
    death: '1408-06-27'
  }*/


console.log('==================================================');

/*
    constructor: 
    - 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 용도로 사용되는 특수한 메서드 (생성자)
    - 생성자안에서 this 키워드를 이용해서 클래스의 멤버변수를 선언하고 초기화 할 수 있음
    - 생성자의 매개변수로 각 속성의 값을 받아서 초기화
    - 자바 스크립트의 생성자는 오버로드가 되지 않음
*/
class King {
//constructor () {}     JS는 오버로드 안됨!!!
    constructor (name, tombName, birth, death) {
        this.name = name;
        this.tombName = tombName;
        this.birth = birth;
        this.death = death;
    }
}

const junjong = new King ('이방과', '정종', '1357-07-26', '1419-10-24');
console.log(junjong); 


console.log('==================================================');

/* 접근제어자 4가지:public, protected, default, private.
    클래스의 필드 선언 : ES6+의 클래스가 가질 수 있는 제어자
    - 퍼블릭 필드
    - 프라이빗 필드
    - 정적(스테틱) 퍼블릭 필드
    - 정적(스테틱) 프라이빗 필드
*/
class Sample {
    //퍼블릭 필드
    publicField;
    //프라이빗 필드 # 붙여야 함
    #privateFieled
    //정적(스텍틱) 퍼블릭 필드
    static staticPublicField = '정적 퍼블릭 필드';
    //정적(스텍틱) 프라이빗 필드
    static #staticPrivateField = '정적 프라이빗 필드';

    constructor (publicField, privateField ) {
        // 인스턴스변수 생기는 거임.
        this.publicField = publicField;
        this.privateField = privateField;
        // this.staticPublicField = publicField;
        // this.#StaticprivateFieled = privateField;
    }
}


console.log('==================================================');

/*
    getter, setter : 
    - 
    - 
*/



console.log('==================================================');

/*
    인스턴스 메서드와 정적 메서드 : 
    - 
    - 
*/



console.log('==================================================');

/*
    클래스 상속 : 
    - 
    - 
    - 
*/



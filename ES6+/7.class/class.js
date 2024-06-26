/*
    클래스 정의 : class 키워드를 사용하여 선언
    - constructor를 이용해서 멤버 변수를 선언 및 초기화를 할 수 있음
    - 생성자에서 this를 이용해서 멤버 변수를 지정
    - new 연산자를 통해서 인스턴스를 생성할 수 있음
*/
// 왕 클래스 : 이름 / 묘명 / 생일 / 사망일
// class King {
//     constructor () {
//         this.name = '이성계';
//         this.tombName = '태조';
//         this.birth = '1335-11-04';
//         this.death = ' 1408-06-27';
//     }
// }

// const taejo = new King();
// console.log(taejo);

// console.log('==================================================');

/*
    constructor: 
    - 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 용도로 사용되는 특수한 메서드 (생성자)
    - 생성자안에서 this 키워드를 이용해서 클래스의 멤버변수를 선언하고 초기화 할 수 있음
    - 생성자의 매개변수로 각 속성의 값을 받아서 초기화
    - 자바스크립트의 생성자는 오버로드가 되지 않음
*/
class King {
    // constructor () {}
    constructor (name, tombName, birth, death) {
        this.name = name;
        this.tombName = tombName;
        this.birth = birth;
        this.death = death;
    }
}

const junjong = new King('이방과', '정종', '1357-07-26', '1419-10-24');
// console.log(junjong);
/*King {
    name: '이방과',
    tombName: '정종',
    birth: '1357-07-26',
    death: '1419-10-24'
  }*/

// console.log('==================================================')

/*
    클래스의 필드 선언 : ES6+의 클래스가 가질 수 있는 제어자
    - 퍼블릭 필드
    - 프라이빗 필드
    - 정적(스테틱) 퍼블릭 필드
    - 정적(스테틱) 프라이빗 필드
*/ 
class Sample1 {
    // 퍼블릭 필드: 클래스 외부에서 사용 가능
    publicField;
    // 프라이빗 필드: 클래스 내부에서만 사용 가능
    // 내부에서 접근을 할려면, class내에서 console.log()에 this.를 사용해 직접 가져와야 출력이 된다.
    #privateField;
    // 정적 퍼블릭 필드: 인스턴스화 없이 접근 가능
    static staticPublicField = '정적 퍼블릭 필드';
    // 정적 프라이빗 필드: 클래스 내부에서만 접근 가능
    static #staticPrivateField = '정적 프라이빗 필드';
    
    constructor (publicField, privateField) {
        // 인스턴스 초기화
        this.publicField = publicField;
        this.#privateField = privateField;
        // this.staticPublicField = publicField;
        // this.#staticPrivateField = privateField;

    }
}

// 초기화가 아닌, Sample1을 호출한것으로 보면 된다.
const sample1Instance = new Sample1('퍼블릭 필드', '프라이빗 필드');
// sample1은 클래스를 나타내고, publicField는 외부에서 접근이 되므로, 출력이되고, '퍼블릭 필드'가 publicField에 할당이 되므로 Sample1 { publicField: '퍼블릭 필드' }이 출력이 된다,
// privateField는 내부에서만 접근이 되므로, 출력 되지 않음
console.log(sample1Instance); // Sample1 { publicField: '퍼블릭 필드' }

// console.log(sample1Instance.#privateField);
// console.log(sample1Instance.staticPublicField);
console.log(Sample1.staticPublicField); // 정적 퍼블릭 필드

console.log('==================================================');

/*
    getter, setter : 
    - getter : 프라이빗 멤버 변수의 값을 얻을 수 있는 캡슐화 메서드
    - setter : 프라이빗 멤버 변수의 값을 할당 할 수 있는 캡슐화 메서드
*/
class Sample2 {
    #privateField;

    constructor (privateField) {
        this.#privateField = privateField;
    }

    get privateField() {
        return this.#privateField;
    }

    set privateField(privateField) {
        this.#privateField = privateField;
    }
}

const sample2Instance = new Sample2('프라이빗 필드');
console.log(sample2Instance.privateField); // 프라이빗 필드
sample2Instance.privateField = '변경 프라이빗 필드';
console.log(sample2Instance.privateField); // 변경 프라이빗 필드

console.log('==================================================');

/*
    인스턴스 메서드와 정적 메서드 : 
    - 클래스 내부에 function 키워드를 제거한 함수를 작성하여 인스턴스 메서드 선언 가능
    - static 키워드를 추가하여 정적 메서드 선언 가능
*/
class Sample3 {
    instanceMethod () {
        console.log('인스턴스 메서드'); // 인스턴스 메서드
    }

    static staticMethod () {
        console.log('정적 메서드'); // 정적 메서드
    }
}

const sample3Instance = new Sample3();
sample3Instance.instanceMethod();
Sample3.staticMethod();

console.log('==================================================');

/*
    클래스 상속 : 
    - extends 키워드를 사용하여 클래스 상속 가능
    - 메서드 오버라이딩 가능
    - super 키워드로 부모 클래스를 참조할 수 있음
    - 생성자는 상속되지 않음
*/

// 해당 부모클래스에 parentField 필드와, parentMethod()메서드를 가지고 있고,
class ParentClass {
    parentField;  //필드
    
    constructor (parentField) {
        this.parentField = parentField;
    }

    parentMethod () {
        console.log('부모 메서드');
    }
}

// 부모 클래스인 ParentClass로부터  상속 받음
class Child1Class extends ParentClass {
    child1Field;

    constructor() {
        // super로 부모 클래스를 참조.
        super('부모 필드');
        this.child1Field = '자식1 필드';
    }

    child1Method () {
        console.log('자식1 메서드');
    }
}

class Child2Class extends ParentClass {
    child2Field;

    constructor () {
        // 부모클래스의 필드, 메서드를 참조하기 위함.
        super('부모 필드');
        this.child2Field = '자식2 필드';
    }

    parentMethod () {
        //오버라이딩된 메서드
        console.log('자식2 메서드'); 
    }
}

// child1Instance 인스턴스 변수 생성
const child1Instance = new Child1Class();
console.log(child1Instance.parentField);
console.log(child1Instance.child1Field);
// 부모클래스로부터 상속받은 필드를 사용
// 자식클래스에서 새로 추가한 메서드 사용
child1Instance.parentMethod();7
child1Instance.child1Method();

// child2Instance 인스턴스 변수 생성
const child2Instance = new Child2Class();
console.log(child2Instance.parentField);
console.log(child2Instance.child2Field);
// 부모에게 상속받은 메서드를 재정의한 메서드를 사용
child2Instance.parentMethod();
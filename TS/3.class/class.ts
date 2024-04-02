/*
    클래스 정의 :
    - 속성을 사전 정의해서 사용
*/

class Sample1 {
    field: string;

    constructor(field: string) {
        this.field = field;
    }
}


console.log('==================================================');

/*
    접근제어자
    - public: 클래스 내부, 자식 클래스 내부, 모든 위치
    - protected: 클래스 내부, 자식 클래스 내부
    - private: 클래스 내부
    - typescript에는 패키지라는 개념이 없기 때문에 기본적으로 public으로 지정됨
*/
class Sample2 {
    private privateField: string;
    protected protectedField: string;
    public publicField: String;
    
        constructor () {
            this.privateField = '프라이빗 필드';
            this.protectedField = '프로텍티트 필드';
            this.publicField = '퍼블릭 필드'
        }
}

console.log('==================================================');

/*
    생성자 매개변수에 접근 제어자 지정
    - 생성자의 매개변수에 접근 제어자를 지정하여 필드 선언 가능
*/

class Sample3 {

    constructor (
        public publicField: string,
        protected protectedField: string,
        private privateField: string,
        localVariable: string //접근제어자를 지정하지 않아 매개변수로만 지정이 됨
    ) {

    }
}
const sample3Instance = new Sample3('publicField', 'protectedField', 'privateField', 'localVariable');
console.log(sample3Instance);

console.log('==================================================');

/*
    readonly :
    -  readonly가 선언된 클래스 속성 선언 시 또는 생성자 내부에서만 값을 할당 할 수 있음
    - 값을 재할당 할 수 없고 오직 읽기만 가능
    - 상수 선언에 사용됨
*/

class Sample4 {
    
    public readonly field1: string = '퍼블릭 읽기 전용 필드1'
    public readonly field2: string;

    constructor (
        field2: string,
        public readonly field3: string
    ){
        this.field2 = field2;
    }
}
const sample4Instance = new Sample4('퍼블릭 읽기전용 필드2', '퍼블릭 읽기전용 필드3');
console.log(sample4Instance);
// sample4Instance.field1 = '변경'    읽기 전용이기에 값을 변경 못함


console.log('==================================================');

/*
    추상 클래스 :
    - 하나 이상의 추상 메서드를 포함하는 클래스, abstaract키워드로 선언
*/
abstract class AbstractClass {
    abstract abstractMethod(arg: string): string; //반환타입이 string
}

class SubClass extends AbstractClass {
    abstractMethod(arg: string): string {
        return arg;
    }
}

console.log('==================================================');
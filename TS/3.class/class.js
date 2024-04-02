/*
    클래스 정의 :
    - 속성을 사전 정의해서 사용
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sample1 = /** @class */ (function () {
    function Sample1(field) {
        this.field = field;
    }
    return Sample1;
}());
console.log('==================================================');
/*
    접근제어자
    - public: 클래스 내부, 자식 클래스 내부, 모든 위치
    - protected: 클래스 내부, 자식 클래스 내부
    - private: 클래스 내부
    - typescript에는 패키지라는 개념이 없기 때문에 기본적으로 public으로 지정됨
*/
var Sample2 = /** @class */ (function () {
    function Sample2() {
        this.privateField = '프라이빗 필드';
        this.protectedField = '프로텍티트 필드';
        this.publicField = '퍼블릭 필드';
    }
    return Sample2;
}());
console.log('==================================================');
/*
    생성자 매개변수에 접근 제어자 지정
    - 생성자의 매개변수에 접근 제어자를 지정하여 필드 선언 가능
*/
var Sample3 = /** @class */ (function () {
    function Sample3(publicField, protectedField, privateField, localVariable //접근제어자를 지정하지 않아 매개변수로만 지정이 됨
    ) {
        this.publicField = publicField;
        this.protectedField = protectedField;
        this.privateField = privateField;
        // 초기화 작업
        this.publicField = publicField;
        // 필드가 아니고 매개변수이므로 생성이 되지 않음
        // this.localVariable = localVariable;
    }
    return Sample3;
}());
console.log('==================================================');
/*
    readonly :
    -  readonly가 선언된 클래스 속성 선언 시 또는 생성자 내부에서만 값을 할당 할 수 있음
    - 값을 재할당 할 수 없고 오직 읽기만 가능
    - 상수 선언에 사용됨
*/
var Sample4 = /** @class */ (function () {
    function Sample4(field2, field3) {
        this.field3 = field3;
        this.field1 = '퍼블릭 읽기 전용 필드1';
        this.field2 = field2;
    }
    return Sample4;
}());
var sample4Instance = new Sample4('퍼블릭 읽기전용 필드2', '퍼블릭 읽기전용 필드3');
console.log(sample4Instance);
// sample4.sample4Instance.field1 = '변경' // 읽기 전용이기에 값을 변경 못함
console.log('==================================================');
/*
    추상 클래스 :
    - 하나 이상의 추상 메서드를 포함하는 클래스, abstaract키워드로 선언
*/
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubClass.prototype.abstractMethod = function (arg) {
        return arg;
    };
    return SubClass;
}(AbstractClass));
console.log('==================================================');

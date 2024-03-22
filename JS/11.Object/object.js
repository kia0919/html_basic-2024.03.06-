/*
    객체 : 키(key)와 값(value)로 구성된 속성들의 집합
    - 메서드를 가질 수 있음
*/

/*
    객체 리터럴 : 자바스크립트에서 가장 일반적 객체 생성 방법
    - {}를 사용하여 객체를 생성
*/
const emptyObject = {};
const hongGildong = {
    name: '홍길동',
    age : 23,
    address : '서울특별시',
    greating: function () {
        console.log(`안녕 난 ${this.name} 이야!`)
    }
};

console.log(hongGildong);
console.log(hongGildong.name);
hongGildong.greating();

// 변수를 선언한 값을
const name = '고종';
const age = 40;
const address = '서울특별시';

// 넣으면 위에서 선언한 값이 출력
const goJong = {
    name: name,
    age: age,
    address: address
}
console.log(goJong);

console.log('==============================');

/*
//     Object 생성자 : Object 클래스의 생성자로 빈 객체 생성 가능
*/
// const emptyObjectByConstructor = new Object();


console.log('==============================');

/*
    생성자 함수 : 생성자 함수를 사용하여 클래스처럼 사용 가능
*/
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
const goGildong = new Person('고길동', 30, '인천광역시');
console.log(goGildong);
console.log(goGildong.name);

console.log('==============================');

/*
    속성 이름 (속성 키) : 
    - 일반적으로 문자열로 표기함
    - 자바스크립트에서 유효한 이름 (변수 이름으로 사용 가능한 이름)일 경우에는 따옴표를 생략할 수 있음
    - 유효한 이름이 아니면 반드시 따옴표를 포함해서 작성
*/
const suhyun = {
    // 변수명에 사용할 수 있는 이름이 아니면 반드시 다음과 같이 ''따옴표를 붙여줘야 한다.
    'first name' : 'suhyun',
    'last-name' : 'su',
    gender : 'male',
    age : 32
};
console.log(suhyun);

console.log('==============================');

/*
    속성 값 읽기 : 
    - . 표기법과 [] 표기법으로 접근 가능
    - . 표기법은 유효한 이름일 때 사용
    - [] 표기법은 유효한 이름이 아닐 때와 접근할 속성이 동적으로 변할 때([] 안에 반드시 문자열로 지정)
    - 객체에 존재하지 않는 속성에 접근하면 underfined를 반환
*/
console.log(suhyun.age);
console.log(suhyun[' last-name ']);
let property = 'first name';
console.log(suhyun[property]);

console.log('==============================');

/*
    속성 값 변경 : 
    - 객체 속성에 접근하여 새로운 값을 할당하여 변경 가능
    - 만약에 존재하지 않는 속성에 값을 할당하면 새로운 속성이 생성
*/
goJong.name = '이형';   // { name: '이형', age: 40, address: '서울특별시'}, name은 존재하는 속성이므로 '이형'으로 변경
goJong.birth = '1852-09-08'; // { name: '이형', age: 40, address: '서울특별시', birth: '1852-09-08' }, 고종에 존재하지 않는 값을 넣으면 추가가 됨.
console.log(goJong);

console.log('==============================');

/*
    속성 삭제 :
    - delete 연산자를 사용하여 객체 속성 제거 가능
*/
delete goJong.birth;
console.log(goJong); // { name: '이형', age: 40, address: '서울특별시}, birth 속성이 삭제 됬음

console.log('==============================');

/*
    for-in 문 : 
    - for-in 문으로 객체에 포함되어 있는 키를 순회해서 접근 가능
    - 반환되는 값은 문자열 타입의 키가 반환
*/
for (const key in goJong) {
    console.log(`${key}: ${goJong[key]}`);
}


console.log('==============================');

let sunJong = goJong;
 sunJong.name = '이척';

 console.log(sunJong.name);
 console.log(goJong.name);

 sunJong = {
    name: goJong.name,
    age: goJong.age,
    address: goJong.address
 };

 sunJong = {};
 for(const key in goJong) {
    sunJong[key] = goJong[key];
 }

 console.log(sunJong);

 sunJong = {};
 console.log(sunJong);

 // name, age, address, 위에서 sunJong값을 빈 객체로 만들고 goJong 객체 값을 sunJong에 할당.
 // goJong이란 값이 있는 객체가 있는데, AA = {...goJong}을 만들면 같은 name, age, 주소가 복사되어 새로운 객체가 만들어 지는데 여기서  ...goJong은 AA의 객체에 들어가고, sunJong은 복사된 새로운 객체를 향하기 때문에 sunJong은 이형으로 변하지 않는다.
 sunJong = { ...goJong };
 console.log(sunJong);

goJong.name = '이형';
console.log(goJong.name);
console.log(sunJong.name);
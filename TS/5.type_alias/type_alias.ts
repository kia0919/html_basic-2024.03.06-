/*
    타입 앨리어스 :
    - 커스텀 타입을 지정하는 방법으로 인터페이스와 유사하게 사용됨
    - type 키워드를 사용
*/
// let gender: '남' | '여';

//상수는 리터럴값에 의미? 부여할때 자주 사용
type Gender = '남' | '여';
let gender: Gender = '남';

type CustomText = string;

console.log('==================================================');

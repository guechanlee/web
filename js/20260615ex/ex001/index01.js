// 호이스팅(Hoisting) 현상
console.log(num)
var num = 10;

// ---------------------------

var num;
console.log(num)  // undefined
var num = 10;

// -----2015년 구글 엔지니어들이 ES6
let name = 'gildong'

// -----상수
const PI = 3.14;    // 상수 선언 및 초기화

/*
var(X), let(O), const(O)
*/

// 연산자
// 산술연산자
console.log(10 + 20);       // 30
console.log(10 - 20);       // -10
console.log(10 * 20);       // 200
console.log(10 / 20);       // 0.5
console.log(10 % 20);       // 10

// 대입연산자, 복합대입연산자
num = 10
num += 10; // num = num + 10
num -= 10; // num = num - 10
num *= 10; // num = num * 10
num /= 10; // num = num / 10
num %= 10; // num = num % 10

// 비교연산자
console.log(10 > 20);   // false
console.log(10 >= 20);   // false
console.log(10 < 20);   // true
console.log(10 <= 20);   // true
console.log(10 == 20);   // false
console.log(10 != 20);   // true

let num1 = 10;
let num2 = '10';
console.log('num1 == num2: ', num1 == num2); // num1 == num2: true
console.log('num1 === num2: ', num1 === num2); // num1 === num2: false
console.log('num1 === num2: ', num1 !== num2); // num1 !== num2: true
// 자바스크립트는 ==만 쓸 경우 '자동 형변환(Type Coercion)'이 일어나서 값만 비교함.
// 즉 엄격하게 비교해야할 시 ===를 사용

// 논리연산자
// &&
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// || --> or
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// ! --> not
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false

// 증감 연산자
let myScore = 80;
console.log('myScore: ', myScore); // 80

// myscore += 1;
myScore++;
console.log('myScore: ', myScore); // 81

// myscore -= 1;
myScore--;
console.log('myScore: ', myScore); // 80

// 후위 연산자
var temp = myScore--;
console.log('temp: ', temp);   // 80
console.log('myScore: ', myScore);   // 79
// 할당이 먼저 된 이후에 연산

// 전위 연산자
myScore = 80;
temp = --myScore;
console.log('temp: ', temp); // 79
console.log('myScore: ', myScore); // 79
// 연산 된 이후에 할당

// 삼항(조건식) 연산자
// status = 'success' if myScore > 80 else 'fail'

let score = 85;
let grade = score >= 90 ? 'A' : 'B';
console.log('grade: ', grade);  //true -> A false -> B
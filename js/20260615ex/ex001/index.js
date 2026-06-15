// 원시 타입
var num = 42;                //Number
var pi = 3.14;               //Number
var name = '홍길동';          // string
var name = "홍길동";          // string
// var name = "홍길동";       // string (X)
var isStudent = true;        // Boolean
// python만 대문자로 시작한다.  True False
var nothing;                 // UndeFined

console.log('num: ', num);
console.log('num type: ', typeof(num));

console.log('num: ', pi);
console.log('num type: ', typeof(pi));

console.log('num: ', name);
console.log('num type: ', typeof(name));

console.log('num: ', isStudent);
console.log('num type: ', typeof(isStudent));

console.log('num: ', nothing);
console.log('num type: ', typeof(nothing));


// 참고 타입
var fruits = ['사과', '바나나', '포도']  // Array
console.log('fruits: ', fruits);
console.log('fruits length: ', fruits.length);
console.log('fruits type: ', typeof(fruits) );
var person = {
    'name': '홍길동',
    'age': 20,
    'mail': 'gildong@gmail.com'
};  // Object
console.log('person', person);
console.log('person type:', typeof(person) );

var myFun = function() {
    console.log('myFun() CALLED!!');
}
console.log('myFun: ', myFun);
console.log('myFun type: ', typeof(myFun));
myFun();


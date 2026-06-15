// 제어문 - 조건문(if문, switch ~ case문)
/*
if문
if (조건식) {
    실행문
}
*/
let age = 20  
if (age >= 18) {    // 파이썬과 다르게 ()괄호를 해줘야한다
    console.log('성인 입니다.')
}

/*
if else문  -> 양자택일
*/
let isLogin = false;
if (isLogin) {
    console.log('로그인 되어 있어요.')
} else {
    console.log('로그인 되어 있지않아요.')
}

/* 
if ~ else if ~ else if .......  -> 다중 비교
*/
let score = 85; 
if (score >= 90) {
    console.log('A학점');

} else if (score >= 80) {
    console.log('B학점');

} else if (score >= 70) {
    console.log('C학점');

} else if (score >= 60) {
    console.log('D학점');

} else {
    console.log('F학점');
}

// switch문 --> 콕! 찝어서 실행
let day = 3;
switch(day) {

    case 1:
        console.log('월요일')
        break;     
    
    case 2:
        console.log('화요일')
        break;

    case 3:
        console.log('수요일')
        break;   

    case 4:
        console.log('목요일')
        break;

    default:
        console.log('몰라요!!') 
}

// switch문은 break를 반드시 걸어줘야한다
// default: 기본 값 아무것도 선언이 되지 않을때 선언됨 (맨 뒤에다가 넣는 걸 선호 break를 안해도 되기 때문)


// 제어문 - 반복문(forr문, while문)
// for문 -> 횟수에 의한 반복 실행
/*
1에서 부터 10까지의 정수의 합

for (초기식; 조건식; 증감식) {
    반복 실행문
}
*/

// let sum = 0;
// for (let n = 1; n < 11; n ++) {  // 1부터 10까지 1씩 증가해라!
//     sum += n;
// }

// console.log('sum: ', sum);      // 55

// let sum = 0;
// let n = 1;
// for (; n < 11; n++) {
//     sum += n;
// }       

// console.log('sum: ', sum);      //55

// for (let i=10, j=0; i > 0, j < 10; i--, j++) {
//     console.log('i: ', i);
//     console.log('j: ', j);
// }

// for (let i=10, j=0; i > 0, j < 10; i--) {
//     console.log('i: ', i);
//     console.log('j: ', j);
// }

// for (let i=10, j=0; true; i--, j++) {
//     console.log('i: ', i);
//     console.log('j: ', j);
// }

// while문 -> 조건에 의한 반복 실행
/*
while (조건식) {
    실행문
}
*/
// let k = 3;
// while (k < 10) {
//     console.log('k: ', k);
//     if (k >= 7) {
//         break;
//     }
//     k++;
// }

// do ~ while문
let count = 5;
do {
    console.log('count: ', count);      // 5
    count--;
} while(count > 10);

let pt = prompt("이름을 입력하세요:");
console.log('pt: ', pt);
//외부에서 주입된 모든 데이터는 String
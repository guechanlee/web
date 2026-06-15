// 컨테이너 자료형
/*
1. 컨테이너 자료형이란?
컨테이너(Container) 자료형이란 여러 개의 데이터를 하나의 변수에 담아 관리할 수 있는 자료형을 말합니다.
즉, 하나의 값이 아닌 값들의 집합(묶음)을 표현할 수 있습니다.

JavaScript의 대표적인 컨테이너 자료형은 다음과 같습니다.
 - 배열(Array): 순서가 있는 데이터의 집합(by index)
 - 객체(Object): 이름(키)과 값(value)으로 구성된 데이터의 집합
*/

// 배열(Array)
// - 대괄호 []로 묶어 표현하며, 순서(index)를 기반으로 각 요소에 접근합니다.
// 인덱스는 0부터 시작합니다.

let fruits = ['사과', '바나나', '포도'];
// console.log('fruits: ', fruits);
// console.log('fruits[0]: ', fruits[0]);
// console.log('fruits[1]: ', fruits[1]);
// console.log('fruits[2]: ', fruits[2]);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// 마지막 값 구하기
let lastData = fruits[fruits.length-1]
console.log(lastData);

console.log(fruits[10]);    // undefined

// 객체(object) ---> dic
let man = {
    'name': '홍길동',
    'age': 20,
    'mail': 'gildong@gmail.com',
    'hobby': ['축구', '농구', '배구'],
    'fun': function() {
        console.log('멍멍~~')
    }
}

console.log('man: ', man);
console.log('man name: ', man['name']);
console.log('man hobby: ', man['hobby']);
console.log('마지막 데이터: ', man['hobby'][man['hobby'].length - 1]);

man['fun']();

// 함수(function)
// 1. function 함수이름(매개변수,....) {
//      함수 실행 구문
//    }

// 함수 선언부
function intro() {
    alert('안녕하세요!!');
}

intro();        // 함수 호출부
intro();        // 함수 호출부

// 2. 함수 표현식(function expression)
/*
const 함수이름 = function(매개변수, .....) {
    함수 실행부
}
*/

// 익명 함수를 사용한다
const intro1 = function() {
    alert('안녕하세요!!!!!!');
}

intro1();

// 3. 화살표 함수(arrow function) at ES6
/*
const 함수이름 = (매개변수, .....) => {
        함수 실행부
    }
*/

const intro2 = () => {
    alert('안녕하세요!!!!!!!!!!!!!!!!!!')
}

intro2();

const intro3 = n1 => alert('안녕하세요~~~');
intro3();

const add = (n1, n2) => {
    return n1 + n2;
}

const add = (n1, n2) => n1 + n2
//중간에 리턴을 선언을 해준다

let result = add(10, 20)
console.log('result: ', result);

/*
1. DOM이란?
DOM(Document Object Model)은 HTML 문서를 자바스크립트가 접근하고 조작할 수 있도록 표현한 객체 모델입니다.

즉, 브라우저는 HTML 문서를 해석해서 트리 구조(Tree Structure)의 객체로 변환하며,
이를 통해 자바스크립트가 웹페이지의 요소(엘리먼트)를 읽거나 수정할 수 있습니다.

 

핵심 개념

Document: 웹 문서 전체를 의미 (HTML 파일)
Element(요소): <div>, <p>, <button> 같은 HTML 태그
Node(노드): 모든 HTML 요소, 속성, 텍스트 등을 포함하는 트리 구조의 구성 단위
조작 가능: JS로 HTML의 내용, 속성, 스타일 등을 추가·변경·삭제 가능


자바스크립트에서는 DOM에 접근하기 위해 document 객체를 사용합니다.
HTML 문서 전체를 나타내는 루트 객체입니다.

 

(1) 요소 선택

document.getElementById("id이름");            // id로 선택
document.getElementsByClassName("클래스이름"); // 클래스명으로 선택
document.getElementsByTagName("태그이름");     // 태그 이름으로 선택
document.querySelector("선택자");             // CSS 선택자 1개 선택  ---> 가장 중요!!
document.querySelectorAll("선택자");          // CSS 선택자 여러 개 선택



(2) 요소 내용 변경

요소.innerText = "새로운 텍스트";
요소.innerHTML = "<b>새로운 HTML</b>";
 

(3) 속성 조작

요소.setAttribute("속성명", "값");  // 속성 추가/변경
요소.getAttribute("속성명");       // 속성 값 읽기
요소.removeAttribute("속성명");    // 속성 삭제
 

(4) 스타일 변경

요소.style.color = "red";
요소.style.backgroundColor = "yellow";
 

(5) 새로운 요소 추가 / 삭제

let newEl = document.createElement("p"); // 새 요소 생성
newEl.innerText = "안녕하세요!";
document.body.appendChild(newEl);        // 문서에 추가

document.body.removeChild(newEl);        // 요소 삭제
*/
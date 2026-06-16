const SIGN_UP_VIEW  = 1
const SIGN_IN_VIEW  = 2
const SIGN_OUT_VIEW = 3
const WRITE_VIEW    = 4
const LIST_VIEW     = 5
const HOME_VIEW     = 6

let signUpWrap  = '';
let signInWrap  = '';
let writeWrap   = '';
let listWrap    = '';

// 회원가입 로그인 일기작성 일기 리스트 엘리멘트를 잡기
function initViews() {
    console.log('initViews() CALLED!!')

    signUpWrap = document.querySelector('div.sign_up_wrap');
    signInWrap = document.querySelector('div.sign_in_wrap');
    writeWrap = document.querySelector('div.write_wrap');
    listWrap = document.querySelector('div.list_wrap');

}


function showSelectedView(viewNo) {
    console.log('showSelectedView() CALLED!!')
    
    switch(viewNo) {

        case SIGN_UP_VIEW:
            signUpWrap.style.display = 'block';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none'; 
            break;
    
        case SIGN_IN_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'block';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none'; 
            break;

        case HOME_VIEW:         // sign ined

        case SIGN_OUT_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none'; 
            break;

        case WRITE_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'block';
            listWrap.style.display = 'none'; 
            break;

        case LIST_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'block'; 
            break;
        
        
}};
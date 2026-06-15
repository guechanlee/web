// document > html > head > body > div > dom 트리
document.addEventListener('DOMContentLoaded', function(){
    console.log('DOCUMENT READY!!');

    init();
});

// 커다란 도큐먼트 안에있는 엘리먼트중에 하나를 잡아야한다

function init() {
    console.log('init() CALLED!!');
    
    initViews();
    addEvents();

}



function addEvents() {
    console.log('addEvents() CALLED!!');

    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICKED!!');

        showSelectedView(SIGN_UP_VIEW);

    });


    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICKED!!');

        showSelectedView(SIGN_IN_VIEW);
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICKED!!');

        showSelectedView(SIGN_OUT_VIEW);
    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn CLICKED!!');

        showSelectedView(DIARY_WRITE_VIEW);
    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn CLICKED!!');

        showSelectedView(DIARY_LIST_VIEW);
    });

    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]')
    signUpBtn.addEventListener('click', function() {
        console.log('signUpBtn CALLED!!');

        let u_id = document.querySelector('div.sign_up_wrap input[name=u_id]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name=u_pw]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name=u_mail]').value;

        addMember(u_id, u_pw, u_mail);

        alert('SIGN UP SUCCESS!!')

        document.querySelector('div.sign_up_wrap input[name=u_id]').value = '';
        document.querySelector('div.sign_up_wrap input[name=u_pw]').value = '';
        document.querySelector('div.sign_up_wrap input[name=u_mail]').value = '';
    });
}


// querySelector -> css선택자 

// 내가 뛰운 웹문서에 귓대기를 하나 단다 랜더링되다가 끝날때 쯤 DOMContentLoaded 로 알려줘
// 랜더링이 다되면 document라는 웹문서에다가 DOMContentLoaded라고 알려준다

// 콜백 함수 
//엘리먼트
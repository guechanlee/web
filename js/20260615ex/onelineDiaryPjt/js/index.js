//                           이벤트 종류         콜백함수
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('DOCUMENT READY!!')

    // const el = document.querySelector('div.menu_wrap a.sign_up')
    // console.log('--->', window,getComputedStyle(el).display);
    // 무슨 형태의 블록인지 먼저 확인

    init();
});

function init() {
    console.log('init() CALLED!!')

    // set dumy data

    
    // 뷰와 관련된 내용
    initViews();

    // 이벤트와 관련된 내용
    addEvents();
}   




function addEvents() {
    console.log('addEvents() CALLED!!')

    // MENU BUTTON EVENT START
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
        signUpMenuBtn.addEventListener('click', function() {
            console.log('signUpMenuBtn CLICKED!!')

            showSelectedView(SIGN_UP_VIEW);

});
    
    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
        signInMenuBtn.addEventListener('click', function() {
            console.log('signInMenuBtn CLICKED!!')

            showSelectedView(SIGN_IN_VIEW);

});

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
        signOutMenuBtn.addEventListener('click', function() {
            console.log('signOutMenuBtn CLICKED!!')

            signInedMemberId = '';

            // 메뉴 체인지
            setMenuByStatus(SIGN_OUT_STATUS);

            // 뷰 체인지
            showSelectedView(SIGN_OUT_VIEW);

});

     let deleteMenuBtn = document.querySelector('div.menu_wrap a.delete');
        deleteMenuBtn.addEventListener('click', function() {
            console.log('deleteMenuBtn CLICKED!!')

            removeMember();
            alert('CONGRATURATION REMOVE!!')

            signInedMemberId == '';

            setMenuByStatus(SIGN_OUT_STATUS);

            showSelectedView(HOME_VIEW);
            
});
    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
        writeMenuBtn.addEventListener('click', function() {
            console.log('writeMenuBtn CLICKED!!');


        if (signInedMemberId === '') {
            alert('Please SIGN IN!!');
            showSelectedView(SIGN_IN_VIEW);
            return;

        }
        
        showSelectedView(WRITE_VIEW);
            
});

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
        listMenuBtn.addEventListener('click', function() {
            console.log('listMenuBtn CLICKED!!');

            if (signInedMemberId === '') {
                alert('Please SIGN IN!!');
                showSelectedView(SIGN_IN_VIEW);
                return;
            }

            listUpDiaries();

            showSelectedView(LIST_VIEW);

           
});
    // MENU BUTTON EVENT END


    // SIGN UP 버튼을 누르면 함수를 실행해라
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
        signUpBtn.addEventListener('click', function() {
            console.log('signUpBtn CLICKED!!');

        let uIdEle = document.querySelector('div.sign_up_wrap input[name="u_id"]')
        let uPwEle = document.querySelector('div.sign_up_wrap input[name="u_pw"]')
        let uMailEle = document.querySelector('div.sign_up_wrap input[name="u_mail"]')

        alert('SIGNUP SUCCESS!!')
        
        addMember(uIdEle.value, uPwEle.value, uMailEle.value);

        removeValue([uIdEle, uPwEle, uMailEle]);

});         

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
        signInBtn.addEventListener('click', function() {
            console.log('signInBtn CLICKED!!');

        let uIdEle = document.querySelector('div.sign_in_wrap input[name="u_id"]');
        let uPwEle = document.querySelector('div.sign_in_wrap input[name="u_pw"]');
        
        let isMember = searchMember(uIdEle.value, uPwEle.value); 
    
        
        if (isMember) {
            signInedMemberId = uIdEle.value;
            alert('SIGNIN SUCCESS!!');

            setMenuByStatus(SIGN_IN_STATUS);

            showSelectedView(HOME_VIEW);
            
        } else {
            signInedMemberId = '';
            alert('SIGNIN FAIL!!');

            setMenuByStatus(SIGN_OUT_STATUS);
        }

        
                  
        removeValue([uIdEle, uPwEle])
        

});         

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function() {
        console.log('writeBtn CLICKED!!');

        let txt = document.querySelector('div.write_wrap input').value;

        
        addDiary(getCurrentDate() + txt);

        removeValue([document.querySelector('div.write_wrap input')]);

        showSelectedView(LIST_VIEW);

    });
}

function removeValue(eles) {
    console.log('removeValue() CALLED!!');

    for(let i = 0; i < eles.length; i++) 
        eles[i].value = '';
    }

function listUpDiaries() {
    console.log('listUpDiaries() CALLED!!');

    listWrap.textContent = '';

    let diaryArr = searchDiaries();
    
    for (let i = 0; i < diaryArr.length; i++) {

        let tpl = document.querySelector('#list_item');
        // 템플릿을 선택
        let clone = document.importNode(tpl.content, true);
        // importNode로 복제
        let txt = clone.querySelector('div.txt');
        // 그중에 'div.txt' 를 가져온다
        txt.textContent = diaryArr[i];

        listWrap.prepend(clone);
    }

}



    
const memberDB = new Map();
const diaryDB = new Map();

function addMember(id, pw, mail) {
    console.log('adddMember() CALLED!!');


        memberDB.set(id, {
            'u_id': id,      
            'u_pw': pw,      
            'u_mail': mail
          });

        diaryDB.set(id, []);

}


function searchMember(id, pw) {
    console.log('searchMember() CALLED!!')

    let memObj = memberDB.get(id);       // -> 데이터 타입? Object

    if (memObj !== undefined && memObj.u_pw === pw)  {
        return true;
    }   
    return false
    
} 
        //fm : removeMemberBySignedMemberID
function removeMember() {
    console.log('removeMemver() CALLED!!')

    // memberDB 에서 signInedMemberId를 가져온다
    memberDB.delete(signInedMemberId);

    console.log('memberDB: ', memberDB)

}


function addDiary(txt) {
    console.log('addDiary() CALLED!!');

    let diaryArray = diaryDB.get(signInedMemberId);
    diaryArray.push(txt);

    console.log('diaryDB:', diaryDB);

}

function searchDiaries() {
    console.log('searchDiaries() CALLED!!');

    let diaryArray = diaryDB.get(signInedMemberId); // Array
    return diaryArray;
}

     
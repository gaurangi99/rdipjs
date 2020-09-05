function task2_name(){

}

function task2_phoneNo(){
    var p=document.getElementById("phone").value;
    var text;
    if(isNaN(p) || p<1000000000 || p<10000000000){
        text='Invalid input';
    }
    else{
        text='Valid input!';
    }
    document.getElementById("pno").innerHTML=text;
}

function task2_email(){
    
}

function task3_palindrome(s) {
    var remove = /[^A-Za-z0-9]/g;
    s = s.toLowerCase().replace(remove, '');
    var size = s.length;
    for (var i = 0; i < size/2; i++) {
      if (s[i] !== s[size - 1 - i])
          return false;
    }
    return true;
}

function task3_anagram(str,word){
    var s1 = this.str.toLowerCase().split('').sort().join('').trim();
    var s2 = this.word.toLowerCase().split('').sort().join('').trim();

    if (s1 === s2) {
        return true;
    } else {
        return false;
    }
}
function task2_name(){

}

function task2_phoneNo(){
    var pno=document.getElementById("phone").value;
    var text;
    if(isNaN(pno) || pno<1000000000 || pno<10000000000){
        text='Invalid input!';
    }
    else{
        text='Valid input!';
    }
    document.getElementById("phone").innerHTML=alert(text);
}

function task2_email(){
    
}

function task3_palindrome() {    
    var pd=document.getElementById("palindrome").value;
    var remove = /[^A-Za-z0-9]/g;
    pd = pd.toLowerCase().replace(remove, '');
    var size = pd.length;
    for (var i = 0; i < size/2; i++) {
      if (pd[i] !== pd[size - 1 - i])
          return false;
    }
    return true;
}

function task3_anagram(){
    var str=document.getElementById("anagram_str").value;
    var word=document.getElementById("anagram_word").value;
    var s1 = this.str.toLowerCase().split('').sort().join('').trim();
    var s2 = this.word.toLowerCase().split('').sort().join('').trim();

    if (s1 === s2) {
        return true;
    } else {
        return false;
    }
}
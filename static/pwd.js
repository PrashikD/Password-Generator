function copyPassword() {
    console.log("inside of copyPassword() ");
    if(document.getElementById('password').value.length == 0){
        alert('Please generate password to copy! ');
        return;
    }

    var textbox = document.getElementById('password');
    textbox.select();
    textbox.setSelectionRange(0, 99999)
    document.execCommand("copy");

    document.querySelector('span.copy-button-text').innerHTML = '&#10004';

    setTimeout( () => {
        document.querySelector('span.copy-button-text').innerText = 'Copy';
    } , 800);

}

function displayValue() {
    document.getElementById('rangev').innerHTML = document.getElementById('range').value;

}



function shuffle(string) {
    var a = string.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
};


function generatePassword() {
    var len = document.getElementById('range').value;

    var letter_check1 = document.getElementById('letter_check1').checked;
    var letter_check2 = document.getElementById('letter_check2').checked;
    var number_check = document.getElementById('number_check').checked;
    var symbol_check = document.getElementById('symbol_check').checked;

    var charset = '';
    var pwd = '';

    if(letter_check1 == false && letter_check2 == false && number_check == false && symbol_check == false){alert('Please check at least one checkbox!'); return;}

   
    if(letter_check1 == true){charset += 'zrohtfuivxkajmwnqlbycepdgs';}
    if(number_check == true){charset += '2859067341';}
    if(symbol_check == true){charset += '$+*(!@&-^)#%';}
    if(letter_check2 == true){charset += 'FZASJLXYOTMNIBVEQKDPWGHUR';}
    
    charlen = charset.length;
    while (pwd.length <= len){
        let index = randInt(randInt(0, Date.now()) - Date.now(), Date.now() + randInt(0, Date.now()));
        if (index < 0 || index % 2 != 0){
            continue;
        }
        console.log("index generated", index);
        index = (index / 2) % (charlen - 1);
        console.log("After mod", index);
        if (index < (charset / 2))
        {charset = shuffle(charset);}
        pwd += charset[index];
    }
        
    
  

    pwd = shuffle(pwd);


    document.getElementById('password').value = pwd;

    // create a h3 element with class password-text
    // append it to children of password-container

    var password_text = document.createElement('h3');
    password_text.classList.add('password-text');
    password_text.innerText = pwd;

    // if children < 10 then append first 
    // else delete last child and append first
    const passwords_container = document.querySelector('div.passwords-container');
    
    if (passwords_container.children.length < 9 && passwords_container.children.length > 0) {
        passwords_container.insertBefore(password_text, passwords_container.firstChild);
    }
    else if (passwords_container.children.length >= 9) {
        passwords_container.removeChild(passwords_container.lastChild);
        passwords_container.insertBefore(password_text, passwords_container.firstChild);
    }
    else{
        passwords_container.appendChild(password_text);
    }



}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

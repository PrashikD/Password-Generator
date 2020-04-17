function copyPassword() {
    if(document.getElementById('password').value == ""){
        alert('Please generate password to copy! ');
        return;
    }

    var textbox = document.getElementById('password');
    textbox.select();
    textbox.setSelectionRange(0, 99999)
    document.execCommand("copy");

    document.getElementById('copy').innerHTML = "Copied  !";

   setTimeout(function (){document.getElementById('copy').innerHTML = "Copy";}, 800);


}

function displayValue() {
    document.getElementById('rangev').innerHTML = document.getElementById('range').value;

}

function generatePassword() {
    var len = document.getElementById('range').value;

    var letter_check1 = document.getElementById('letter_check1').checked;
    var letter_check2 = document.getElementById('letter_check2').checked;
    var number_check = document.getElementById('number_check').checked;
    var symbol_check = document.getElementById('symbol_check').checked;

    var charset = '';
    var pwd = '';

    if(letter_check1 == false && letter_check2 == false && number_check == false && symbol_check == false){alert('Please check at least one checkbox!');}

    if(letter_check1 == true){charset += 'abcdefghijklmnopqrstuvwxyz';}
    if(letter_check2 == true){charset += 'ABDEFGHIJKLMNOPQRSTUVWXYZ';}
    if(number_check == true){charset += '0123456789';}
    if(symbol_check == true){charset += '!@#$%^&*()-+';}

    for(let i = 1; i <= len; i++){
        pwd += charset[randInt(0, charset.length - 1)];
    }

    document.getElementById('password').value = pwd;

    document.getElementById('copy-button').disabled = false;


}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
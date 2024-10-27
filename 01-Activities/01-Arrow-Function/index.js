//1. funnyCase makes each letter in a string the opposite case as the one before
var funnyCase = string => {
    var newString = '';
    for (var i = 0; i < string.length; i++) {
        if (i % 2 === 0) newString += string[i].toLowerCase(); // စားလို့ ပြတ်တဲ့ဟာကို toLowerCaseပြောင်းပြီး ထည့်ပေးပါ
        else newString += string[i].toUpperCase(); // စားလို့ မပြတ်တဲ့ဟာကို toUpperCase ပြောင်းပြီး ထည့်ခြင်း
    }
    return newString;
};

// Prints `yOu cAn't jUst Do wHaTeVeR YoU WaNt aLl tHe tImE!` //ထွက်လာသည့်ပုံစံများ
console.log(funnyCase("You can't just do whatever you want all the time!"));// string-အတွက် ထည့်ထားခြင်း
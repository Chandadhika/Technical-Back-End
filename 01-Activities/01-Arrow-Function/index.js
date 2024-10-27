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


// 2. Map lets you loop over an array and modify the elements inside
var map = (arr, cb) => {
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var currentElement = arr[index];
        result.push(cb(currentElement, index));
    }
    return result;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var doubled = map(numbers, element => {
    return element * 2; // 2-နဲ့ မြှောက်
});

// Prints `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`
console.log(doubled);
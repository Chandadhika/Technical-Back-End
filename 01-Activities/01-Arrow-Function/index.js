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


// 3. Filter lets you loop over an array and remove elements
var filter = (arr, cb) => {
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var currentElement = arr[index];
        if (cb(currentElement, index)) {
            result.push(currentElement);
        }
    }
    return result;
};

var evenNumbers = filter(numbers, currentElement => {
    return currentElement % 2 === 0; // 2-နဲ့ စားလို့ ပြတ်တဲ့စုံဂဏန်း 
});

// Prints `[2, 4, 6, 8, 10]`
console.log(evenNumbers);


// 4. netflixQueue is an object for managing your netflix queue
var netflixQueue = {
    // ဇာတ်ကား ၄-ကား ထည့်ထားခြင်း
    queue: [
        'Mr. Nobody',
        'The Matrix',
        'Eternal Sunshine of the Spotless Mind',
        'Fight Club'
    ],

    // ကြည့်ပြီးသား ဇာတ်ကားကို ပယ်ဖျက်ခြင်း
    watchMovie: () => {
        this.queue.pop();
    },

    // နောက်ထပ်ကြည့်ရန် ဇာတ်ကားအသစ်ကို ပြသခြင်း
    addMovie: movie => {
        this.queue.unshift(movie);
    },

    printQueue: () => {
        var list = '';
        for (var i = this.queue.length - 1; i >= 0; i--) {
            var currentMovie = this.queue[i];
            list += this.queue.length - i + '. ' + currentMovie + '\n'; // (+= ယခင်ရှိသော တန်ဖိုးကို ယူပြီး အသစ်ထည့်သွင်းခြင်း)
        }
        console.log(list);
    }
};

console.log('Printing movie queue!\n'); // then next (\n-နောက်တစ်ခုသို့ ပြောင်းရန်)
netflixQueue.printQueue(); // အစဥ်လိုက် ပြသခြင်း
netflixQueue.watchMovie(); // ကြည့်ပြီးသားကို စာရင်းမှ ပယ်ဖျက်ခြင်း
console.log('\nWatched a movie!\n');
console.log('Printing movie queue!\n');
netflixQueue.printQueue(); // စီးရီးကို ပြန်လည်ပြသခြင်း
console.log('\nAdding a movie!\n');
netflixQueue.addMovie('Black Swan');
console.log('Printing movie queue!\n');
netflixQueue.printQueue();
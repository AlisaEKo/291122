//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//    Home Assignment 1 - sorting algorithms 1 & string manipulation 1
// ----------------------------------------------------------------------
//              grading system: (for each question)
//       
// 1. if the code is not working - *0
// 2. if the code is working but not according to the instructions - *0.5
// 3. if there's no explanation -  *0.75
// 4. late submission - final_grade -=  10*days_late
//
// ----------------------------------------------------------------------
//  --------------- DUE DATE: 05/12/2022 at 11:59pm ---------------------
// ______________________________________________________________________


// ______________________________________________________________________
//
// ------------------------  PART 1 - 60 Points -------------------------
//_______________________________________________________________________


// 1. sorting algorithms - bubble sort, selection sort, insertion sort
// part 1 - 60 points 20 points each

/*
* write the fulling functions below - you can't any built-in methods
* click the link to see the algorithm
* try implementing the algorithm in your own words
*/

// helpfull links:
// link to visualize the sorting : https://visualgo.net/en/sorting
// https://algorithm-visualizer.org/brute-force/bubble-sort (bubble sort)
// https://algorithm-visualizer.org/brute-force/selection-sort (selection sort)
// https://algorithm-visualizer.org/brute-force/insertion-sort (insertion sort)


// 1.1 bubble sort - sortin 
// 

const bubbleSort = (arr) => {
    // Create loop to go over the elements
    for (let i = 0; i < arr.length - 1; i++) {

        // Last i elements are already in place
        for (let j = 0; j < arr.length + 1; j++) {

            // Comparing two adjacent numbers 
            // and see if first is greater than second
            if (arr[j] > arr[j + 1]) {

                // Swap them if the condition is true 
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        // Print the sorted array
    };
}

let arr = [85, 23, 35, 98, 5];
bubbleSort(arr);
console.log(arr)


// 1.2 selection sort - https://en.wikipedia.org/wiki/Selection_sort

const selectionSort = (arr) => {
    // Create loop to go over the elements and store the first element as the newLow
    for (let i = 0; i < arr.length; i++) {
        let newLow = i;

        // Inner loop to check if there is a lower valeu
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[newLow]) {
                newLow = j;
            }
        }
        if (newLow !== i) {

            // Swap
            [arr[i], arr[newLow]] = [arr[newLow], arr[i]];
        }
    }

    return arr;
};

console.log(selectionSort([103, 85, 7, 29, 16]));

// 1.3 insertion sort - https://en.wikipedia.org/wiki/Insertion_sort

const insertionSort = (arr) => {
    // Create a loop function
    for (let i = 1; i < arr.length; i++) {
        let valueForNow = arr[i];
        let j;
        // Compare the second number to the first and insert if needed
        for (j = i - 1; j >= 0 && arr[j] > valueForNow; j--) {
            arr[j + 1] = arr[j]
        }
        // Place the element in the correct place
        arr[j + 1] = valueForNow;
    }
    return arr
};

console.log(insertionSort([5, 2, 507, 101, 98]));



//_______________________________________________________________________
//
// ------------------------  PART 2 - 40 Points -------------------------
//_______________________________________________________________________




// 2. working with strings! - without using built-in methods!
// part 2 - 40 points 10 points each


// 2.1 Capitalize the first letter of a string
const capitalize = (str) => {
    // Create string of low case and upper case letters
    let lowCase = "abcdefghijklmnopqrstuvwxyz";
    let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newStr = "";
    let found = false;
    // Create loop to find the letter in the place [0] and swap if you find it
    for (let i = 0; i <= lowCase.length; i++) {
        if (lowCase[i] == str[0]) {
            newStr += upCase[i];
            found = true;
        }
    }
    // If you don't find it write the letters as they were
    if(!found)
    {
        return str;
    }
    //Copy the rest of the letters if needed
    for (let j = 1; j <= str.length - 1; j++) {
        newStr += str[j];
    }
    return newStr;
};

// console.log(capitalize("hello world"));

// example:
// let str = "hello world";
// console.log(capitalize(str)); -> "Hello world"

// 2.2 Capitalize the first letter of each word in a string
const capitalizeWords = (str) => {
    let tempStr = "";
    let newStr = "";
    // Create loop to iterate over received string
    for( let i = 0; i < str.length; i++) {
        //If end of the string record letter to temp string capitalize and add it to returned string
        if(i == str.length - 1) {
            tempStr += str[i];
            newStr += capitalize(tempStr);
        }
        //record letter as long as it diffrent from " "
        else if(str[i] != " ")
        {
            tempStr += str[i];
        }
        //For the first " " after a letter 1)add space 2)capitilize tempstring and add it to returned string 3)reset tempstring for next word
        else if(i > 0 && str[i-1] != " ")
        {
            tempStr+=" ";
            newStr += capitalize(tempStr);
            tempStr = "";
        }
    }
    return newStr;
};
//Roman Car
// console.log("1",capitalizeWords("ron"));
// console.log("2",capitalizeWords(" ron"));
// console.log("3",capitalizeWords("ron "));
// console.log("4",capitalizeWords("ron ron"));
// console.log("5",capitalizeWords("ron + ron"));
// console.log("6",capitalizeWords(" ron + ron "));
// console.log("7",capitalizeWords(""));
// console.log("8",capitalizeWords(" "));
// console.log("9",capitalizeWords("ron             dina"));
// console.log("10",capitalizeWords("*ron             -dina"));
// console.log("11",capitalizeWords("*"));
// console.log("12",capitalizeWords("a"));


// example:
let str = "my name is alisa";
console.log(capitalizeWords(str)); 
// -> "Hey Mom"

// 2.3 Reverse a string 
const reverseString = (str) => {
    let localString = "";
    // Iterate from the end of a string to begining and add each letter to the new string
    for (let i = 0; i < str.length; i++) {
        localString += str[str.length - 1 - i];
    }
    return localString;
}


let word = "roman";
word = reverseString(word);
console.log(word);

// example:
// let srt = "Pizza";
// console.log(reverseString(str)); -> "azzip" - notice that the capital P is not capitalized


// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// but not the white spaces in the middle of the string
const trim = (str2) => {
    // let doneTrimming = false;
    // let ret = "";
    // for (let i = 0; i < str2.length; i++) {
    //     if(str2[i] !== ' '){
    //         doneTrimming = true;
    //     }
    //     if(doneTrimming){
    //         ret += str2[i]
    //     }
    // }
    // return ret;
    let i = 0;
    let j = str2.length-1;
    let newString="";
    //Find begining of string without spaces
    while(str2[i] == " ")
    {
        i++;
    }
    //Find end of string without spaces
    while(str2[j] ==" ")
    {
        j--;
    }
    //Copy string from start to finish
    for(;i<=j;i++)
    {
        newString+=str2[i];
    }
    return newString;
};



// example:
let str2 = "   hello world   ";
console.log(trim(str2));
//  -> "hello world"


//______________________________________________________________________
//
// ---------------------- BONUS QUESTIONS ------------------------------
//______________________________________________________________________


// Hard mode Bonus! - 15 points -> code wihout explanation will get 0 points

// fibunacci sequence - https://en.wikipedia.org/wiki/Fibonacci_number
// write a function that returns the nth number in the fibonacci sequence

const fibonacci = (n) => { };

// example:
// let n = 7;
// console.log(fibonacci(n)); -> 13


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !submit your homework on github and send me the link to your homework!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Good Luck!


// #####################################################################
//  ---------------------- Done? Submit! -------------------------------
// #####################################################################



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function fizzBuzz (number) {
    
    if (typeof(number) == "number" && (number % 15 == 0)) {
        if (number > 0){
        return "Fizz-Buzz";
        } else {
            return number;
        }
    } else if (typeof(number) == "number" && (number % 3 == 0)) {
        return "Fizz";
    } else if (typeof(number) == "number" && (number % 5 == 0)) {
        return "Buzz";
    } else if (typeof(number) == "number"){
        return number
    } else {
        alert ("Error!");
    };

};

for (let i=0; i <= 100; i++) {
    console.log(fizzBuzz(i))
};

 
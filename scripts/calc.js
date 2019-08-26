//Here we intitialize the calculator object function, and set the value to 0
Calculator = function() {
    this.value= 0;
};



//The code below adds a prototype to the calculator object above, the += increments the value we set by a single value given as an argument
Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!")
    }
};

Calculator.prototype.multiply = function(number) {
    if (typeof(number) == "number" && this.value == 0)  {
        this.value += 1;
        this.value *= number;
    } else if(typeof(number) == "number") {
        this.value *= number;
    }
    else {
        alert("Error!")
    }
};

Calculator.prototype.minus = function(number) {
    if (typeof(number) == "number") {
        this.value -= number;
    } else {
        alert("Error!")
    }
};

Calculator.prototype.divide = function(number) {
    if (typeof(number) == "number") {
        this.value /= number;
    } else {
        alert("Error!")
    }
}

/*
function subtraction(numOne, numTwo) {
    if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne - numTwo;
    } else {
        return("Error!")
    };
};

function multiplication(numOne, numTwo) {
    if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne * numTwo;
    } else {
        return("Error!")
    };
}; 
*/


console.log(Calculator);

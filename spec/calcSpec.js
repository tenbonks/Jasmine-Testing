//I want to test a calulator
    //I am going to test the addition function
        //I want to get the result of 42
        //I expect the result of 20 + 22 to be 42

describe("Calculator", function() {
    
    beforeEach(function() {
        calc = new Calculator;
    });
    

    describe("Addition tests" , function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22)
            expect(calc.value).toBe(42)
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19)
            expect(calc.value).toBe(26)
        });
        it("should return an 'Error!' if we don't supply two numbers", function() {
            spyOn(window, "alert");                                                  //Spy on is a function,  the first argument is the object you want to spy on, the second is a string with the name of function
            calc.add("Hitchickers");                                         //Not supplying two numbers will result in a error alert box, we implemented this in calc.js
            expect(window.alert).toHaveBeenCalledWith("Error!");                     //We are expecting for a window alert to be called with the string "Error!"
            //For more information on the spyOn function, you'll be able to find it in the documentation, look at the README for a link
        });
    });
    
    describe("Subtraction tests", function() {
        
        it ("should return 11", function () {
            calc.add(15);
            calc.minus(4);
            expect(calc.value).toBe(11)
        });
        it ("should return 51", function() {
            calc.add(100)
            calc.minus(49)
            expect(calc.value).toBe(51);
        });
        it ("should return 'Error!' if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.minus("Chocolate");
            expect(window.alert).toHaveBeenCalledWith("Error!")
        });
    });
    
    describe("Multiplication tests", function() {
        
        it ("should return 25", function() {
            calc.multiply(5);
            calc.multiply(5);
            expect(calc.value).toBe(25)
        });
        it ("should return 1200", function() {
            calc.multiply(120);
            calc.multiply(10);
            expect(calc.value).toBe(1200)
        });

        it ("should return 1000", function() {
            calc.multiply(5);
            calc.multiply(5);
            calc.multiply(4);
            calc.multiply(10);
            expect(calc.value).toBe(1000);
        })

    })

    describe("Division tests", function() {

        it("should return 10", function() {
            calc.add(100);
            calc.divide(10);
            expect(calc.value).toBe(10);
        });
    })
    

});
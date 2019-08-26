describe ("Fizz-Buzz tests", function(){

    describe("Fizz, Buzz or Fizz-Buzz?", function(){

        it ("should return 'FizzBuzz' if number is divisible by 3 & 5", function() {
        expect(fizzBuzz(30)).toBe("Fizz-Buzz")
        });

        it ("should return 'Fizz' if number is divisible by 3", function(){
            expect(fizzBuzz(9)).toBe("Fizz")
        });

        it ("should return 'Buzz' if number is divisible by 5", function() {
            expect(fizzBuzz(35)).toBe("Buzz")
        });

        it ("should return the number if the number is not divisible by 3, 5 or 15", function(){
            expect(fizzBuzz(16)).toBe(16);
        })

        it ("should return 'Error!' if a number is not supplied", function() {
            spyOn(window, "alert");
            fizzBuzz("Apple");
            expect(window.alert).toHaveBeenCalledWith("Error!")
        })
    })

})
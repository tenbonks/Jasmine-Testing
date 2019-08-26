describe("Drink About test", function() {

    describe("Age test", function() {

        it ("should return 'Sorry. I can`t tell you what to drink because that age is incorrect!' if age is less then 0", function() {
            expect(drinkAbout(-2)).toBe("Sorry. I can't tell you what to drink because that age is incorrect")
        });

        it ("should return 'Drink Toddy' if age is less then 14", function(){
            expect(drinkAbout(13)).toBe("Drink Toddy")
        });

        it ("should return 'Drink Coke' if age is less then 18", function(){
            expect(drinkAbout(15)).toBe("Drink Coke")
        });

        it ("should return 'Drink Beer' if age is less then 21", function() {
            expect(drinkAbout(19)).toBe("Drink Beer")
        });

        it ("should return 'Drink Whiskey' if age is less then 130", function() {
            expect(drinkAbout(76)).toBe("Drink Whiskey")
        });

        it ("should alert 'Error!' if a number is not supplied", function() {
            spyOn(window, "alert");
            drinkAbout("Rasta-clat");
            expect(window.alert).toHaveBeenCalledWith("Error!")
        })

    })

})
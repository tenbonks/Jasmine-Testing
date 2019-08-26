function drinkAbout(age) {
    if ((age < 0 || age > 130))  {
        return("Sorry. I can't tell you what to drink because that age is incorrect")
    } else if (age < 14) {
        return("Drink Toddy");
    } else if (age < 18) {
        return("Drink Coke")
    } else if (age < 21) {
        return("Drink Beer")
    } else if (age < 131) {
        return ("Drink Whiskey")
    } else {
        alert ("Error!")
    }
};

console.log(drinkAbout(-1))
console.log(drinkAbout(12))
console.log(drinkAbout(18))
console.log(drinkAbout(20))
console.log(drinkAbout(120))
console.log(drinkAbout(131))

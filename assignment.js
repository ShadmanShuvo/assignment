// https://github.com/ShadmanShuvo/assignment

// kilometerToMeter
function kilometerToMeter(distance){
    var result = 0;
    if(distance < 0){
        return 'Distance cannot be negative';
    }
    else{
        result = distance * 1000;
        return result;
    }
}
var problemSolve1 = kilometerToMeter(5);
console.log(problemSolve1);

// budgetCalculator
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop){
    var watch = 50;
    var phone = 100;
    var laptop = 500;
    var total = 0;
    if(numOfWatch < 0 || numOfPhone < 0 || numOfLaptop < 0){
        return 'Number cannot be negative';
    }
    else{
        watch = watch * numOfWatch;
        phone = phone * numOfPhone;
        laptop = laptop * numOfLaptop;
        total = watch + phone + laptop;
        return total;
    }
}
var problemSolve2 = budgetCalculator(2,2,2);
console.log(problemSolve2);

// hotelCost
function hotelCost(days){
    var cost = 0;
    if(days < 0){
        return 'Day cannot be negative';
    }
    else if(days <= 10){
        cost = days * 100
        return cost;
    }
    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var remainingDays = remaining * 80;
        cost = firstTenDays + remainingDays;
        return cost;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var remainingDays = remaining * 50;
        cost = firstTenDays + secondTenDays + remainingDays;
        return cost;
    }
}
var problemSolve3 = hotelCost(30);
console.log(problemSolve3);

// megaFriend
function megaFriend(friends){
    if(friends == 0){
        return 'It is not a valid value';
    }
    var long = friends[0];
    for (var i=0; i<friends.length; i++) {
        var value = friends[i];
        if( long.length < value.length){
        long = value;
        }
    }
    return long;
}
var  friends = ['abul', 'babul', 'cabul', 'ghabul', 'babu'];
var problemSolve4 = megaFriend(friends);
console.log(problemSolve4);
//Task 1
function myFunction(firstArray) {
    //var hege = ["Cecilie", "Lone"];
    //var stale = ["Emil", "Tobias", "Linus"];
  
    var mergedArray = firstArray.concat(firstArray); 
    //document.getElementById("demo").innerHTML = mergedArray;
    console.log(mergedArray);
    
  }
  console.log(myFunction(["Cecilie", "Lone"]))


  //Task 2



  function objCompare(user1, user2 ){

    if(JSON.stringify(user1) === JSON.stringify(user2)){
        console.log("user1 and user2 are equal");
    } else{
        console.log("user1 and user2 are not equal"); 
    }

  }
  console.log(objCompare({name : "nerd", org: "dev"}, {name : "nerd11", org: "dev5"}))


//Task 3


function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(palindrome("eye"))


//Task 4

function calculateDay(dateString){

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    debugger;
    var dayName = days[d.getDay()];
    console.log(dayName)

}

console.log(calculateDay("March 22,2019"));


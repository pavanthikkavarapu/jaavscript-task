// function addItem(){
//   var ul = document.getElementById("dynamic-list");
//   var candidate = document.getElementById("candidate");
//   var li = document.createElement("li");
//   li.setAttribute('id',candidate.value);
//   li.appendChild(document.createTextNode(candidate.value));
//   ul.appendChild(li);
// }

// // function removeItem(){
// // 	var ul = document.getElementById("dynamic-list");
// //   var candidate = document.getElementById("candidate");
// //   var item = document.getElementById(candidate.value);
// //   ul.removeChild(item);
// // }



// $(document).ready(function(event) {
//     $('dynamic-list').on('mouseenter','option',function(e) {
//         alert('yeah');
//         // this refers to the option so you can do this.value if you need..
//     });
// });

// function to check string is palindrome or not
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
console.log(palindrome("hello"));

//function to get data info from datae value

var
    str = '08-03-2013',
    parts = str.split('-'),
    year = parseInt(parts[2], 10),
    month = parseInt(parts[1], 10) - 1, // NB: month is zero-based!
    day = parseInt(parts[0], 10),
    date = new Date(year, month, day);

alert(date.getDate());
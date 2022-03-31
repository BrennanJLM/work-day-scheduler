//current day displayed in jumbotron
var nMoment = moment().format('dddd MMM do YYYY');
var display = $('#currentDay');
display.text(nMoment);
//console.log(display);
console.log(nMoment)

//save content into the comment here text-area into localStorage
//make button click save to storage instead of text area
document.getElementById("9").addEventListener("click", function ()
    {
        var user = document.getElementById("9").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("9", user) ;
    } , false);

//load content from localStorage

//depending on time of day, blocks should be green for unused time, and red for
//time passed
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

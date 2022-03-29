let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allColors, btn4, btn5, btn6, hidebtnall, showbtn, resetbtn;

allColors = ["red", "green", "blue", "purple", "orange", "black", "maroon", "gold", "magenta","yellow", "pink", "lavender", "cyan", "white","dark green", "baby blue"];

allBorder = ['dotted', 'dashed', 'solid', 'double', 'groove', 'inset', 'outset', 'none', 'ridge'];

firstbox = document.getElementById('first');
secondbox = document.getElementById('second');
thirdbox = document.getElementById('third');


btn1 = document.getElementById('changebtn1');
btn2 = document.getElementById('changebtn2');
btn3 = document.getElementById('changebtn3');
btnall = document.getElementById('changebtnall');

btn4 = document.getElementById('hidebtn1');
btn5 = document.getElementById('hidebtn2');
btn6 = document.getElementById('hidebtn3');
hidebtnall = document.getElementById('hidebtnall');

showbtn = document.getElementById('showbtn');
resetbtn = document.getElementById('resetbtn');

function changeBoxOne(){
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "5px " + allBorder[Math.floor(Math.random() * allBorder.length)]  + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

function changeBoxTwo(){
    secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.border = "5px " + allBorder[Math.floor(Math.random() * allBorder.length)]  + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

function changeBoxThree(){
    thirdbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    thirdbox.style.border = "5px " + allBorder[Math.floor(Math.random() * allBorder.length)]  + " " + allColors[Math.floor(Math.random() * allColors.length)];
}

function changeBoxAll(){
    firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    firstbox.style.border = "5px " + allBorder[Math.floor(Math.random() * allBorder.length)]  + " " + allColors[Math.floor(Math.random() * allColors.length)];

    secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    secondbox.style.border = "5px " + allBorder[Math.floor(Math.random() * allBorder.length)]  + " " + allColors[Math.floor(Math.random() * allColors.length)];

    thirdbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
    thirdbox.style.border = "5px " + allBorder[Math.floor(Math.random() * allBorder.length)]  + " " + allColors[Math.floor(Math.random() * allColors.length)];

}

function hideBoxOne(){
    firstbox.style.display = "none";
}
function hideBoxTwo(){
    secondbox.style.display = "none";
}
function hideBoxThree(){
    thirdbox.style.display = "none";
}
function hideAll(){
    firstbox.style.display = "none";
    secondbox.style.display = "none";
    thirdbox.style.display = "none";
}

function ShowAll(){
    firstbox.style.display = "block";
    secondbox.style.display = "block";
    thirdbox.style.display = "block";
}

function reset(){
    firstbox.style.removeProperty('background-color');
    firstbox.style.removeProperty('border');
    secondbox.style.removeProperty('background-color');
    secondbox.style.removeProperty('border');
    thirdbox.style.removeProperty('background-color');
    thirdbox.style.removeProperty('border'); 
}




btn1.addEventListener("click", changeBoxOne);
btn2.addEventListener("click", changeBoxTwo);
btn3.addEventListener("click", changeBoxThree);
btnall.addEventListener("click", changeBoxAll);

btn4.addEventListener("click", hideBoxOne);
btn5.addEventListener("click", hideBoxTwo);
btn6.addEventListener("click", hideBoxThree);
hidebtnall.addEventListener("click", hideAll);
showbtn.addEventListener("click", ShowAll);
resetbtn.addEventListener("click", reset);




// let firstbox, secondbox, thirdbox, btn1, btn2, btn3, btnall, allColors;

// allColors = ["red", "green", "blue", "yellow", "purple", "orange", "black", "maroon", "silver", "gold", "lavender"]
// allborders = []

// firstbox = document.getElementById('first');
// secondbox = document.getElementById('second');
// thirdbox = document.getElementById('third');

// btn1 = document.getElementById("changebtn1");
// btn2 = document.getElementById("changebtn2");
// btn3 = document.getElementById("changebtn3");
// btnall = document.getElementById("changebtnall");

// function changeBoxOne() {
//     firstbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
//     firstbox.style.border = "5px solid " + allColors[Math.floor(Math.random() * allColors.length)];
// }

// function changeBoxTwo() {
//     secondbox.style.backgroundColor = allColors[Math.floor(Math.random() * allColors.length)];
//     secondbox.style.border = "5px solid " + allColors[Math.floor(Math.random() * allColors.length)];
// }

// btn1.addEventListener("click", changeBoxOne

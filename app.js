let btn1 = document.querySelector(".button1")
let btn2 = document.querySelector(".button2")
let btn3 = document.querySelector(".button3")
let resetBtn = document.querySelector(".reset");

btn1.addEventListener("click", () => {
     
    let r = Math.floor(Math.random() * 3);
    if (r == 0) {
        document.getElementById("m").innerText = "Draw";
        document.getElementById("ma").innerText = "Computer chose Rock too";
    }
    else if (r == 1) {
        document.getElementById("m").innerText = "You lose";
        document.getElementById("ma").innerText = "Computer chose Paper";
        document.getElementById("comp").innerText = parseInt(document.getElementById("comp").innerText) + 1;
        if((parseInt(document.getElementById("ball").style.left) || 0) > 0){
            document.getElementById("ball").style.left = (parseInt(document.getElementById("ball").style.left) || 0) - 5 + "%";
        }
    }
    else {
        document.getElementById("m").innerText = "You Won";
        document.getElementById("ma").innerText = "Computer chose Scissors";
        document.getElementById("you").innerText = parseInt(document.getElementById("you").innerText) + 1;
        document.getElementById("ball").style.left = (parseInt(document.getElementById("ball").style.left) || 0) + 10 + "%";
        if((parseInt(document.getElementById("ball").style.left) || 0) >= 90){
            alert("The animal finally reached homr, Yayyyyy")
            document.getElementById("you").innerText = "0";
            document.getElementById("comp").innerText = "0";
            document.getElementById("m").innerText = "Choose an option";
            document.getElementById("ma").innerText = "";
            document.getElementById("ball").style.left = "0%"
        }
    }
})
btn2.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 3);
    if (r == 0) {
        document.getElementById("m").innerHTML = "You won";
        document.getElementById("ma").innerText = "Computer chose Rock";
        document.getElementById("you").innerText = parseInt(document.getElementById("you").innerText) + 1;
        document.getElementById("ball").style.left = (parseInt(document.getElementById("ball").style.left) || 0) + 10 + "%";
        if((parseInt(document.getElementById("ball").style.left) || 0) >= 90){
            alert("The animal finally reached homr, Yayyyyy")
            document.getElementById("you").innerText = "0";
            document.getElementById("comp").innerText = "0";
            document.getElementById("m").innerText = "Choose an option";
            document.getElementById("ma").innerText = "";
            document.getElementById("ball").style.left = "0%"
        }
    }
    else if (r == 1) {
        document.getElementById("m").innerText = "Draw";
        document.getElementById("ma").innerText = "Computer chose Paper too";
    }
    else {
        document.getElementById("m").innerText = "You lose";
        document.getElementById("ma").innerText = "Computer chose Scissors";
        document.getElementById("comp").innerText = parseInt(document.getElementById("comp").innerText) + 1;
        if((parseInt(document.getElementById("ball").style.left) || 0) > 0){
            document.getElementById("ball").style.left = (parseInt(document.getElementById("ball").style.left) || 0) - 5 + "%";
        }
    }
})
btn3.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 3);
    if (r == 0) {
        document.getElementById("m").innerText = "You lose";
        document.getElementById("ma").innerText = "Computer chose Rock";
        document.getElementById("comp").innerText = parseInt(document.getElementById("comp").innerText) + 1;
        if((parseInt(document.getElementById("ball").style.left) || 0) > 0){
            document.getElementById("ball").style.left = (parseInt(document.getElementById("ball").style.left) || 0) - 5 + "%";
        }
        
    }
    else if (r == 1) {
        document.getElementById("m").innerText = "You Won";
        document.getElementById("ma").innerText = "Computer chose Paper";
        document.getElementById("you").innerText = parseInt(document.getElementById("you").innerText) + 1;
        document.getElementById("ball").style.left = (parseInt(document.getElementById("ball").style.left) || 0) + 10 + "%";
        if((parseInt(document.getElementById("ball").style.left) || 0) >= 90){
            alert("The animal finally reached homr, Yayyyyy")
            document.getElementById("you").innerText = "0";
            document.getElementById("comp").innerText = "0";
            document.getElementById("m").innerText = "Choose an option";
            document.getElementById("ma").innerText = "";
            document.getElementById("ball").style.left = "0%"
        }
    }
    else {
        document.getElementById("m").innerText = "Draw";
        document.getElementById("ma").innerText = "Computer chose Scissors too";
    }
})
resetBtn.addEventListener("click", () => {
    document.getElementById("you").innerText = "0";
    document.getElementById("comp").innerText = "0";
    document.getElementById("m").innerText = "Choose an option";
    document.getElementById("ma").innerText = "";
});
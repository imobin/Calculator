const showBox = document.getElementById("showBox")
// numbers:
const zero = document.getElementById("zero")
zero.onclick = function(){ showBox.value = showBox.value + "0"};

const one = document.getElementById("one")
one.onclick = function(){ showBox.value = showBox.value + "1"};

const two = document.getElementById("two")
two.onclick = function(){ showBox.value = showBox.value + "2"};

const three = document.getElementById("three")
three.onclick = function(){ showBox.value = showBox.value + "3"};

const four = document.getElementById("four")
four.onclick = function(){ showBox.value = showBox.value + "4"};

const five = document.getElementById("five")
five.onclick = function(){ showBox.value = showBox.value + "5"};

const sevensix = document.getElementById("six")
six.onclick = function(){ showBox.value = showBox.value + "6"};

const seven = document.getElementById("seven")
seven.onclick = function(){ showBox.value = showBox.value + "7"};

const eight = document.getElementById("eight")
eight.onclick = function(){ showBox.value = showBox.value + "8"};

const nine = document.getElementById("nine")
nine.onclick = function(){ showBox.value = showBox.value + "9"};


// operators
const C = document.getElementById("C")
C.onclick = function(){showBox.value = ""};

const Rm = document.getElementById("Rm")
Rm.onclick = function(){ showBox.value = showBox.value.slice(0, showBox.value.length - 1)};

const plus = document.getElementById("plus")
plus.onclick = function(){ showBox.value = showBox.value + " + "};

const minus = document.getElementById("minus")
minus.onclick = function(){ showBox.value = showBox.value + " - "};

const equal = document.getElementById("equal")
equal.onclick = function(){ 
    let results = eval(showBox.value)
    showBox.value = showBox.value + ` = ${results}`
};

const devision = document.getElementById("devision")
devision.onclick = function(){ showBox.value = showBox.value + " / "};


const multiplication = document.getElementById("multiplication")
multiplication.onclick = function(){ showBox.value = showBox.value + " * "};

const float = document.getElementById("float")
float.onclick = function(){ showBox.value = showBox.value + "."};

// evenlistener from the input

showBox.addEventListener("keydown", x => {
    if (x.key === "Enter"){
        let results = eval(showBox.value.slice(0, showBox.value.length - 1))
        showBox.value = showBox.value + `${results}`
    }
})


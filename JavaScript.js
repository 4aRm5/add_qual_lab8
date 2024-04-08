function checkFirst() {
    let first = document.getElementById("first__name").value;
    let regex = /^[а-яА-Яa-zA-Z\s]{2,20}$/;

    if (regex.test(first)) {
        document.getElementById("first__Check").style.color = "green";
        document.getElementById("first__Check").innerHTML = "✓";
        return true;
    }
    else {
        document.getElementById("first__Check").style.color = "red";
        document.getElementById("first__Check").innerHTML = "От 2 до 20 символов";
        return false;
    }
}

function checkLast() {
    let last = document.getElementById("last__name").value;
    let regex = /^[а-яА-Яa-zA-Z\s]{2,20}$/;

    if (regex.test(last)) {
        document.getElementById("last__Check").style.color = "green";
        document.getElementById("last__Check").innerHTML = "✓";
        return true;
    }
    else {
        document.getElementById("last__Check").style.color = "red";
        document.getElementById("last__Check").innerHTML = "От 2 до 20 символов";
        return false;
    }
}

function checkMiddle() {
    let middle = document.getElementById("middle__name").value;
    let regex = /^[а-яА-Яa-zA-Z\s]{2,20}$/;

    if (regex.test(middle)) {
        document.getElementById("middle__Check").style.color = "green";
        document.getElementById("middle__Check").innerHTML = "✓";
        return true;
    }
    else {
        document.getElementById("middle__Check").style.color = "red";
        document.getElementById("middle__Check").innerHTML = "От 2 до 20 символов";
        return false;
    }
}


function checkPhone() {
    let phone = document.getElementById("phone__order").value;
    let regex = /^8-\d{3}-\d{3}-\d{2}-\d{2}$/;

    if (regex.test(phone)) {
        document.getElementById("phone__order").style.background = "LimeGreen";
        return true;
    }
    else {
        document.getElementById("phone__order").style.background = "red";
        return false;
    }
}

function checkDate() {
    
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    currentTime = `${year}-${month}-${day}`;

    inputDateTime = document.getElementById("order__date").value;


    if (inputDateTime < currentTime) {
        document.getElementById("order__date").style.background = 'red';
        return false;
    } else {
        document.getElementById("order__date").style.background = 'LimeGreen';
        return true;
    }
}

function allTrue(func1, func2, func3, func4, func5) {
    if (func1() && func2() && func3() && func4() && func5() === true){
        return true;
    }
    else{
        return false;
    }
}

function handleClick() { 
    if (!allTrue(checkDate, checkPhone, checkMiddle, checkFirst, checkLast)) { 
        document.getElementById("order__button").disabled = true;
        setTimeout(function() {document.getElementById("order__button").disabled = false;}, 1000);
        return false;
    } else { 
        return true;
        } 
    }
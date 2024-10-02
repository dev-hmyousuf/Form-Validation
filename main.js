let form = document.getElementById("form");
let nameError = document.querySelector("#nameError"),
    numberError = document.querySelector("#numberError"),
    emailError = document.querySelector("#emailError"),
    messageError = document.querySelector("#messageError"),
    submitError = document.querySelector("#submitError");
let remain = document.getElementById("remain");
let nameInput = document.querySelector("#nameInput"),
    numberInput = document.querySelector("#numberInput"),
    emailInput = document.querySelector("#emailInput"),
    messageInput = document.querySelector("#messageInput");
    
let popup = document.getElementById("popup");
let closeBtn = document.querySelector(".close-btn"); 

function validateName() {
    let name = nameInput.value.trim();
    if (name.length === 0) {
        nameError.innerHTML = "নাম আবশ্যক";
        document.getElementById("nameValid").innerHTML = "";
        return false;
    }
    if (name.length < 2 || name.length > 50) {
        nameError.innerHTML = "নাম ২ থেকে ৫০ অক্ষরের মধ্যে হতে হবে";
        document.getElementById("nameValid").innerHTML = ""; 
        return false;
    }
    if (!name.match(/^[A-Za-z\s]+$/)) {
        nameError.innerHTML = "নামে শুধুমাত্র অক্ষর এবং স্থান থাকতে পারে";
        document.getElementById("nameValid").innerHTML = ""; 
        return false;
    } else {
        nameError.innerHTML = ""; 
        document.getElementById("nameValid").innerHTML = `<i class="fas fa-solid fa-circle-check fa-beat"></i>`;
        return true;
    }
}

function validateNumber() {
    let number = numberInput.value.trim();
    if (number.length === 0) {
        numberError.innerHTML = "ফোন নম্বর আবশ্যক";
        document.getElementById("numberValid").innerHTML = ""; 
        return false;
    }
    if (!number.match(/^[0-9]+$/)) {
        numberError.innerHTML = "ফোন নম্বরে শুধুমাত্র সংখ্যা থাকতে পারে [0-9]";
        document.getElementById("numberValid").innerHTML = ""; 
        return false;
    }
    if (number.length < 1 || number.length > 11) {
        numberError.innerHTML = "ফোন নম্বর ১ থেকে ১১ ডিজিটের মধ্যে হতে হবে";
        document.getElementById("numberValid").innerHTML = "";
        return false;
    }
    if (!number.startsWith("01")) {
        numberError.innerHTML = "ফোন নম্বর '01' দিয়ে শুরু হতে হবে";
        document.getElementById("numberValid").innerHTML = "";
        return false;
    }
    if (number.length !== 11) {
        numberError.innerHTML = "ফোন নম্বর ১১ ডিজিটের হতে হবে";
        document.getElementById("numberValid").innerHTML = ""; 
        return false;
    }
    numberError.innerHTML = "";
    document.getElementById("numberValid").innerHTML = `<i class="fas fa-solid fa-circle-check fa-beat"></i>`; 
    return true;
}

function validateEmail() {
    let email = emailInput.value.trim();
    if (email.length === 0) {
        emailError.innerHTML = "ইমেইল আবশ্যক";
        document.getElementById("emailValid").innerHTML = ""; 
        return false;
    } else if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        emailError.innerHTML = "ইমেইল ফরম্যাট ভুল";
        document.getElementById("emailValid").innerHTML = ""; 
        return false;
    } else {
        emailError.innerHTML = ""; 
        document.getElementById("emailValid").innerHTML = `<i class="fas fa-solid fa-circle-check fa-beat"></i>`; 
        return true;
    }
}

function validateMessage() {
    let max = 100; 
    let message = messageInput.value.trim();
    let remaining = max - message.length;

    if (message.length === 0) {
        messageError.innerHTML = "বার্তা আবশ্যক";
        remain.innerHTML = ""; 
        document.getElementById("messageValid").innerHTML = ""; 
        return false;
    } else if (remaining < 0) {
        messageError.innerHTML = "";
        remain.innerHTML = "";
        document.getElementById("messageValid").innerHTML = ""; 
        return false;
    } else {
        messageError.innerHTML = ""; 
        remain.innerHTML = "অবশিষ্ট অক্ষর: " + remaining;
        document.getElementById("messageValid").innerHTML = `<i class="fas fa-solid fa-circle-check fa-beat"></i>`;
        return true;
    }
}


form.addEventListener("submit", (event) => {
    let SubmittedName = document.getElementById("SubmittedName");
    let SubmittedNumber = document.getElementById("SubmittedNumber");
    let SubmittedEmail = document.getElementById("SubmittedEmail");
    let SubmittedMessage = document.getElementById("SubmittedMessage");
    let submittedCont = document.querySelector(".submitted"); 

    event.preventDefault(); 

    if (validateName() && validateNumber() && validateEmail() && validateMessage()) {
        let formData = new FormData(form);
        let dataObject = {};
        formData.forEach((value, key) => {
            dataObject[key] = value;
        });
        submittedCont.style.display = "block"
        SubmittedName.innerHTML = `Name : ${dataObject.name}`; 
        SubmittedNumber.innerHTML = `Number : ${dataObject.Number}`; 
        SubmittedEmail.innerHTML = `Email : ${dataObject.email}`; 
        SubmittedMessage.innerHTML = `Message : ${dataObject.message}`; 

        submitError.style.display = "block";
        submitError.innerHTML = "ফর্মটি বৈধ এবং জমা দেওয়ার জন্য প্রস্তুত!";
        setTimeout(function(){
            submitError.style.display = "none";
        }, 3000);
        setTimeout(function(){
            submittedCont.style.display = "none" 
        }, 5000)
    } else {
        submitError.style.display = "block";
        submitError.innerHTML = "দয়া করে ত্রুটিগুলি ঠিক করুন।";
        setTimeout(function(){
            submitError.style.display = "none";
        }, 3000);
    }
});

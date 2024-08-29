var slideIndex = 0;
showDivs();

function plusDivs(n) {
    slideIndex += n;
    showDivs();
}

function showDivs() {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (slideIndex >= imgList.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = imgList.length - 1}
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";  
    }
    imgList[slideIndex].style.display = "block";  
}
    // Mengsetting time di image untuk berubah atomatis
setInterval(() => {
    plusDivs(1);
}, 5000);

function validateForm() {
    var name = document.forms["message-form"]["full-name"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;
    // Untuk menginput data nama2nya dan memastikan benar, jika gak maka alert
    if (name == "" || date == "" || gender == "" || messages == "") {
        alert("Please ensure all fields are filled (Name, Date, Gender, and Message)");
        return false;
    }
    // Mendapatkan hasil-hasil data dari user.
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = date;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;

    const dateObj = new Date();
    const time = dateObj.toLocaleTimeString();
    document.getElementById("current-time").innerText = time;

    return false; // 

    
}

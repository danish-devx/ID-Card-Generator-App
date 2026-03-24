let name = document.getElementById("name");
let fatherName = document.getElementById("fatherName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let cnic = document.getElementById("cnic");
let course = document.getElementById("course");
let address = document.getElementById("address");
let image = document.getElementById("image");

let generateBtn = document.getElementById("generateBtn");


let previewImg = document.getElementById("previewImg");
let cName = document.getElementById("cName");
let cFather = document.getElementById("cFather");
let cEmail = document.getElementById("cEmail");
let cPhone = document.getElementById("cPhone");
let cCnic = document.getElementById("cCnic");
let cCourse = document.getElementById("cCourse");
let cAddress = document.getElementById("cAddress");



generateBtn.addEventListener("click", function () {

   

    cName.innerText = name.value;
    cFather.innerText = fatherName.value;
    cEmail.innerText = email.value;
    cPhone.innerText = phone.value;
    cCnic.innerText = cnic.value;
    cCourse.innerText = course.value;
    cAddress.innerText = address.value;

    let file = image.files[0];

    if(file){
        previewImg.src = URL.createObjectURL(file);
    }


    name.value = "";
    fatherName.value = "";
    email.value = "";
    phone.value = "";
    cnic.value = "";
    course.value = "";
    address.value = "";
    image.value = "";
    

});
var age =20;
const dob = "20/11/2000"; // constant
let name = "Mungai";

// alrt('Welcome "+name);
console.log("Age:" + age);
console.log("Date of birth:" + dob);

// Dom - DOCUMENT OBJECT 

const navbarToggler =document.
("navbar-toggler");
const collapse = document.querySelector(".navbar-colapse");

console.log(navbarToggler);

navbarToggler.addEventListner("cick",function(){
    toggle();
})

function toggle() {
collapse.display = "flex";
collapse.flexDirection = "column";
}
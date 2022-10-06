/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// formulari

const nom = document.querySelector("#nameInput");
const correu = document.querySelector("#emailInput");
const telefon = document.querySelector("#phoneInput");
const missatge = document.querySelector("#messageInput");

boto.addEventListener('click', async (e) => {
    e.preventDefault();

    const name = nom.value;
    const email = correu.value;
    const phone = telefon.value;
    const message = missatge.value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
})
//com no li passo un segon argument té un valor false x deffecte
// //showResult(1);
// const showResult = (number, error = false) => {

// 

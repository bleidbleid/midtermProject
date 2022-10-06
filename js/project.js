function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


let projectName;
let projectText;



const getData = async () => {
    for (let i = 2; i < 5; i++) {
        const id = i;
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id); //fetch carrega la info d'un enllaç

        //obtenir el nom i la descripció
        const data = await response.json();
        console.log(data);
        projectName = (data.title).slice(0, 15);
        projectText = (data.body).slice(0, 100);
        getMyProject(projectName, projectText, id);

    }
}
getData();
//col·locar al info al HTML

const getMyProject = async (name, text, id) => {
    // l'async es perque sapiga que s haura d anar esperant
    document.querySelector(`#descriptionCard${id}`).innerHTML = `<h4>${name}</h4><p class="headline">${text}</p>`;
}


//fetch del principal

const getMain = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + 1); //fetch carrega la info d'un enllaç

    //obtenir el nom i la descripció
    const data = await response.json();
    console.log(data);
    projectName = data.title;
    projectText = data.body;
    getMyHTML(projectName, projectText);


}
getMain();
//col·locar al info al HTML

const getMyHTML = async (name, text) => {
    // l'async es perque sapiga que s haura d anar esperant
    document.querySelector(`#projectTitle`).innerHTML = `${name}`;
    document.querySelector(`#projectContent`).innerHTML = `<p class="mainText">${text}</p>`
}
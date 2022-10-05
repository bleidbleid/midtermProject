/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// <div class="topnav" id="myTopnav">
//   <a href="#home" class="active">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   <a href="javascript:void(0);" class="icon" onclick="myFunction()">
//     <i class="fa fa-bars"></i>
//   </a>
// </div>

// <div style="padding-left:16px">
//   <h2>Responsive Topnav Example</h2>
//   <p>Resize the browser window to see how it works.</p>
// </div>



let projectName;
let projectText;



const getData = async () => {
  for (let i = 1; i < 4; i++) {
    const id = i;
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id); //fetch carrega la info d'un enllaç

    //obtenir el nom i la descripció
    const data = await response.json();
    console.log(data);
    projectName = data.title;
    projectText = data.body;
    getMyProject(projectName, projectText, id);
    
  }
}
getData();
//col·locar al info al HTML

const getMyProject = async (name, text, id) => {
  // l'async es perque sapiga que s haura d anar esperant
  document.querySelector(`#descriptionCard${id}`).innerHTML = `<h4>${name}</h4><p class="headline">${text}</p>`;
}

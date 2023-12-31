// Assuming these components are defined in your project
import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  function alertShow() {
    alert();
  }
  function addHabit() {
    alert();
  }
  function addStat() {
    alert('add stat');
  }

  document.querySelector("#root").innerHTML = `
        ${Nav(store.Links, state.name)}
        ${Main(state)}
        ${Footer()}
    `;
  router.updatePageLinks();
  afterRender(state);
}
function alertShow() {
  alert();
}
// function addHabit() {
//   alert();
// }
function afterRender(state) {
  function alertShow() {
    alert();
  }
  function addHabit() {
    var x = document.getElementById("menu_ed");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function addStat() {
    alert('add stat');
  }

  function myFunction() {
    var x = document.getElementById("menu_ed");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function clear() {
    document.getElementById("firstName").value=""
    document.getElementById("lastName").value=""
    document.getElementById("email").value=""
    document.getElementById("phone").value=""
    document.getElementById("message").value=""
  }

  function menuCat() {
    var x = document.getElementById("menu_ed");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function saveHabit () {
//    return msg;
    let x =  document.getElementById("firstName").value
    let y =  document.getElementById("lastName").value

    alert(x+"   "+y);
  }

  function menuRtn() {
    var x = document.getElementById("menu_ed");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //todo: code goes here (javascript)
  //Todo:
  if (state.view === "Home") {
    //todo: logic goes here for today
  }

  // document.getElementById("createUserButton").addEventListener("click", () => alertShow("Create User clicked"));
  // document.getElementById("createGraphButton").addEventListener("click", () => alertShow("Create Graph clicked"));
  // document.getElementById("recordPixelButton").addEventListener("click", () => alertShow("Record Pixel clicked"));
  // document.getElementById("updatePixelButton").addEventListener("click", () => alertShow("Update Pixel clicked"));
  // document.getElementById("deletePixelButton").addEventListener("click", () => alertShow("Delete Pixel clicked"));
  document.getElementById("addHabit").addEventListener("click", addHabit);
  document.getElementById("addCat").addEventListener("click", menuCat);
  document.getElementById("button_close").addEventListener("click", myFunction);
  document.getElementById("addRtn").addEventListener("click", menuRtn);
  document.getElementById("addSavebtn").addEventListener("click", saveHabit);

  document.getElementById("addTest").addEventListener("click", addTest);
  document.getElementById("button_clear").addEventListener("click", clear);





  document.querySelectorAll(".circle-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });

  // document.querySelector(".fa-bars").addEventListener("click", () => {
  //   alert("here");
  //   document.querySelector("nav > ul").classList.toggle("dropdown");
  // });

  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".dropdown-content").classList.toggle("show");
  });

  setupPixelaEventListeners();
}

function setupPixelaEventListeners() {
  const createUserButton = document.getElementById("createUserButton");
  if (createUserButton) {
    createUserButton.addEventListener("click", () => {
      createUser("classicatkins", "token"); // Replace 'username' and 'token' with actual values
    });
  }

  // Here you can add more event listeners for other Pixela API actions if needed
  // For example:
  // const createGraphButton = document.getElementById("createGraphButton");
  // if (createGraphButton) {
  //     createGraphButton.addEventListener("click", () => {
  //         createGraph("username", "token", "graphId", ...); // Replace with actual values and implement createGraph function
  //     });
  // }
}

function createUser(username, token) {
  console.log("Creating user:", username, token);
  // Implement the Axios POST request to create a user
  axios
    .post("https://pixe.la/v1/users", {
      token: token,
      username: username,
      agreeTermsOfService: "yes",
      notMinor: "yes"
    })
    .then(response => {
      console.log("User creation response:", response.data);
    })
    .catch(error => {
      console.error("Error creating user:", error);
    });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    switch (view) {
      case "Home":
        // Add any specific logic for the Home view
        done();
        break;
      // Implement other cases as needed
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();

// Example Axios GET request
axios.get(
  "https://api.openweathermap.org/data/2.5/weather?q=St.%20Louis&APPID=723e0986e0f98b33c0d046e7f38d272c"
);

function alertShow() {
  alert();
}

const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });


   
var xValues = [];
var yValues = [];
generateData("Math.sin(x)", 0, 10, 0.5);

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 2,
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = sin(x)",
      fontSize: 16
    }
  }
});
function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues.push(eval(value));
    xValues.push(x);
  }
}






//  const forms = document.querySelector(".forms");
//        PwShowHide = document.querySelectorAll(".eye-icon");
//        links = document.querySelectorAll(".link");

//        PwShowHide.forEach(eyeIcon => {
//           eyeIcon.addEventListener("click", () =>{
//             let Pwfields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

//             Pwfields.forEach(password => {
//                   if(password.type === "password"){
//                     password.type = "text";
//                     eyeIcon.classList.replace("eye-slash","eye-open");
//                     return;
//                   }
//                   password.type = "password";
//                     eyeIcon.classList.replace("eye-open","eye-slash");
//             })

//           } )
//        });
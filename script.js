document.querySelector("#main-text").addEventListener("keyup",function(){
    const printMirror = document.querySelector("#main-text").value
    document.querySelector("#blueMirror").textContent=printMirror
    document.querySelector("#orangeMirror").textContent=printMirror
})




// Super Powers Practice ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// document.querySelector("#activate-flight").addEventListener("click", function () {
//     const flightWorks = document.querySelector("#flight");
//     flightWorks.classList.toggle("enabled")
// });
// document.querySelector("#activate-mindreading").addEventListener("click", function () {
//     const mindWorks = document.querySelector("#mindreading");
//     mindWorks.classList.toggle("enabled")
// });
// document.querySelector("#activate-xray").addEventListener("click", function () {
//     const xrayWorks = document.querySelector("#xray");
//     xrayWorks.classList.toggle("enabled")
// });

// document.querySelector("#activate-all")
//     .addEventListener("click", function () {
//         const activated = document.querySelectorAll(".disabled");
//         for (i = 0; i < activated.length; i++) {
//             activated[i].classList.add("enabled")
//         }
//         document.querySelector("#deactivate-all")
//             .addEventListener("click", function () {
//                 const deactivated = document.querySelectorAll(".enabled");
//                 for (i = 0; i < deactivated.length; i++) {
//                     deactivated[i].classList.remove("enabled")
//                 }
//             })
//     })

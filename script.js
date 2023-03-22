const darkModeCheckbox = document.getElementById("checkbox")
const dropdownBtn = document.getElementById("dropdown-btn")
const fontName = document.getElementById("font-name")


// Darkmode logic
let darkMode = false
darkModeCheckbox.addEventListener("click", changeMode)

function changeMode() {
    darkMode = !darkMode
    if (darkMode) {
        document.body.style.backgroundColor = "#495057"
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
}


// Dropdown Logic
dropdownBtn.addEventListener("click", () => {
    document.getElementById("myDropdown").classList.toggle("show");
})


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function createArrowDownIcon() {
    let element = document.createElement("i")
        element.classList = "fa-solid fa-angle-down"
        dropdownBtn.append(element)
}

document.body.addEventListener("click",changeFont)
function changeFont(e) {
    if(e.target.id === "serif") {
        document.body.style.fontFamily = "serif"
        dropdownBtn.textContent = "Serif" 
        createArrowDownIcon()
    } else if ( e.target.id === "sans-serif") {
        document.body.style.fontFamily = "sans-serif"
        dropdownBtn.textContent = "Sans Serif" 
        createArrowDownIcon()
    } else if (e.target.id === "monospace") {
        document.body.style.fontFamily = "monospace"
        dropdownBtn.textContent = "Monospace" 
        createArrowDownIcon()
        
    }
   
}

const darkModeCheckbox = document.getElementById("checkbox")
const dropdownBtn = document.getElementById("dropdown-btn")



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

const fontName = document.getElementById("font-name")
document.body.addEventListener("click",changeFont)
function changeFont(e) {
    if(e.target.id === "serif") {
        document.body.style.fontFamily = "serif"
        fontName.textContent = "Serif"
    } else if ( e.target.id === "sans-serif") {
        document.body.style.fontFamily = "sans-serif"
        fontName.textContent = "Sans-Serif"
    } else if (e.target.id === "monospace") {
        document.body.style.fontFamily = "monospace"
        fontName.textContent = "Monospace" 
    }
   
}

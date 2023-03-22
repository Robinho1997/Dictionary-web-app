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

document.body.addEventListener("click", changeFont)
function changeFont(e) {
    if (e.target.id === "serif") {
        document.body.style.fontFamily = "serif"
        dropdownBtn.textContent = "Serif"
        createArrowDownIcon()
    } else if (e.target.id === "sans-serif") {
        document.body.style.fontFamily = "sans-serif"
        dropdownBtn.textContent = "Sans Serif"
        createArrowDownIcon()
    } else if (e.target.id === "monospace") {
        document.body.style.fontFamily = "monospace"
        dropdownBtn.textContent = "Monospace"
        createArrowDownIcon()

    }

}


// API Call

const searchWordBtn = document.getElementById("search-btn")
const searchedWord = document.getElementById("search-input")
const contentDiv = document.getElementById("content")
let noun 
let verb 
let word
let phonetics
let synonym
let source


searchedWord.addEventListener("keyup",triggerButtonOnEnter)
function triggerButtonOnEnter(e) {
    if(e.keyCode === 13) {
        searchWordBtn.click()
    }
}

searchWordBtn.addEventListener("click",fetchWord)


function createHeaderElement() {
    let header = document.createElement("h1")
    contentDiv.append(header)
    header.textContent = word
}

function createPhoneticsElement() {
    let header = document.createElement("h3")
    contentDiv.append(header)
    header.textContent = phonetics
}

function createNounElements() {
    let nounContainer = document.createElement("div")
    nounContainer.setAttribute("id","nounDiv")
    let header = document.createElement("h5") 
    let meaningHeader = document.createElement("h6")
    let nounUl = document.createElement("ul")
    contentDiv.append(nounContainer)
    nounContainer.append(header)
    nounContainer.append(meaningHeader)
    nounContainer.append(nounUl)
    header.textContent = "noun"
    meaningHeader.textContent = "Meaning"

    for(let i = 0; i < noun.length; i++ ) {
        let definition = noun[i].definition
        let definitionElement = document.createElement("li")
        definitionElement.textContent = definition
        nounUl.append(definitionElement)
    }
    let synonymContainer = document.createElement("div")
    let synonymText = document.createElement("span")
    let synonymElement = document.createElement("p")
    synonymContainer.setAttribute("class","synonymDiv")
    synonymContainer.append(synonymText, synonymElement)
    nounContainer.append(synonymContainer)
    synonymText.textContent = "Synonyms"
    synonymElement.textContent = synonym
}

function createVerbElements() {
    let verbContainer = document.createElement("div")
    verbContainer.setAttribute("id","verbDiv")
    let header = document.createElement("h5") 
    let meaningHeader = document.createElement("h6")
    let verbUl = document.createElement("ul")
    contentDiv.append(verbContainer)
    verbContainer.append(header)
    verbContainer.append(meaningHeader)
    verbContainer.append(verbUl)
    header.textContent = "verb"
    meaningHeader.textContent = "Meaning"

    for(let i = 0; i < verb.length; i++ ) {
        let definition = verb[i].definition
        let example = verb[i].example
        let definitionElement = document.createElement("li")
        let exampleElement = document.createElement("p")
        exampleElement.textContent = example
        definitionElement.textContent = definition
        verbUl.append(definitionElement)
        verbUl.append(exampleElement)
    }
}

function createSourceElements() {
    let sourceDiv = document.createElement("div")
    let sourceText = document.createElement("span")
    let sourceLink = document.createElement("a")
    let icon = document.createElement("i")
    sourceDiv.append(sourceText, sourceLink, icon)
    contentDiv.append(sourceDiv)
    sourceText.textContent = "Source:"
    sourceLink.setAttribute("href", source)
    sourceLink.textContent = source
    icon.classList.add("fa-solid","fa-arrow-up-right-from-square")
}

function fetchWord() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord.value}`)
    .then(res => res.json())
    .then(data => {
       console.log(data)
        word = data[0].word
        phonetics = data[0].phonetics[0] ? data[0].phonetics[0].text : ""
        synonym = data[0].meanings[0].synonyms
        noun = data[0].meanings[0].definitions
        verb = data[0].meanings[1] ? data[0].meanings[1].definitions : ""
        source = data[0].sourceUrls
        searchedWord.value = ""
        contentDiv.innerHTML = ""
        createHeaderElement()
        createPhoneticsElement()
        createNounElements()
        createVerbElements()
        createSourceElements()
    } )  
}


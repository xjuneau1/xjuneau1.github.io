
let myLinks = []
let oldLinks = []


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"))

if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage
    render(myLinks)
}


tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks) )
        render(myLinks)
    })
   
})

function render(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        // listItems += '<li><a target="_blank" href="' + myLinks[i] + '">' + myLinks[i] + '</a></li>'
        listItems += `
            <li>
                <a target="_blank" href="${links[i]}">
                    ${links[i]}
                </a>
                
            </li>
        `
    }    
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLinks = []
    render(myLinks)
})

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    render(myLinks)
})

//Working on adding "create your own lablled list of links" functionality
/*
const listBtn = document.getElementById("list-btn")
const listContainer = document.getElementById("list-container")
const titleSubmit = document.getElementById("title-submit")
const listTitleInput = document.getElementById("list-title-input")
const newList = document.getElementById("new-list") 
const newListUl = document.getElementById("new-list-ul")
const newLinksBtn = document.getElementById("new-links-btn")
const newLinks = document.getElementById("new-links")
const newLinkInput = document.getElementById("new-link-input")
let newLinksArr = []

listBtn.addEventListener("click", () => {
    listContainer.classList.add('show')
})

titleSubmit.addEventListener("click", () => {
    listContainer.classList.remove('show')
    newLinks.classList.add('show')
    newList.innerHTML = `
        <h3>${listTitleInput.value}:<h3>
    `
})

newLinksBtn.addEventListener("click", () => {
    newLinksArr.push(newLinkInput.value)
    console.log(newLinksArr)
    newLinkInput.value = ''
    newLinks.classList.remove('show')
    renderNew(newLinksArr)
})

function renderNew(newLinksArr) {
    for (let i = 0; i < newLinksArr.length; i++) {    
        newListUl.innerHTML = `
            <li>
                <a target="_blank" href="${newLinksArr[i]}">
                    ${newLinksArr[i]}
                </a>
            
            </li>
        `
    }  
}

*/
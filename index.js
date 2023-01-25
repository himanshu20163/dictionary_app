const txt = document.getElementById("search_world")
const searchButton = document.getElementById("search_id")
const content = document.getElementById("def")


async function func() {
    const defination = txt.value

    const response  = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${defination}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    const data = await response.json()

    content.innerText = data[0].shortdef[0]
    
    content.style.border = "2px solid red";
}

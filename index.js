const txt = document.getElementById("search_world")
const searchButton = document.getElementById("search_id")
const foods_data = document.getElementById("def")


async function func() {
    const txt = inputValue.value

    const response  = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${txt}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    const data = await response.json()

    foods_data.innerText = data[0].shortdef[0]
    
    foods_data.style.border = "2px solid red";
}
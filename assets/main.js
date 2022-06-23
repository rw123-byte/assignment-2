const plusFive = document.querySelector("#plusFive")
const plusTen = document.querySelector("#plusTen")
const plusFifteen = document.querySelector("#plusFifteen")
const plusTwenty = document.querySelector("#plusTwenty")
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

plusFive.addEventListener('click', () => {
    disp.textContent = "added 5"
    indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})
plusTen.addEventListener('click', () => {
    disp.textContent = "added 10"
    indicator.textContent = (parseInt(indicator.textContent) + 10).toString()
})
plusFifteen.addEventListener('click', () => {
    disp.textContent = "added 15"
    indicator.textContent = (parseInt(indicator.textContent) + 15).toString()
})
plusTwenty.addEventListener('click', () => {
    disp.textContent = "added 20"
    indicator.textContent = (parseInt(indicator.textContent) + 20).toString()
})
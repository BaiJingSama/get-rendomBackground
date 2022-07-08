const colors = ['green', 'yellow', 'skyblue', 'aqua', 'aquamarine', 'azure', 'beige', 'blue', 'brown', 'cadetblue', 'chartreuse', 'coral', 'crimson', 'chocolate', 'cyan', 'green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}
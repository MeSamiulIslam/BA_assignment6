let buttonThree = document.getElementById('three');
let divThree = document.getElementByTagName('div')[0];

buttonThree.addEventListener('click', displayJoke);

async function displayJoke() {
    const response = await fetch('http://icanhazdadjoke.com', {
        headers: {"Accept": "application/json"}
    });

    const jokeObject = await response.json();
    const lowercaseJoke = jokeObject.joke.toLowerCase();

    divThree.innerHTML = lowercaseJoke;
}
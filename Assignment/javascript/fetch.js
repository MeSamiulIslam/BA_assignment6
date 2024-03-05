// Modified code using $.ajax()
let buttonTwo = document.getElementById('two');
let divTwo = document.getElementsByTagName('div')[0];

buttonTwo.addEventListener('click', () => {
    $.ajax({
        url: 'https://icanhazdadjoke.com',
        method: 'GET',
        dataType: 'json',
        headers: {"Accept": "application/json"},
        success: function(response) {
            const joke = response.joke.toUpperCase();
            divTwo.innerText = joke;
        },
        error: function(xhr, status, error) {
            console.error('Error: ', error);
        }
    });
});

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        var joke = data.value;
        console.log(joke);
    })
    .catch()
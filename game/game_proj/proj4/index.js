const cards = document.querySelectorAll(".card");
console.log(cards);

var isFlipped = false;
var firstCard, secondCard;


cards.forEach( (card) => card.addEventListener("click",flip))

var counter = 0;

function flip(){

    // console.log("Card Flipped");

    this.classList.add("flip");
    if(!isFlipped){
        isFlipped = true;
        firstCard = this;

    }
    else{
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        check();

    }
    counter++;
}

function check(){
    // console.log("Checking....");
    if(firstCard.dataset.image === secondCard.dataset.image){success();}
    else{fail();}
}

function success(){
    console.log(counter);
    setTimeout(() => {
        alert("Success!!!")
    },100)
    counter = 0;
    firstCard.removeEventListener('click',flip);
    secondCard.removeEventListener('click',flip);
    reset()

}

function fail() {

    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove("flip");
        counter++;
        reset();
    },1000);

}

function reset() {

    isFlipped = false;
    firstCard = null;
    secondCard = null;

}

(function shuffle(){

    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    })

})();

var button = document.querySelector(".reset");
button.addEventListener("click",() => {
    cards.forEach((card) => card.classList.remove('flip'));
    cards.forEach( (card) => card.addEventListener("click",flip))

})
 //34f1f7ce2a897812104287ffc47eeaf1
 //https://api.themoviedb.org/3/movie/550?api_key=34f1f7ce2a897812104287ffc47eeaf1
 //eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGYxZjdjZTJhODk3ODEyMTA0Mjg3ZmZjNDdlZWFmMSIsInN1YiI6IjVmYzc1ZDM2ZmJhNjI1MDA0MmEzYWUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WaBR8cPaaTqxSOiiksN-wIztB9y5MWXTjG6I0vJHIps

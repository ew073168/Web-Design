const submitButton = document.querySelector(".submitButton");
const title = document.querySelector('.title');
const weather = document.querySelector('.weather');
const loc = document.querySelector('.location');
const vehicle = document.querySelector('.vehicle');
const animals = document.querySelector('.animals');
const question = document.querySelector('.question');
const adjective = document.querySelector('.adjective');
const famousBuilding = document.querySelector('.famousBuilding');
const ingVerb = document.querySelector('.ingVerb');
const item = document.querySelector('.item');
const movieCharacter = document.querySelector('.movieCharacter');
const movieQuote = document.querySelector('.movieQuote');
const movement = document.querySelector('.movement');

let words = [title, weather, loc, vehicle, animals, question, adjective, famousBuilding, ingVerb, item, movieCharacter, movieQuote, movement];

let resetButton;
let topTitle;
let story;

function closeInputs() {
    for (let i = 0; i < words.length; i++) {
        words[i].value = '';
        words[i].disabled = true;
    }
}

function openInputs() {
    for (let i = 0; i < words.length; i++) {
        words[i].disabled = false;
    }
}

function resetVariables() {
    for (let i = 0; i < words.length; i++) {
        if (words[i].value === '') {
            words[i].value = 'N/A';
        }
    }
}

function submitStory() {
    submitButton.disabled = true;

    resetVariables();

    let titleWord = title.value.toUpperCase();
    topTitle = document.createElement('h2');
    topTitle.textContent = titleWord;
    document.body.appendChild(topTitle);
    story = document.createElement('p');
    story.textContent = (`It was a ${ weather.value.toUpperCase() }Y day at ${ loc.value.toUpperCase() }. 
    Suddenly, a large ${ vehicle.value.toUpperCase() } flew down out of the ${ weather.value.toUpperCase() }. 
    When the ${ vehicle.value.toUpperCase() } landed, a bunch of ${ animals.value.toUpperCase() } walked out of it. 
    They all said ${ question.value.toUpperCase() } in a ${ adjective.value.toUpperCase() } voice. 
    All I could do was give them directions to ${ famousBuilding.value.toUpperCase() }. 
    As they left, I followed, ${ ingVerb.value.toUpperCase() } my ${ item.value.toUpperCase() }. 
    When we reached the ${ famousBuilding.value.toUpperCase() }, ${ movieCharacter.value.toUpperCase() } walked out to greet us. 
    He/she said "${ movieQuote.value.toUpperCase() }." 
    This scared all the ${ animals.value.toUpperCase() } away and they ${ movement.value.toUpperCase() }ED back to their ${ vehicle.value.toUpperCase() }. The End.`);
    document.body.appendChild(story);

    resetButton = document.createElement('button');
    resetButton.textContent = "Reset Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);

    closeInputs();
}

function resetGame() {
    openInputs();
    resetButton.parentNode.removeChild(resetButton);
    topTitle.parentNode.removeChild(topTitle);
    story.parentNode.removeChild(story);
    submitButton.disabled = false;
}

submitButton.addEventListener('click', submitStory);

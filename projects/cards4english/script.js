
const qs = (el)=>document.querySelector(el);

numbersJSON.map((item)=>{
    let card = qs('.template .box').cloneNode(true);
    card.querySelector('.front').innerHTML = item.word;
    card.querySelector('.back').innerHTML = item.translation;
    qs('.numbers-area').append( card );
});


pronounsJSON.map((item)=>{
    let card = qs('.template .box').cloneNode(true);
    card.querySelector('.front').innerHTML = item.word;
    card.querySelector('.back').innerHTML = item.translation;
    qs('.pronouns-area').append( card );
});

colorsJSON.map((item)=>{
    let card = qs('.template .box').cloneNode(true);
    card.querySelector('.front').innerHTML = item.word;
    card.querySelector('.back').innerHTML = item.translation;
    qs('.colors-area').append( card );
});

placesJSON.map((item)=>{
    let card = qs('.template .box').cloneNode(true);
    card.querySelector('.front').innerHTML = item.word;
    card.querySelector('.back').innerHTML = item.translation;
    qs('.places-area').append( card );
});

countriesJSON.map((item)=>{
    let card = qs('.template .box').cloneNode(true);
    card.querySelector('.front').innerHTML = item.word;
    card.querySelector('.back').innerHTML = item.translation;
    qs('.countries-area').append( card );
});

verbsJSON.map((item)=>{
    let card = qs('.template .box').cloneNode(true);
    card.querySelector('.front').innerHTML = item.word;
    card.querySelector('.back').innerHTML = item.translation;
    qs('.verbs-area').append( card );
});

questionsJSON.map((item)=>{
    let card = qs('.template .box').cloneNode(true);
    card.querySelector('.front').innerHTML = item.word;
    card.querySelector('.back').innerHTML = item.translation;
    qs('.questions-area').append( card );
});
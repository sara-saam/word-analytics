const textareaEl = document.querySelector('.textarea');
const charactersNumberEL = document.querySelector('.stat__number--characters');
const twitterNumberEL = document.querySelector('.stat__number--Twitter');
const facebookNumberEL = document.querySelector('.stat__number--Facebook');
const wordsNumberEL = document.querySelector('.stat__number--words');

 const inputHandler = ()=>{


    if(textareaEl.value.includes('<script>')){
        alert("you can't use that")
        textareaEl.value =textareaEl.value.replace('<script',' ');
    }
    // determine new numbers//
    let numberOfWords = textareaEl.value.split(' ').length;
    if(textareaEl.value.length === 0){
        numberOfWords = 0 ;
    }
  const numberOfCharacters = textareaEl.value.length;
 const twitterCharactersLeft= 280 - numberOfCharacters;
 const facebookCharactersLeft =2200 - numberOfCharacters;
 if(twitterCharactersLeft < 0){
    twitterNumberEL.classList.add('stat__number--limit')
 }else{
    twitterNumberEL.classList.remove('stat__number--limit')
 }
 if( facebookCharactersLeft < 0){
    facebookNumberEL.classList.add('stat__number--limit')
 }else{
    facebookNumberEL.classList.remove('stat__number--limit')
 }

    // set new numbers//
    wordsNumberEL.textContent = numberOfWords;
    charactersNumberEL.textContent = numberOfCharacters;
    twitterNumberEL.textContent = twitterCharactersLeft;

}





textareaEl.addEventListener('input',  inputHandler);
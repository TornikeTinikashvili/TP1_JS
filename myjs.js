
window.onload = function () {
let words = ["pirveli","meore","mesame","meotxe","mexute","meeqvse",];
let randomWord=[];
let wordTemp;
let answer=[];
let lives=2;
let victory = 0;
i=0;
wordTemp = words[Math.floor((Math.random()*words.length))];
for(let i=0; i < wordTemp.length;i++){
    randomWord.push(wordTemp.charAt(i))
    answer.push("*");
}
alert(wordTemp);
console.log(words);
console.log(randomWord);
console.log(answer);

function hangman(){
    let choice
    alert("find a word made of " + randomWord.length + " letters")
    do {
        choice = prompt(answer);
        if (randomWord.includes(choice)){
            for(let i=0;i<randomWord.length;i++){
                if(randomWord[i]==choice){
                    answer[i]=choice;
                    victory ++;
                }
        }
        } else {
            --lives;
            alert('wrong letter, you have ' + lives + ' guesses left' );   

        }
    } while (lives>0 && victory!=randomWord.length);
    if(lives==0){
        alert("game over")
    } else if (victory=randomWord.length){
        alert("congrats")
    }
}

hangman();
console.log(lives);
}

var userName = 'ryan'
// console.log(typeof userName);

if (userName === '') {
    console.log('Hello!');
} else if (typeof userName !== 'undefined') {
    console.log(`Hello, ${userName}`);
}else
    console.log('Hello!');

var userQuestion = 'Magic Conch, will I ever get married?';
console.log(`${userQuestion}`);

randomNumber = Math.floor(Math.random() * 9)
if (randomNumber <= 1) {
    console.log('It is certain');
} else if (1 < randomNumber && randomNumber <= 2 ){
    console.log('It is decidedly so');
} else if (2 < randomNumber && randomNumber <= 3) {
    console.log( 'Reply hazy try again');
} else if (3 < randomNumber && randomNumber <= 4){
    console.log('Cannot predictnow');
} else if (4 < randomNumber && randomNumber <= 5){
    console.log('Do not count on it');
} else if (5 < randomNumber && randomNumber <= 6){
    console.log ('My sources say no');
} else if (6 < randomNumber && randomNumber <= 7) {
    console.log('Outlook not so good');
} else console.log('Signs point to yes');

console.log(`${randomNumber}`)

'use strict';

var usernameAnswer = prompt('Why hello Human, what are you called?');
// console.log('usernameAnswer : ' + usernameAnswer);

alert('Really?!?! How odd. Well I suppose I will call you ' + usernameAnswer + ' too.');

var ageGuessAnswer = prompt('Is Krystian OLDER than 28 years of age (y/n)?');
// console.log('ageGuessAnswer : ' + ageGuessAnswer);

if (ageGuessAnswer.toLowerCase() === 'y'){
  alert('Ding Dong! You got it right!');
} else {
  alert('Flattery will get you nowhere ' + usernameAnswer + '. WRONG!');
}

var likeAnimalsAnswer = prompt('Does Krystian love animals (y/n)?');
// console.log('likeAnimalsAnswer : ' + likeAnimalsAnswer);

if (likeAnimalsAnswer.toLowerCase() === 'y'){
  alert('You are one smart cookie, as your kind often says. Such an odd phrase.');
} else {
  alert('Poppycock! You do not know Krystian very well at all, do you ' + usernameAnswer + '?');
}

var shortyAnswer = prompt('Is Krystian what you humans think of as "tall" (y/n)?');
// console.log('shortyAnswer : ' + shortyAnswer);


if (shortyAnswer.toLowerCase() === 'y'){
  alert('You sure blew that one.');
} else if(shortyAnswer.toLowerCase() === 'n'){
  alert('She will never admit it, but does she really have to?');
} else {
  alert('I shake my fist at you! That was never an option human.');
}

var foodieAnswer = prompt('Is Krystian a foodie (y/n)?');
// console.log('foodieAnswer : ' + foodieAnswer);

if (foodieAnswer.toLowerCase() === 'y'){
  alert('Maybe you truly do know Krystian.');
} else {
  alert('Do you enjoy making me angry human? Everyone loves food that was a giveaway.');
}

// Question 6
var howManyPetsAnswer = prompt('How many pets does Krystian live with?');
console.log('howManyPetsAnswer : ' +howManyPetsAnswer);
var i=0;
// console.log('i :' +i);
while (i<4, i++){
  if (howManyPetsAnswer > 3){
    alert('You are aiming a bit too high my friend.');
  } else if(howManyPetsAnswer < 3){
    alert('Add some more pets to the mix, you are coming up short my friend.');
  } else if(howManyPetsAnswer === 3){
    alert('Have you met the wildlings or are you just great at guessing? Three was the right choice!');
  } else {
    alert('All it took was a simple guess pal. Try again.');
  }
}

 
// Question 7
var animalTypeArray = ['dog', 'cat', 'horse', 'bird', 'fish'];
animalTypeArray[0] === 'dog';
animalTypeArray[0];

animalTypeArray[1] === 'cat';
animalTypeArray[1];

animalTypeArray[2] === 'horse';
animalTypeArray[2];

animalTypeArray[3] === 'bird';
animalTypeArray[3];

animalTypeArray[4] === 'fish';
animalTypeArray[4];

var likedAnimals = prompt('What type of animals does Krystian like?');

if (likedAnimals === animalTypeArray[0] || likedAnimals === animalTypeArray[1] || likedAnimals === animalTypeArray[2]){
  //  console.log('Correctamundo');
  alert('You are absolutely correct!');
}



var introvertAnswer = prompt('Last question ' + usernameAnswer + '. Anyone who knows Krystian will know this one. Is Krystian an introvert (y/n)?');
// console.log('introvertAnswer : ' + introvertAnswer);

if (introvertAnswer.toLowerCase() === 'y'){
  alert('You have proven yourself ' + usernameAnswer + '. Proceed to learn more.');
} else {
  alert('You might need to get to know Krystian a little better ' + usernameAnswer + '. Luckily for you she guessed you might need some help. Go on to her site and learn a thing or two.');
}
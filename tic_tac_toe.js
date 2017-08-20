document.addEventListener('DOMContentLoaded', function(){

var boxMaker = document.querySelector('div.box');
var box = document.querySelectorAll('div.box');
var aBox = document.querySelector('div.box.a');
var bBox = document.querySelector('div.box.b');
var cBox = document.querySelector('div.box.c');
var dBox = document.querySelector('div.box.d');
var eBox = document.querySelector('div.box.e');
var fBox = document.querySelector('div.box.f');
var gBox = document.querySelector('div.box.g');
var hBox = document.querySelector('div.box.h');
var iBox = document.querySelector('div.box.i');
var count = 0;


for (var i = 0; i < box.length; i++) {

  box[i].addEventListener('click', function(event){
    if (this.innerText === 'O' || this.innerText === 'X') {
      window.alert("you can't select it!")
    }
    else {
      count += 1;
      if (count % 2 === 0) {
        this.innerText = 'O';
        game(this.innerText);
      } else {
        this.innerText = 'X';
        game(this.innerText);
      }

    }

  })
}

//
//
// aBox.addEventListener('click', function(event){
//   if (this.innerText === 'O' || this.innerText === 'X') {
//     window.alert("you can't select it!")
//   }
//   else {
//     if (count % 2 === 0) {
//       this.innerText = 'O';
//       game(this.innerText);
//     } else {
//       this.innerText = 'X';
//       game(this.innerText);
//     }
//     count += 1;
//   }
//
// })
// bBox.addEventListener('click', function(event){
//   if (count % 2 === 0) {
//     this.innerText = 'O';
//     game(this.innerText);
//   } else {
//     this.innerText = 'X';
//     game(this.innerText);
//   }
//   count += 1;
// })
// cBox.addEventListener('click', function(event){
//   if (count % 2 === 0) {
//     this.innerText = 'O';
//     game(this.innerText);
//   } else {
//     this.innerText = 'X';
//     game(this.innerText);
//   }
//   count += 1;
// })
// dBox.addEventListener('click', function(event){
//   if (count % 2 === 0) {
//     this.innerText = 'O';
//     game(this.innerText);
//   } else {
//     this.innerText = 'X';
//     game(this.innerText);
//   }
//   count += 1;
// })
// eBox.addEventListener('click', function(event){
//   if (count % 2 === 0) {
//     this.innerText = 'O';
//     game(this.innerText);
//   } else {
//     this.innerText = 'X';
//     game(this.innerText);
//   }
//   count += 1;
// })
// fBox.addEventListener('click', function(event){
//   if (count % 2 === 0) {
//     this.innerText = 'O';
//     game(this.innerText);
//   } else {
//     this.innerText = 'X';
//     game(this.innerText);
//   }
//   count += 1;
// })
// gBox.addEventListener('click', function(event){
//   if (count % 2 === 0) {
//     this.innerText = 'O';
//     game(this.innerText);
//   } else {
//     this.innerText = 'X';
//     game(this.innerText);
//   }
//   count += 1;
// })
// hBox.addEventListener('click', function(event){
//   if (count % 2 === 0) {
//     this.innerText = 'O';
//     game(this.innerText);
//   } else {
//     this.innerText = 'X';
//     game(this.innerText);
//   }
//   count += 1;
// })
// iBox.addEventListener('click', function(event){
//   if (count % 2 === 0) {
//     this.innerText = 'O';
//     game(this.innerText);
//   } else {
//     this.innerText = 'X';
//     game(this.innerText);
//   }
//   count += 1;
// })

function game(status){
  if (aBox.innerText === status && eBox.innerText === status && iBox.innerText === status) {
    window.alert('You win!');
  }
  else if (aBox.innerText === status && bBox.innerText === status && cBox.innerText === status) {
    window.alert('You win!');
  }
  else if (aBox.innerText === status && dBox.innerText === status && gBox.innerText === status) {
    window.alert('You win!');
  }
  else if (gBox.innerText === status && hBox.innerText === status && iBox.innerText === status) {
    window.alert('You win!');
  }
  else if (cBox.innerText === status && fBox.innerText === status && iBox.innerText === status) {
    window.alert('You win!');
  }
  else if (gBox.innerText === status && eBox.innerText === status && cBox.innerText === status) {
    window.alert('You win!');
  }
  else if (bBox.innerText === status && eBox.innerText === status && hBox.innerText === status) {
    window.alert('You win!');
  }
  else if (dBox.innerText === status && eBox.innerText === status && fBox.innerText === status) {
    window.alert('You win!');
  }
  else {
    draw();
  }
}


function draw(){
  if (count >= 9) {
    window.alert('Draw');
  }
}

});




// switch (status) {
//   case aBox.innerText && eBox.innerText && iBox.innerText:
//     window.alert('You win!');
//     break;
//   case aBox.innerText && bBox.innerText && cBox.innerText:
//     window.alert('You win!');
//     break;
//   case aBox.innerText && dBox.innerText && gBox.innerText:
//     window.alert('You win!');
//     break;
//   case gBox.innerText && hBox.innerText && iBox.innerText:
//     window.alert('You win!');
//     break;
//   case cBox.innerText && fBox.innerText && iBox.innerText:
//     window.alert('You win!');
//     break;
//   case gBox.innerText && eBox.innerText && cBox.innerText:
//     window.alert('You win!');
//     break;
  // case bBox.innerText && eBox.innerText && hBox.innerText:
  //   window.alert('You win!');
  //   break;
  // case dBox.innerText && eBox.innerText && fBox.innerText:
  //   window.alert('You win!');
  //   break;
//   default:
// }

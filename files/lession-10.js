/*let buttonElement = document.querySelector('.js-button');


  function isToggled(buttonElement) {
    // let buttonElement = document.querySelector('.js-button');
    
    // if (!buttonElement.classList.contains('toggled')) {
    //   buttonElement.classList.add('toggled')

    // } else {
    //   buttonElement.classList.remove('toggled')
    // }

    buttonElement.classList.toggle('toggled');
  }; */

function isToggled(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('toggled')) {

    isprevioustoggled()

    button.classList.add('toggled')
 
  } else {
    button.classList.add('toggled')
  }
}

function isprevioustoggled() {
  const previousToggled = document.querySelector('.toggled')

  if (previousToggled) {
    previousToggled.classList.remove('toggled')
  }
}
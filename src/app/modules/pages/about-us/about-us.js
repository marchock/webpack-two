require("./about-us.html");

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = 'About us....';

  return element;
}

document.body.appendChild(component());

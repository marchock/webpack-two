require("./index.html");

var component = () => {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = 'HELLO WORLD.........';

  return element;
}

document.body.appendChild(component());

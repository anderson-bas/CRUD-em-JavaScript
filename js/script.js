window.addEventListener('load', start);

var globalNames = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();
}

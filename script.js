// if add button is pressed, create child node in div "sub"

let userSubmission = document.getElementById('userSubmissions');

//where the input value is recieved and given
let userTitleInput = prompt("test");

let titleNode = document.createElement('h2');
// ** let imgNode = '';
// ** let descNode = '';
let parentNode = document.createElement('div');
parentNode.className = 'custom-class';

// adds input to the new node
parentNode.innerHTML = userTitleInput;





document.getElementById('input-submit-btn').addEventListener('click',function(e) {
  parentNode.appendChild(titleNode);
  document.getElementById('userSubmissions').appendChild(parentNode);
});


// if add comment btn is pressed, add comment node vv
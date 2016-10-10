var textLength = 0;
var text = 'cd users/Leonardo/site/';

$(document).ready(function() {
  setTimeout('type()', 1500);
});

function type() {
  $('#log').html(text.substr(0, textLength++));
  if (textLength < text.length + 1) {
    setTimeout(function() {type();}, 50);
  } else {
    textLength = 0;
    text = '';
  }
}

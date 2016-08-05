var Username = require('./../js/test.js').usernameModule;
var displayUsername = function(username, usernameData) {
  $('.showRepos').text("The username you have chosen to view is " + usernameData + ". These are their repos:");
}

$(document).ready(function(){
  var currentUsernameObject = new Username();
  $('#seeRepos').click(function(){
    var username = $('#username').val();
    $('#username').val("");
    currentUsernameObject.getUsername(username, displayUsername);

  //   $.get('https://api.github.com/users/' + username +'/repos?access_token=' + apiKey, function(response){
  //   $('#userRepos').append('<li>' +
  //
  // });
  });
});

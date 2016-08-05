var Username = require('./../js/test.js').usernameModule;
var displayUsername = function(username, usernameData) {
  $('.showRepos').text("The username you have chosen to view is " + usernameData + ". These are their repos:");
}

var apiKey = require('./../.env').apiKey;



$(document).ready(function(){
  var currentUsernameObject = new Username();
  $('#seeRepos').click(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
    currentUsernameObject.getUsername(username, displayUsername);
    $("ul#userRepos").append("<li>" + username + "</li>");







    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey, function(response) {
      response.forEach(function(response)
      { console.log(response.name)
        $("ul#userRepos").append("<li>" + response.name + "</li>");
      });
    });
  });
});

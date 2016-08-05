var Username = require('./../js/test.js').usernameModule;
var displayUsername = function(username, usernameData) {
  $('.showRepos').text("The username you have chosen to view is " + usernameData + ". These are their repos:");
}
var displayRepos = function(username, repoName, repoDescription) {
  $("ul#userRepos").append("<li>" + repoName + "</li>" + "<ul><li>" + repoDescription + "</li></ul>");
}

var apiKey = require('./../.env').apiKey;



$(document).ready(function(){
  var currentUsernameObject = new Username();
  $('#seeRepos').click(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
    currentUsernameObject.getRepos(username, displayRepos);




    // currentUsernameObject.getUsername(username, displayUsername);
    // $('#username').val("");
    // $("ul#userRepos").append("<li>" + username + "</li>");


  });
});

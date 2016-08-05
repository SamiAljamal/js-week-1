var Username = require('./../js/test.js').usernameModule;
var displayRepos = function(username, repoName, repoDescription) {
  $("ul#userRepos").append("<li>" + repoName + "</li>" + "<ul><li>" + repoDescription + "</li></ul>");
};
var displayUsername = function(username, userAvatar, userRealName, usernameData) {
  $('.showRepos').append("<img src= " + userAvatar + " alt='avatar for user' /><h1>Name: " + userRealName + "</h1><h3>Username: " + usernameData + "</h3>");
};


$(document).ready(function(){
  var currentUsernameObject = new Username();
  var username

  $('#seeRepos').click(function(event){
    event.preventDefault();
    username = $('#username').val();
    currentUsernameObject.getRepos(username, displayRepos);
  });

  $('#seeUsername').click(function(event){
    event.preventDefault();
    username = $('#username').val();
    currentUsernameObject.getUsername(username, displayUsername);
  });

});

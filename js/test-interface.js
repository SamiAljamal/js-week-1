var Username = require('./../js/test.js').usernameModule;
var displayUsername = function(username, usernameData) {
  $('.showRepos').text("The username you have chosen to view is " + usernameData + ". These are their repos:");
}
var displayRepos = function(username, repoData) {
  $("ul#userRepos").append("<li>" + repoData + "</li>");
}

var apiKey = require('./../.env').apiKey;



$(document).ready(function(){
  var currentUsernameObject = new Username();
  $('#seeRepos').click(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
    currentUsernameObject.getRepos(username, displayRepos);


    // $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey, function(response) {
    //   response.forEach(function(response)
    //   { console.log(response.name)
    //     debugger;
    //     $("ul#userRepos").append("<li>" + response.name + "</li>");
    //   });
    // });



    // currentUsernameObject.getUsername(username, displayUsername);
    // $('#username').val("");
    // $("ul#userRepos").append("<li>" + username + "</li>");


  });
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#seeRepos').click(function(){
    var username = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey, function(response) {
    $('.showRepos').text("The username you have chosen to view is " + username + ". These are their repos:");

    });

  //   $.get('https://api.github.com/users/' + username +'/repos?access_token=' + apiKey, function(response){
  //   $('#userRepos').append('<li>' +
  //
  // });
  });
});

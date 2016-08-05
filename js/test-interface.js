var apiKey = "e0b58cf7e629a5468c185915b1ef33bda1223c12";

$(document).ready(function(){
  $('#seeRepos').click(function(){
    var username = $('#username').val();
    $('#username').val("");
    $('.showRepos').text("The username you have chosen is " + username + ".");
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey, function(response) {
      console.log(response);
    });
  });
});

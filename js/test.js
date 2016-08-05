var apiKey = require('./../.env').apiKey;

function Username(){

}

Username.prototype.getUsername = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey, function(response) {
    displayFunction(username, response.login);
  }).fail(function(error){
    $('.showRepos').test(error.responsJSON.message);
  });
}

exports.usernameModule = Username;

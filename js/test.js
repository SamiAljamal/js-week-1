var apiKey = require('./../.env').apiKey;

function Username(){
}

Username.prototype.getRepos = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey, function(response) {
    response.forEach(function(response)
    {
      // debugger;
      displayFunction(username, response.name, response.description);
    });
  }).fail(function(error){
    $('.showRepos').text(error.responseJSON.message);
  });
};

Username.prototype.getUsername = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey, function(response) {
    // debugger;
    displayFunction(username, response.avatar_url, response.name, response.login);
  }).fail(function(error){
    $('.showRepos').text(error.responseJSON.message);
  });
};

exports.usernameModule = Username;

var apiKey = require('./../.env').apiKey;

function Username(){
}

Username.prototype.getRepos = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey, function(response) {
    response.forEach(function(response)
    {
      console.log(response.description)
      displayFunction(username, response.name, response.description);
    })
  }).fail(function(error){
    $('.showRepos').text(error.responseJSON.message);
  });
}

// Username.prototype.getUsername = function(username, displayFunction) {
//   $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey, function(response) {
//     displayFunction(username, response.login);
//   }).fail(function(error){
//     $('.showRepos').text(error.responseJSON.message);
//   });
// }



// Username.prototype.getRepos = function(username, displayFunction) {
//   $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey, function(response){
//     console.log(response);
//   });
// }

exports.usernameModule = Username;

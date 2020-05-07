// constructor api with one function getUser; getUser passes one parameter username  
const api = {
  getUser(username) {
    // parameter passed to retrieve repos of github user
    const queryUrl = `https://api.github.com/users/${username}`;
    return queryUrl;
    //console.log(queryUrl);
  }  
};

module.exports = api;

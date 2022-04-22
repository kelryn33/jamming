
let accessToken;

const Spotify = {

    getAccessToken() {
       if(accessToken) {
           return accessToken;
       } 

       //check for an access token match
       const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
       const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

       if (accessTokenMatch && expiresInMatch) {
           accessToken = accessTokenMatch[1];
           const expiresIn = Number(expiresInMatch[1]);
           //This clears the parameters, letting us grab new access token when expires
           window.setTimeout(() => accessToken = '', expiresIn * 1000);
           window.history.pushState('Access Token', null, '/');    
       }
    }
};

export default Spotify;
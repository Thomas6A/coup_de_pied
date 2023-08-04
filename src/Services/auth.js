import axios from 'axios';

let token;

async function createAccessToken() {
  try {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', {
      client_id: 'flbl38690o0y7lceainx1xq4mm325w',
      client_secret: 'wkli2rwm2s3kwnat0acqntfyg6v74b',
      grant_type: 'client_credentials'
    });
    return response.data.access_token;
  } catch (e) {
    console.log(e);
  }
}

async function setAxiosToken() {
  token = await createAccessToken();
  axios.defaults.headers['Client-Id'] = "flbl38690o0y7lceainx1xq4mm325w";
  console.log(token);
  axios.defaults.headers['Authorization'] = "Bearer " + token;
  // axios.defaults.headers['Content-Type'] = "application/x-www-form-urlencoded";
}

export default {
  setAxiosToken,
  createAccessToken
};
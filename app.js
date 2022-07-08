// Get the hash of the url
const hash = window.location.hash.substring(1).split('&').reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});

window.location.hash = '';

const options = {
  _token: hash.access_token,
  authEndpoint: 'https://accounts.spotify.com/authorize',
  clientId: 'a2fcb13fd4464b61942c5ee36cbcff18',
  redirectUri: 'https://seanthebean.xyz',
  scopes: ['user-top-read']
}

// If there is no token, redirect to Spotify authorization
if (!options._token) {
  window.location = `${options.authEndpoint}?client_id=${options.clientId}&redirect_uri=${options.redirectUri}&scope=${options.scopes.join('%20')}&response_type=token&show_dialog=true`;
}
//Runs if we have a token
else {
  const promiseOptions = { headers: { Authorization: `Bearer ${options._token}` } };
  Promise.all([
    fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term`,   promiseOptions).then(response => response.json()),
    fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=medium_term`,  promiseOptions).then(response => response.json()),
    fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term`,    promiseOptions).then(response => response.json()),
    fetch(`https://api.spotify.com/v1/me/top/artists?time_range=short_term`,  promiseOptions).then(response => response.json()),
    fetch(`https://api.spotify.com/v1/me/top/artists?time_range=medium_term`, promiseOptions).then(response => response.json()),
    fetch(`https://api.spotify.com/v1/me/top/artists?time_range=long_term`,   promiseOptions).then(response => response.json()),
    fetch("https://api.spotify.com/v1/me",                                    promiseOptions).then(response => response.json())
  ])
  .then(data => {
    options.data = data
    console.log(data[2].items.map(item => item.name))

    const uniqueNums = (min, max, amount) => {
      const nums = new Set();
      while(nums.size !== amount) { nums.add(~~(Math.random() * (max-min)+min));}
      return nums;
    }

    var generateQuiz = {
      topSong: [0, ...uniqueNums(1, data[2].items.length, 3)].map(i => data[2].items[i]),
      topArtist: [],
      topGenre: []
    }
  
    document.body.innerText = "What is your msost listened to song song?\n\n" + (generateQuiz.topSong.map((item, i) => ["(Correct Answer) A", "B", "C", "D"][i] + ". " + item.name).join("\n"))
    
  });
}

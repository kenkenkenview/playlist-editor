const root = document.getElementById('root');

async function fetchPlaylist(){
  endpoint = 'https://www.googleapis.com/youtube/v3/playlistItems';
  apiKey = '';
  playlistId = 'PLpAwyaULw2niDFd_j9X4E18ADz_hoJLOV';
  part = 'snippet';
  maxResults = '50';
  pageToken = '';

  pageToken
  ? req = `${endpoint}?key=${apiKey}&part=${part}&playlistId=${playlistId}&maxResults={$maxResults}&pageToken=${pageToken}`
  : req = `${endpoint}?key=${apiKey}&part=${part}&playlistId=${playlistId}&maxResults=${maxResults}`

  res = await fetch(req);
  json = await res.json();
  for (let i= 0; i< maxResults; i++) {
    music = await json.items[i].snippet.title;
    await console.log(music);
    document.getElementById('root').innerHTML += await `<p>${music}</p>`;
  }
}

fetchPlaylist();
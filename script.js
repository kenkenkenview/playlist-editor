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
  await console.log(json.items[1].snippet.title);

}

fetchPlaylist();
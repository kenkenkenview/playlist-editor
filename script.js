const root = document.getElementById('root');

endpoint = 'https://www.googleapis.com/youtube/v3/playlistItems';
apiKey = '';
playlistId = '';
part = 'snippet';
maxResults = '50';
nextPageToken = '';
count = 0;

async function fetchPlaylist(pageToken, listId){
  pageToken
  ? req = `${endpoint}?key=${apiKey}&part=${part}&playlistId=${listId}&maxResults=${maxResults}&pageToken=${pageToken}`
  : req = `${endpoint}?key=${apiKey}&part=${part}&playlistId=${listId}&maxResults=${maxResults}`

  res = await fetch(req);
  json = await res.json();
  pageToken = await json.nextPageToken;
  // await console.log(json);
  for (let i= 0; i< maxResults; i++) {
    count++;
    music = await json.items[i].snippet.title;
    channel = await json.items[i].snippet.videoOwnerChannelTitle;
    videoId = json.items[i].snippet.resourceId.videoId;
    URL = await "https://music.youtube.com/watch?v="+ID;
    // await console.log(music);
    root.innerHTML += await `
      <tr>
        <th>${count}</th>
        <td>${music}</td>
        <td>${channel}</td>
        <td><a href=${URL}>${URL}</a></td>
        <td><button id="delete${count}" class="deleteBtn" onclick=deleteItem(this)>delete</button></td>
      </tr>`;
  }
  return await pageToken;
}

document.getElementById('loadBtn').onclick = async () => {
  url = document.getElementById('playlistUrl');
  playlistId = url?.searchParams?.get('list') ?? "PLpAwyaULw2niDFd_j9X4E18ADz_hoJLOV";
  root.innerHTML = ''
  // await console.log(nextPageToken);
  nextPageToken = await fetchPlaylist(nextPageToken, playlistId);
  // await console.log(res);
}

function deleteItem(e) {
  console.log(e.closest('tr'));
}
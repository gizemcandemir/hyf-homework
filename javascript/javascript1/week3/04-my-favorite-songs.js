const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks'
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters'
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee'
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls'
},
];

const myPlaylist = [];

const favorites = [{
  songId: 5,
  title: 'Gunes Yerinde',
  artist: 'Buyuk Ev Ablukada'
},
{
  songId: 6,
  title: 'Ya Sonra',
  artist: 'Ajda Pekkan'
},
{
  songId: 7,
  title: 'Hal Hal',
  artist: 'Baris Manco'
}
]

// we can see the current database:
// console.log(songDatabase);

// and see new song to be added:
// console.log(favorites);

function addSongToDatabase(song) {
  if (songDatabase.push(song)) {
    return song;
  }
}

function addSongsToDatabase(songs) {
  addedSongs = [];
  for (let i=0; i<songs.length; i++) {
    addedSongs.push(addSongToDatabase(songs[i]));
    // console.log(`'${addedSongs[addedSongs.length-1].title}' added to the database.`);
  }
  // console.log(`\nTotal of ${addedSongs.length} songs added to the database.\n`);  
  return addedSongs;
}

addSongsToDatabase(favorites)
// console.log(songDatabase);

function getSongByTitle(title) {
  let song = undefined;
  const regex = new RegExp(title, 'i');

  for (let i=0; i<songDatabase.length; i++) {
    if (songDatabase[i].title.match(regex)) {
      song = songDatabase[i];
      console.log(`Found '${title}' in ${song.title} by ${song.artist}`);
      return song;
    } 
  } 

  if (!song) {
    console.log(`'${title}' could not be found.`);
    return song;
  }
}

// getSongByTitle('Hal Hal');
// getSongByTitle('hal');
// getSongByTitle('Ya Sonra');

function addSongToMyPlaylist(title) {
  song = getSongByTitle(title);
  
  if (song) { 
    myPlaylist.push(song);
  }
  
  return myPlaylist;
}

addSongToMyPlaylist('Hal Hal');
addSongToMyPlaylist('Best Song Ever');
addSongToMyPlaylist('ya sonra');

console.log(myPlaylist);

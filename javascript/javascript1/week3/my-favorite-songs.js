const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];

const myPlaylist = [];

const favorites = [{
  songId: 5,
  title: 'Gunes Yerinde',
  artist: 'Buyuk Ev Ablukada',
},
{
  songId: 6,
  title: 'Ya Sonra',
  artist: 'Ajda Pekkan',
},
{
  songId: 7,
  title: 'Hal Hal',
  artist: 'Baris Manco',
},
{
  songId: 8,
  title: 'Hal Hal',
  artist: 'Sezen Aksu',
},
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
    console.log(`'${addedSongs[addedSongs.length-1].title}' added to the database.`);
  }
  console.log(`\nTotal of ${addedSongs.length} songs added to the database.\n`);  
  return addedSongs;
}

addSongsToDatabase(favorites)

// console.log(songDatabase);
// [
//   { songId: 1, title: 'My baby', artist: 'Soggy socks' },
//   { songId: 2, title: '3 nails in wood', artist: 'The carpenters' },
//   { songId: 3, title: 'Blacker than black', artist: 'Instant coffee' },
//   {
//     songId: 4,
//     title: 'When is enough too little?',
//     artist: 'The spies girls'
//   },
//   { songId: 5, title: 'Gunes Yerinde', artist: 'Buyuk Ev Ablukada' },
//   { songId: 6, title: 'Ya Sonra', artist: 'Ajda Pekkan' },
//   { songId: 7, title: 'Hal Hal', artist: 'Baris Manco' }
// ]


function getSongByTitle(title) {
  foundTitle = false;
  const regex = new RegExp(title, 'i');

  for (let i=0; i<songDatabase.length; i++) {
    if (songDatabase[i].title.match(regex)) {
      foundTitle = true;
      console.log(`Found '${title}' in ${songDatabase[i].title}`);
    } 
  } 

  if (!foundTitle) {
    console.log(`Found '${title}' could not be found.`);
  }
  
  return;
}

getSongByTitle('Hal Hal');
getSongByTitle('hal');
getSongByTitle('Ya Sonra');
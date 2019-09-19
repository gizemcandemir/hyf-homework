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

const song = [{
  songId: songDatabase.length+1,
  title: 'Gunes Yerinde',
  artist: 'Buyuk Ev Ablukada',
},
{
  songId: songDatabase.length+2,
  title: 'Ya Sonra',
  artist: 'Ajda Pekkan',
},
{
  songId: songDatabase.length+3,
  title: 'Hal Hal',
  artist: 'Baris Manco',
},
]

// console.log(song);

function addSongToDatabase(newSong) {
  for (let i=0; i<newSong.length; i++) {
    songDatabase.push(newSong[i]);
  }
}

addSongToDatabase(song); 

// I think this function doesn't need to return anything, since it's doing its job by pushing the new object's keys&values but just to see the updated database i use console.log to see the current database.

console.log(songDatabase);

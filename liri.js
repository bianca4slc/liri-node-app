require("dotenv").config();

var axios = require("axios");

var Spotify = require("node-spotify-api");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

var value = process.argv[3];

function concertThis(artist) {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp"
    )
    .then(function (res) {
      var venueName = res.data[0].venue.name;
      var venueLocation = res.data[0].venue.city;
      var eventDate = res.data[0].datetime;
      console.log(venueName);
      console.log(venueLocation);
      console.log(eventDate);
    });
}

function spotifySong(input) {
  //   console.log("value passed" + input);
  spotify.search({ type: "track", query: input }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    var spotifyInfo = data.tracks.items[0];
    var songArtist = spotifyInfo.artists[0].name;
    var songName = spotifyInfo.name;
    var previewLink = spotifyInfo.preview_url;
    var albumName = spotifyInfo.album.name;
    console.log(songArtist);
    console.log(songName);
    console.log(previewLink);
    console.log(albumName);

    // console.log(data.tracks.items[0]);
  });
}

function movieThis(input) {}

if (command === "spotify-this-song") {
  spotifySong(value);
} else if (command === "concert-this") {
  concertThis(value);
} else if (command === "movie-this") {
  movieThis(value);
} else {
  doWhatItSays(value);
}

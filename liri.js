require("dotenv").config();

var axios = require("axios");

var Spotify = require("node-spotify-api");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

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
// concertThis("The Weekend");

function spotifySong(song) {
  spotify.search({ type: "track", query: song }, function (err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    for (i = 0; i < data.tracks.items.length; i++) {
      //   console.log(data.tracks.items[i].artists);
      var spotifyInfo = data.tracks.items[i];
      var songArtist = spotifyInfo.artist(s)[0];
      var songName = spotifyInfo.console.log(songArtist);
    }
    // console.log(data);
  });
}
spotifySong("old town road");

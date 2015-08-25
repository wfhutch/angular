
app.controller("SongsCtrl", function($scope) {
  $scope.title = "My Favorite Songs";

  $scope.newSong = {
    name: "",
    artist: "",
    album: ""
  };

  $scope.songs = [
    { "name": "Comfortably Numb",
      "artist": "Pink Floyd", 
      "album": "The Wall" 
    },
    { "name": "Mother",
      "artist": "Pink Floyd",
      "album": "The Wall"
    },
    { "name": "Hey You",
      "artist": "Pink Floyd", 
      "album": "The Wall" 
    }
  ];

  $scope.killSong = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  $scope.addSong = function() {
  $scope.songs.push({name: $scope.newSong.name, artist: $scope.newSong.artist, album: $scope.newSong.album});
  $scope.newSong = "";
  };
});



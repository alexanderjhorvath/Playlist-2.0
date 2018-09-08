class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  overallRating() {
    const sum = this.tracks.reduce((acc, track) => (acc + track.rating), 0);
    const average = sum / this.tracks.length;
    return average;
  }

  totalDuration() {
    const sum = this.tracks.reduce((acc, track) => (acc + track.length), 0);
    return sum;
  }
}

class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}

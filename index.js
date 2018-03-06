function theBeatlesPlay(musicians, instruments) {
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var n = [];
  for (i = 0; i < musicians.length; i++) {
    for (j = 0; j < instruments.length; j++) {
     n = musicians[i] + " plays " + instruments[j];
    }
  }
    return n;
}

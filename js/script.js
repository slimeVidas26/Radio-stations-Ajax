$(function () {
  var liste = $('#stations-list > .list-group');

  getAllStations = function () {
    $.ajax({
      url: 'http://localhost/ajax/dribble/js/stations.js',
      method: "get"
      //dataType : "json"
    }).done(function () {
      var ourData = stations;

      renderHTML(stations);
    });
  }

  getAllStations();

  renderHTML = function (data) {
    var htmlString = '';
    for (var i in data) {
      var myAudio = `document.getElementById('audio-${i}')`;

      htmlString += `<li class="list-group-item  pull-left">`
      htmlString += `<audio id="audio-${i}">`
      htmlString += `<source src="${data[i][1]}" />`
      htmlString += `</audio>`
      htmlString += ` <a class="flip3D"  href="#" onClick="${myAudio}.paused ?${myAudio}.play() :${myAudio}.pause(); return false;">`
      htmlString += `<img class="image back" src="/ajax/dribble/images/${data[i][2]}" />`;
      htmlString += `<img class="image front" src="/ajax/dribble/images/${data[i][2]}" />`;

      htmlString += `</a>`;
      htmlString += `</li>`;

    }
    liste.append(htmlString);

  }
});
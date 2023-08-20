//get elements
const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('searchBtn')

//add event listener

searchBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  topSongs()
})

searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
      e.preventDefault()
      topSongs()
  }
})


//to topSongs we neeed to get the ID from the artist that we are searching
// function getId(){
function topSongs(){


  let artistName = search.value
  
  
  
  var xhr = new XMLHttpRequest();

  xhr.open('GET', `https://shazam.p.rapidapi.com/search?term=${artistName}&locale=en-US&offset=0&limit=5`);
  xhr.setRequestHeader('X-RapidAPI-Key', '5f5ebf1331mshe77879aaf54e3f1p1cfa97jsn8a5c4acd3566');
  xhr.setRequestHeader('X-RapidAPI-Host', 'shazam.p.rapidapi.com');

  xhr.onload = function(){
    if(this.status == 200){
      var data = JSON.parse(this.responseText);
      // console.log(data.artists.hits[0].artist.adamid);
      var artistId = data.artists.hits[0].artist.adamid
      var avatarImg = data.artists.hits[0].artist.avatar
      // console.log(data.artists.hits[0].artist.avatar);
      // console.log(artistId);
      // var output = `https://shazam.p.rapidapi.com/artists/get-top-songs?id=${artistId}&l=en-US`;
      // for(var i in data){
      //   output+= 
      //   '<div>'+data.artists.hits[0].artist.adamid+'</div>'

      
      function getSongs(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', `https://shazam.p.rapidapi.com/artists/get-top-songs?id=${artistId}&l=en-US`);
      xhr.setRequestHeader('X-RapidAPI-Key', '5f5ebf1331mshe77879aaf54e3f1p1cfa97jsn8a5c4acd3566');
      xhr.setRequestHeader('X-RapidAPI-Host', 'shazam.p.rapidapi.com');
      xhr.onload = function(){
        if(this.status == 200){
          var data = JSON.parse(this.responseText);
          console.log(data.data);

          console.log(data.data[0].attributes.name);
         
          var output=""
          for (var i in data.data){
            output +=
            // '<div>'+data.data[i].attributes.name+'</div>'
            '<div class="card" style="width: 18rem;">'+
              '<img src="'+avatarImg+'" class="card-img-top">'+
              // '<img src="'+data.data[i].attributes.artwork.url+'" class="card-img-top">'+
                '<div class="card-body">'+
                  '<h3 class="card-text">'+data.data[i].attributes.name+'</h3>'+
                  '<p class="card-text">'+data.data[i].attributes.composerName+'</p>'+
                '</div>'+
                '<a href="'+data.data[i].attributes.url+'" class="btn btn-secondary">Liste in Apple Music</a>'+
            '</div>'
          }
          document.getElementById('detailOutput').innerHTML = output
        }
      }
      xhr.send();
      }
      getSongs(artistId)
    }
  } 
  xhr.send();
}



  // function displayData(data){
    
  // }
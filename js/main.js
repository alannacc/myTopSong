//Listening for the click from user
document.querySelector('button').addEventListener('click', getFetch)

//billboard api info
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'billboard2.p.rapidapi.com',
		'X-RapidAPI-Key': BILLBOARD_KEY
	}
};

//youtube api info
const api_key = YOUTUBE_KEY;
const video_http = 'https://www.googleapis.com/youtube/v3/videos?';

//Fetching billboard API
function getFetch() {

    let choice = document.querySelector('input').value
    console.log(choice)

    fetch(`https://billboard2.p.rapidapi.com/hot_100?date=${choice}`, options)
    	.then(response => response.json())
    	.then(response => {

            console.log(response)

            //add artist, song name and image to html
            document.querySelector('h2').innerHTML = response[0].title
            document.querySelector('h3').innerHTML = response[0].artist
            document.querySelector('.artistimg').src = response[0].image
            let artist = response[0].artist
            let song = response[0].title
            let searchYoutube = artist +' '+ song
            let youtubeSearch = searchYoutube.replace("&#", '')
            console.log(youtubeSearch)
        
              // fetch youtube api and search for artist + song name
              let url = `https://youtube.googleapis.com/youtube/v3/search?q=${youtubeSearch}&key=${api_key}`
              fetch(url) 
              .then(response => response.json())
              .then(data => {
              console.log(data)
              let videoId = data.items[0].id.videoId
              document.getElementById('youtubelink').href = `https://www.youtube.com/watch?v=${videoId}`
              }
              )
              .catch(err => console.log(err))
            
      })
    	.catch(err => console.error(err));
}




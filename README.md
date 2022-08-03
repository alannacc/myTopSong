# My Top Song

Discover what song was #1 on the charts the day you were born!

<b>Live Website:</b> https://mytopsong.netlify.app/


![MyTopSong](https://user-images.githubusercontent.com/102706162/182508425-91988562-60c8-403b-88b1-b3bae36232cf.png)


## How It's Made:

**Tech used:** HTML, CSS, JavaScript, API Integration

Building this site I utilized two API's, the Google YouTube API and the Billboard Hot 100 Rapid API. Client side vanilla JavaScript has the Billboard API waiting for a date from the user. Then it retrieves the #1 song on the Hot 100 charts that day. Next, the Google Youtube API takes in the song title from the Billboard API and grabs a link to the youtube video for the song. The user can then press play and be directed right to the music video of the song. 

## Optimizations

Initially, this site had the music video from Youtube embedded directly in the site. Unfortunately, a lot of music videos have a copyright that doesn't allow them to be accessed outside of Youtube, so 95% of songs would have a black screen directing them to Youtube. I decided to add a play button to direct them to the video instead since it felt better visually.

I'd still like to add an ability to share your song results to different social media channels.



## Lessons Learned:

This was my first experience using two API's in one project and having them interact with one another. Learning to work with the Google API's was also a great learning experience since their documentation was a lot more dense than API's I had worked with previously.


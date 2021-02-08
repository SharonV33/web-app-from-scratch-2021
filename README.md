# Web App From Scratch @cmda-minor-web 2020 - 2021

[live link](http://web-app-from-scratch-2021.sharonv33.vercel.app/)

## about the app
This app will help you to discover new and awesome music in the best genre there is, metal. Browse through the 
latest and most popular thrash albums there are and get inspired by new bands. 

<img src="https://i.ibb.co/dW3NVFC/smaller.jpg">

##Tabe of content
* installing
* Usage and features
* last.fm api
* wishlist of features

## installing
clone the repo
```
git clone https://github.com/SharonV33/web-app-from-scratch-2021
```

## Usage and features
This web app can be used to get inspiration for new music to listen to. Some features are:
- viewing album information like artist, release date and tracklist. 


## last.fm api
For this web app, I use data from the [last.FM api](https://www.last.fm/api). The documentation is very easy to follow
which was a great help when getting started. I already knew that I wanted to work with data about genre's and albums so
I was able to get started right away. last.fm has a variety of links described in their documentation about what link
you need to call in order to get data and what the data you will receive looks like. The link I decided to use was 
```
JSON: /2.0/?method=tag.gettopalbums&tag=disco&api_key=YOUR_API_KEY&format=json 
```
In order to use this link, you need to add an api key, this can be gained by creating an account. Passing a genre (or as the api calls it, tag)
with the url is required, I changed this to metalcore. The url can also be changed to set a limit of albums to be fetched, the
standard is 50 which I decided to keep for testing, this could easily be changed to a larger number for production
By using a XMLHttpRequest on the link, I was able to get the data quite easily. The data I recieved looked like this
<img src="https://i.ibb.co/x3d6YrY/Screenshot-2021-02-05-at-10-27-03.png">
Each album has a name, a url to the related page on last.fm, a unique identifyer, information about the artist and 4 formats
of album art. This structure is repeated for each album, making it easy to create a template which I can fill with data.


## Wishlist of features
- [x] overview of albums bades on data from api
- [ ] view album details based on selected album
- [ ] responsive layout
- [ ] change genre
- [ ] improved design


MIT License

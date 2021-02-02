
//function to fetch data from last.fm api
function data(){
    // set variables
    const main = document.querySelector('.main')
    const url = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=thrash-metal&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10&format=json'


    // render data
    const render = function (albums) {
        albums.forEach(
            //create album card
            //create h2
            //fill h2 with name of album
        )
    }

    const request = new XMLHttpRequest();
    request.open('GET', url, true)
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            const data = JSON.parse(request.responseText)
            const allAlbums = data.albums.album
            console.log(allAlbums)
            render(allAlbums);
        } else {
            console.log("server returned error")
        }
    }
    request.onerror = function() {
        // There was a connection error of some sort
        console.log("connection error")
    }
    request.send()
}
data()
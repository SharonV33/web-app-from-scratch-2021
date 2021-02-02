
//function to fetch data from last.fm api
function data(){
    // set variables
    const main = document.querySelector('main')
    const url = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=metalcore&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10&format=jso

    const request = new XMLHttpRequest();
    request.open('GET', url, true)
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            const data = JSON.parse(request.responseText)
            console.log(data)
        } else {
            // We reached our target server, but it returned an error
        }
    }
    request.onerror = function() {
        // There was a connection error of some sort
    }
    request.send()
}
data()
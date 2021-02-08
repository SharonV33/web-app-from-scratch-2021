export default getData

function getData() {
    // set url
    const url = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=metalcore&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10&format=json'
    let albums

    const loadData = new Promise(function(resolve, reject){
        const request = new XMLHttpRequest();
        request.open('GET', url, true)

        //check server response
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                const data = JSON.parse(request.responseText);
                resolve(data)
            } else {
                // We reached our target server, but it returned an error
                reject(error)
            }
        }

        request.onerror = () => {
            // There was a connection error of some sort
        }

        request.send()
    })

    //perform render function after data is received
    loadData.then(data => {
        return albums = data.albums.album
    })
    return albums
}
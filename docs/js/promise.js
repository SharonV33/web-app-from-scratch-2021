function getData(){
    // set variables
    const url = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=metalcore&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10&format=json'

    const loadData = new Promise(function(resolve, reject){
        const request = new XMLHttpRequest();
        request.open('GET', url, true)

        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else {
                // We reached our target server, but it returned an error
                reject(error);
            }
        };

        request.onerror = () => {
            // There was a connection error of some sort
        };

        request.send();
    });

    loadData.then(data => {
        render(data.albums.album);
    });
}

// render data
const render = function (albums) {
    albums.forEach(singleAlbum => {
            const main = document.querySelector('main')
            const albumCard = document.createElement("article")
            const albumName = document.createElement("h2")
            const albumArt = document.createElement("img")
            const image = singleAlbum.image[3]['#text']
            const albumId = singleAlbum.mbid

            albumName.innerText = singleAlbum.name
            albumArt.src = image
            main.appendChild(albumCard).id = albumId
            albumCard.appendChild(albumName)
            albumCard.appendChild(albumArt)
        }
    )
}

getData()
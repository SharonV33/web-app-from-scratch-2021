export default getData

async function getData() {
    // set url
    const url = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=metalcore&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10&format=json'
    let allAlbums

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            allAlbums = data.albums.album
            return allAlbums
    })

}
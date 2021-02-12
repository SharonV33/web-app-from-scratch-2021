export { getData, getAlbumDetails }

async function getData() {
    // set url
    const url = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=metalcore&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10&format=json'
    let allAlbums

    //get data from api
    return fetch(url)
        //turn response from the api into jason
        .then(response => response.json())
        .then(data => {
            //unwrap the data from outer layers and return the album data
            allAlbums = data.albums.album
            return allAlbums
    })
        .catch(error => {
            console.log(error)
        })
}

async function getAlbumDetails(mbid) {
    const url = 'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10&mbid=' + mbid + '&format=json'
    let singleAlbum

    return fetch(url)
    //turn response from the api into jason
        .then(response => response.json())
        .then(data => {
            //unwrap the data from outer layers and return the album data
            singleAlbum = data.album
            return singleAlbum
        })
        .catch(error => {
            console.log(error)
        })

}
export { getData, getAlbumDetails }

async function getData() {
    // set url
    const endpoint = 'https://ws.audioscrobbler.com/2.0/?'
    const query = 'method=tag.gettopalbums&tag='
    const genre = 'metalcore'
    const key = '&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10'
    const format = '&format=json'
    const url = endpoint + query + genre + key + format

    //fetch data and format it to json
    const response = await fetch(url)
    const jsonResponse = await response.json()

    //filter out albums without mbid and return albums
    //without outer array layers
    return jsonResponse.albums.album
        .filter((album) => album.mbid)
}

//fetch single album information
async function getAlbumDetails(mbid) {
    //set up url
    const endpoint = 'https://ws.audioscrobbler.com/2.0/?'
    const query = 'method=album.getinfo'
    const albumid = '&mbid=' + mbid
    const key = '&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10'
    const format = '&format=json'
    const url = endpoint + query + key + albumid + format

    //fetch data and format it to json
    const response = await fetch(url)
    const jsonResponse = await response.json()

    //return single album information without
    //outer array layer
    return jsonResponse.album
}
export { getAlbums, getAlbumDetails }

async function getAlbums() {
    // set url
    const endpoint = 'https://ws.audioscrobbler.com/2.0/?'
    const query = 'method=tag.gettopalbums&tag='
    const genre = 'metalcore'
    const key = '&api_key=b0cbd53d2ea5b525c2a0447aa31fcd10'
    const format = '&format=json'
    const url = endpoint + query + genre + key + format
    // console.log(url)

    //fetch data and format it to json
        const response = await fetch(url)
        const jsonResponse = await response.json()

    // if the api returns a faulty result, throw the error
    if (!jsonResponse.albums) {
        throw "unable to load albums"
    }
    //filter out albums without mbid
    //remove unused item values
    return jsonResponse.albums.album
        .filter((album) => album.mbid)
        .map((item) => {
            return {
                title: item.name,
                mbid: item.mbid,
                image: item.image[3]['#text']
            }
        })
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

   // if the api returns a faulty result, throw the error
   if(!jsonResponse.album) {
       throw "album not found"
    }

    // //return single album information without
    // //outer array layer
    // const data = jsonResponse.album.map((item) => {
    //     return {
    //         title: item.name,
    //         artist: item.artist,
    //         image: item.image[4]['#text'],
    //         published: item.wiki.published,
    //         wiki: item.wiki.content,
    //         tracks: item.tracks.track
    //     }
    // })

    return jsonResponse.album
}
export { renderOverview, renderDetail, renderErrorPage }

// render overview page with all albums
function renderOverview (albums) {
    albums.forEach(singleAlbum => {
            const main = document.querySelector('main')
            const albumCard = document.createElement('a')
            const albumName = document.createElement('h2')
            const albumArt = document.createElement('img')
            const image = singleAlbum.image[3]['#text']
            const albumId = singleAlbum.mbid

            albumName.innerText = singleAlbum.name
            albumArt.src = image
            main.appendChild(albumCard).href = '#albumID/' + albumId
            albumCard.appendChild(albumName)
            albumCard.appendChild(albumArt)
        }
    )
}

function renderDetail (album) {
    //create variables with html elements to build up a detail page
    const main = document.querySelector('main')
    const albumCard = document.createElement('article')
    const albumName = document.createElement('h2')
    const albumArt = document.createElement('img')
    const published = document.createElement('p')
    const trackList = document.createElement('ul')
    const summary = document.createElement('p')
    const backButton = document.createElement('a')

    //create variables with data from the last.fm api
    const artist = album.artist ? album.artist : ''
    const albumTitle = album.name ? album.name : ''
    const image = album.image[4]['#text'] ? album.image[4]['#text'] : ''
    const publishedDate = album.wiki ? album.wiki.published : ''
    const albumTracks = album.tracks.track
    const albumSummary = album.wiki ? album.wiki.content : ''

    //fill html elements with content from last.fm
    main.innerHTML = '';
    albumArt.src = image
    albumName.innerText = albumTitle + ' - ' + artist
    published.innerText = publishedDate
    summary.innerHTML = albumSummary
    backButton.innerText = 'back'
    backButton.href = '/'


    albumTracks.forEach(function (track) {
        let li = document.createElement('li')
        trackList.appendChild(li)
        li.innerHTML += track.name
    })

    //append elements to container
    main.appendChild(albumCard)
    main.appendChild(backButton)
    albumCard.appendChild(albumArt)
    albumCard.appendChild(albumName)
    albumCard.appendChild(published)
    albumCard.appendChild(trackList)
    albumCard.appendChild(summary)

}

function renderErrorPage () {
    const main = document.querySelector('main')
    const message = document.createElement('h2')


    message.innerText = "kutzooi"
    main.appendChild(message)
    console.log("dikke error")
}
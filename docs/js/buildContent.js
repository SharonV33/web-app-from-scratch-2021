export default renderOverview

// render data
function renderOverview (albums) {
    albums.forEach(singleAlbum => {
            const main = document.querySelector('main')
            const albumCard = document.createElement("a")
            const albumName = document.createElement("h2")
            const albumArt = document.createElement("img")
            const image = singleAlbum.image[3]['#text']
            const albumId = singleAlbum.mbid

            albumName.innerText = singleAlbum.name
            albumArt.src = image
            main.appendChild(albumCard).href = '#albumID=' + albumId
            albumCard.appendChild(albumName)
            albumCard.appendChild(albumArt)
        }
    )
}
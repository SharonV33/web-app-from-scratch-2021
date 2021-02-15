import { getAlbumDetails, getData } from './getData.js'
import { renderDetail, renderOverview } from './buildContent.js'

export { handleRoutes }

function handleRoutes() {
    routie('', async function() {
        const allAlbums = await getData()
        renderOverview(allAlbums)
    })

    routie('albumID/:id', async function(id) {
        try {
            const singleAlbum = await getAlbumDetails(id)
            renderDetail(singleAlbum)
        }
        catch (exception) {
            document.querySelector('main').innerText = exception

        }
    })
}

//working routie code
// routie({
//     'albumID=:id': id => {
//         getAlbumDetails(id).then(data => {
//             renderDetail(data)
//         })
//     },
//     '/': getData()
//         .then(data => {
//             renderOverview(data)
//         })
// })
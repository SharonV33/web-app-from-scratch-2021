import { getAlbumDetails, getData } from './getData.js'
import { renderDetail, renderOverview } from './buildContent.js'

export { handleRoutes }

routie('/', async function home() {
    const data = await getData()
    renderOverview(data)
})

function handleRoutes() {
    routie('/', async function() {
        const allAlbums = await getData()
        renderOverview(allAlbums)
    })

    routie('albumID/?:id', async function(id) {
        const singleAlbum = await getAlbumDetails(id)
        renderDetail(singleAlbum)
    })
}
import { getAlbumDetails, getData } from './getData.js'
import { renderDetail, renderOverview, renderErrorPage } from './buildContent.js'

export { handleRoutes }

function handleRoutes() {
    routie('', async function() {
        try {
            const allAlbums = await getData()
            renderOverview(allAlbums)
        }
        catch {
            renderErrorPage()
        }
    })

    routie('albumID/:id', async function(id) {
        try {
            const singleAlbum = await getAlbumDetails(id)
            renderDetail(singleAlbum)
        }
        catch (error){
            renderErrorPage()

        }
    })
}

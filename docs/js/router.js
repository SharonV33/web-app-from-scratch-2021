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
            renderErrorPage('there was an error loading the content, please try again later')
        }
    })

    routie('albumID/:id', async function(id) {
        try {
            const singleAlbum = await getAlbumDetails(id)
            renderDetail(singleAlbum)
        }
        catch (error){
            renderErrorPage('there was an error trying to show you data about the selected album, please try again later')

        }
    })
}

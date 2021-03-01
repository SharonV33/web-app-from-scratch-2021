import { getAlbumDetails, getAlbums} from './getData.js'
import { renderDetail, renderOverview, renderErrorState, renderLoader, removeLoader } from './buildContent.js'

handleRoutes()

function handleRoutes() {
    //if url has no additional text
    routie('', async function() {
        //try and fetch data, when this is succesfull, build the overview page with fetched data
        try {
            renderLoader()
            const allAlbums = await getAlbums()
            removeLoader()
            renderOverview(allAlbums)
        }
        //if the fetch throws an error, load error state
        catch {
            renderErrorState('there was an error loading the content, please try again later')
        }

    })
    //if url contains /albumID/.... build detail page based on the id in the url
    routie('albumID/:id', async function(id) {
        //try and fetch data, if this succeeds, build detail page
        try {
            const singleAlbum = await getAlbumDetails(id)
            renderDetail(singleAlbum)
        }
        //if the fetch throws an error, load error state
        catch {
            renderErrorState('there was an error trying to show you data about the selected album, ' +
                'please try again later')
        }
    })
}

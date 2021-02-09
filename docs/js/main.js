import {getData, getAlbumDetails} from './getData.js'
import {renderOverview, renderDetail} from './buildContent.js'


showOverview()

handleRoutes()

async function showOverview() {
    const allAlbums = await getData()
    renderOverview(allAlbums)
}


function handleRoutes() {
    routie({
        //#giphy/425367
        'albumID=:id': id => {
            getAlbumDetails(id).then(data => {
                renderDetail(data)
            })
        },
        '/': showOverview()

    })
}

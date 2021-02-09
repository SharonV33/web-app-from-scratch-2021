import {getData, getAlbumDetails} from './getData.js'
import renderOverview from './buildContent.js'


initialise()

handleRoutes()

async function initialise() {
    const allAlbums = await getData()
    renderOverview(allAlbums)
}


function handleRoutes() {
    routie({
        //#giphy/425367
        'albumID=:id': id => {
            getAlbumDetails(id).then(data => {
                console.log(data)
            })
        },
        '':
            initialise()
    })
}

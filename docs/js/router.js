import { getAlbumDetails, getData } from './getData.js'
import { renderDetail, renderOverview } from './buildContent.js'

export { handleRoutes }

function handleRoutes() {
    routie({
        'albumID=:id': id => {
            getAlbumDetails(id).then(data => {
                renderDetail(data)
            })
        },
        '/': getData()
            .then(data => {
                renderOverview(data)
            })
    })
}


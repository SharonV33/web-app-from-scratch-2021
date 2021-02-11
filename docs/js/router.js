import {getAlbumDetails, getData} from "./getData";
import {renderDetail, renderOverview} from "./buildContent";

export { handleRoutes }

function handleRoutes() {
    routie({
        //#giphy/425367
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
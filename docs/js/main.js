import getData from './getData.js'
import render from './buildContent.js'


async function initialise() {
    const allAlbums = await getData()
    render(allAlbums)
}

initialise()
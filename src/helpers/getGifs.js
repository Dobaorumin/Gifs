export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=sYhaRgCBd5NIISV5n5MOir3f2w8SZwLH`
    const res = await fetch(url);
    const {data} = await res.json();


    const gifs = data.map((info) => {
        return {
            id: info.id,
            title: info.title,
            url: info.images.downsized_medium.url
        }
    })

    return gifs
}
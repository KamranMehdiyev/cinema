class VideoCard{
    render(url, title){
        console.log(url)
        return(
            `<div class="grid_card">
                <video src="${url}" controls=""></video>
                ${
                    title ?
                    `<h3 class="grid_card_title">${title}</h3>`:''
                }
            </div>`
        )
    }
}

export default new VideoCard()
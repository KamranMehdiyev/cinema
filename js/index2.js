import {main_api} from './api.js'
import slidercard from './slidercard.js'
const sliderindex2card = document.querySelector('#sliderindex2card')
const movieContainer = document.querySelector('#movieContainer')
import videoCard from './videoCard.js'

fetch(main_api)
.then(response=>response.json())
.then(data=>{
    data.results.forEach(movie => {
        sliderindex2card.innerHTML += slidercard.render(movie)
    })
})


fetch('../db/videosapi.json')
.then(resp => resp.json())
.then(videos=>{
    videos.forEach(video=>{
        movieContainer.innerHTML += videoCard.render(video.url)
    })
})
import {popular_mv_api,best_comedies_mv_api,action_and_adventure_mv_api} from './api.js'
const popularMovieContainer = document.querySelector('#popularMovieContainer')
const bestComediesContainer = document.querySelector('#bestComediesContainer')
const actionAndAdventure = document.querySelector('#actionAndAdventure')
const videoContainer = document.querySelector('#videoContainer')
const popularmMleftBtn = document.querySelector("#popularmMleftBtn")
const popularmMrightBtn = document.querySelector("#popularmMrightBtn")

import slidercard from './slidercard.js'
import videoCard from './videoCard.js'

fetch(popular_mv_api)
.then(response=>response.json())
.then(data=>{
    data.results.forEach(movie => {
        popularMovieContainer.innerHTML += slidercard.render(movie)
    })

    let inc = 0;
    setInterval(()=>{
        if(inc < popularMovieContainer.children.length-4){
            inc++
        }else{
            inc=0
        }
        inc++;
        mainSlider()
    },2000)
    popularmMrightBtn.addEventListener('click',()=>{
        if(inc < popularMovieContainer.children.length-4){
            inc++
        }else{
            inc=0
        }
        mainSlider()
    })

    popularmMleftBtn.addEventListener('click',()=>{
        if(inc > 0){
            inc--
        }   
        mainSlider()
    })


    function mainSlider(){
        for(let i = 0; i<popularMovieContainer.children.length; i++){
            popularMovieContainer.children[i].style.transform = `translatex(-${inc*300}px)`
        }
    }
    mainSlider()
    
})

fetch(best_comedies_mv_api)
.then(response=>response.json())
.then(data=>{
    data.results.forEach(movie => {
            bestComediesContainer.innerHTML += slidercard.render(movie)
    })
})

fetch(action_and_adventure_mv_api)
.then(response=>response.json())
.then(data=>{
    data.results.forEach(movie => {  
            actionAndAdventure.innerHTML += slidercard.render(movie)
    })
})


// fetch('../db/bestComedies.json')
// .then(response=>response.json())
// .then(data=>{
//     console.log(data)
// })


fetch('./db/videosapi.json')
.then(resp=>resp.json())
.then(videos=>{
    videos.forEach((video, i)=>{
        if(i < 3){
            videoContainer.innerHTML += videoCard.render(video.url, video.title)
        }
        
    })
})
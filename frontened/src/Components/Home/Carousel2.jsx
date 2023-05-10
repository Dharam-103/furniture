import ReactCardSlider from 'react-card-slider-component';
// a slide object contains the image link, title and function/click event for when a user clicks on a card
import React from 'react'
import { Center } from '@chakra-ui/react';

const Carousel2 = () => {
    const slides = [
        { image: "https://www.ulcdn.net/media/Collection/listings/Axis-mall-Kolkata-carousel.png?1681728910",title:"Axis-mall",description:"KOLKATA", },
        { image: "https://www.ulcdn.net/media/Linking%20Road%20-Mumbai-carousel/Linking_Road_-Mumbai-carousel.png?1681729039",title:"Linking_Road",description:"Mumbai", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Sec_14-gurgaon-carousel.png?1681729056",title:"Sec_14-gurgaon",description:"GURGOAN", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Banajra_Hills_Hyd-carousel.png?1681728968",title:"Banajra_Hills",description:"HYDRABAD", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Sec_67-gurgaon-carousel.png?1681728987",title:"Sec_67-gurgaon",description:"GURGOAN", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Saket-Delhi-carousel.png?1681729004",title:"Saket-Delhi",description:"DELHI", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Kolkata.png?1681723395",title:"KOLKATA",description:"KOLKATA", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Kochi.png?1681723465",title:"KOCHI",description:"KOCHI",}
    ]
    return (
        <div w='80%'>
            <Center>
                <ReactCardSlider slides={slides} />
            </Center>
        </div>
    )
}

export default Carousel2

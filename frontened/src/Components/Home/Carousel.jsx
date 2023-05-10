import ReactCardSlider from 'react-card-slider-component';
// a slide object contains the image link, title and function/click event for when a user clicks on a card
import React from 'react'
import { Center } from '@chakra-ui/react';

const Carousel = () => {
    const slides = [
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-_Bangloe.png?1681723070",title:"BANGLORE",description:"8 stores", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Delhi___NCR.png?1681723096",title:"DELHI & NCR",description:"5 stores", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Mumbai.png?1681723129",title:"MUMBAI",description:"6 stores", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Hyderabad.png?1681723199",title:"HYDRABAD",description:"3 stores", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Chennai.png?1681723241",title:"CHENNAI",description:"6 stores", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Pune.png?1681723279",title:"PUNE",description:"5 stores", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Kolkata.png?1681723395",title:"KOLKATA",description:"8 stores", },
        { image: "https://www.ulcdn.net/media/Collection/listings/Carousel_store_awareness-Kochi.png?1681723465",title:"KOCHI",description:"2 stores",}
    ]
    return (
        <div w='80%'>
            <Center>
                <ReactCardSlider slides={slides} />
            </Center>
        </div>
    )
}

export default Carousel

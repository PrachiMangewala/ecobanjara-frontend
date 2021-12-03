import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import TravelExperts from '../TravelExperts';
import TravelExpert from '../components/TravelExpert';

export default function DestinationScreen() {
    const[image, setImage] = useState('images/tajmahal.jpg');
    var settings2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div>
            <img src={image} alt="img" className="dest-backimage"></img>
            <span className="overlay" style={{padding: "6px 8px 6px 8px", left:"84%"}}><i class="fas fa-map-marker-alt loc-icon"></i></span>
            <div className="destination-info">
                <div>
                <p className="mx-1 dest-name">Rishikesh</p>
                <p className="mx-1 dest-area"><span class="icon"><i class="fas fa-map-marker-alt marker"></i></span>Uttarakhand</p>
                </div>
            <div>
                    <ul className="mx-1 dest-text">
                        <li><a href="/" class="active" style={{color: "#6F7789"}}>About</a></li>
                        <li><a href="/" class="loc-hover" style={{color: "#6F7789"}}>Blogs</a></li>
                        <li><a href="/" class="loc-hover" style={{color: "#6F7789"}}>Photo</a></li>
                        <li><a href="/" class="loc-hover" style={{color: "#6F7789"}}>Videos</a></li>
                    </ul>
            </div>
            <div>
                <p className="mx-1 dest-name" style={{fontSize: "0.9rem", marginTop: "1.5rem"}}>Description</p>
                <p className="mx-1 dest-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu amet tempor, in massa, habitasse habitasse fermentum, sed faucibus. Augue arcu, ac proin accumsan urna morbi diam nunc, tincidunt. Ac turpis amet vitae dui aliquam vitae nunc. Non enim, lorem duis maecenas odio <span><Link to="/" className="font-yellow">Read More</Link></span></p>
            </div>
            <div>
                <div class="text">
                    <p>Top Travel Experts</p>
                    <a href="/">View All</a>
                </div>
                <div class="Slide">
                <Slider {...settings2}>
                    {
                        TravelExperts.TravelExp.map((Travelexpert) => (
                            <TravelExpert key={Travelexpert._id} TravelExpert={Travelexpert}></TravelExpert>
                        ))
                    }
                </Slider>
                </div>
            </div>
            <div>
                <div class="text">
                    <p>Top Locals</p>
                    <a href="/">View All</a>
                </div>
                <div class="Slide pb-4">
                <Slider {...settings2}>
                    {
                        TravelExperts.TravelExp.map((Travelexpert) => (
                            <TravelExpert key={Travelexpert._id} TravelExpert={Travelexpert}></TravelExpert>
                        ))
                    }
                     </Slider>
                </div>
            </div>
            </div>
        </div>
    )
}

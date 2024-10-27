import { useState } from 'react';
import './App.css'
import { faker } from '@faker-js/faker';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const reviewArray = [...Array(20)].map(() => ({
    image: faker.image.avatar(),
    name: faker.person.fullName(),
    review: faker.lorem.sentences(2),
  }));

  const [data] = useState(reviewArray);

  var settings = {
    dots: true,  //Specify whether you want dots to display or not
    infinite: true, //Specify whether you want infinite scrolling or not
    speed: 500, //Specify the speed of scrolling
    slidesToShow: 3, //Specify how many slides you want to show each time
    slidesToScroll: 1  //Specify how many slides you want to scroll on clicking
  };

  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
        <Slider {...settings}>
          {data.map((rev, index) => (
            <div key={index} className='bg-white h-[450px] text-black rounded-xl'>
              <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center h-56'>
                <img src={rev.image} alt="" className='h-44 w-44 rounded-full'/>
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{rev.name}</p>
                <p>{rev.review}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </>
  )
}

export default App

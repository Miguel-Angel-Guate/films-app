
import React, { useState } from 'react';
import SliderItem from '../serverComponents/SliderItem'; // Create this component for individual slider items
import { MostPopularFilmData } from '@/interface/types';

async function getData() {
  const baseUrl = 'https://api.themoviedb.org/3/movie'
  const apiKey = process.env.NEX_PUBLIC_API_KEY;
  const res = await fetch(`${baseUrl}/popular?page=1&api_key=${apiKey}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  console.log("🚀 ~ file: Slider.tsx:14 ~ getData ~ data:", data)
  return data
}

const Slider = async () => {

  const mostPopular = await getData()
   /*
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };
 */
  return (
    <>
      <div>
        {/* 
        <button onClick={handlePrevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2">
          Previous
        </button>
        <button onClick={handleNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2">
          Next
        </button>
*/}
        <div className="">
          {mostPopular?.results?.map((popular:MostPopularFilmData) => {
            return (
              <SliderItem key={popular?.id} mostPopularFilms={popular} /* isActive={index === currentIndex} */ />
            )
          })}
        </div>
      </div> 
    </>
  );
}

export default Slider;

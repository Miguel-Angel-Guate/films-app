import {  MostPopularFilmImage } from '@/interface/types';
import Image from 'next/image';
import React from 'react';

function SliderItem({ mostPopularFilms }: { mostPopularFilms: MostPopularFilmImage }) {
  //${isActive ? 'opacity-100' : 'opacity-0'}
  return (
    <div
      className="w-96"
    >
      <Image 
      src={`https://image.tmdb.org/t/p/w500${mostPopularFilms?.poster_path}`} 
      alt={mostPopularFilms?.title} 
      className="w-full h-auto"
      width={200}
      height={200}
      />
      <div className="bg-white p-4">
        <h2 className="text-2xl font-bold">{mostPopularFilms?.title}</h2>
        <p className="text-gray-700">{mostPopularFilms?.description}</p>
      </div>
    </div>
  );
}

export default SliderItem;

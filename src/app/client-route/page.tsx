'use client'

// import { serverComponents } from "../utils/server-utils";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-provider';
import { clientComponents } from '../utils/clients-utils';

export default function ClientRoutePage() {
    const result = clientComponents();
    const customTheme = useTheme();
    const settings = {
        dots: true,
      };
      return (
        <>
        <h2 style={{color: customTheme.colors.secondary}}>Client Route Page</h2>
        <h2>{result}</h2>
        <div className="image-slider-container">
          <Slider {...settings}>
            <div>
              <img src="https://picsum.photos/400/200" />
            </div>
            <div>
              <img src="https://picsum.photos/400/200" />
            </div>
            <div>
              <img src="https://picsum.photos/400/200" />
            </div>
            <div>
              <img src="https://picsum.photos/400/200" />
            </div>
          </Slider>
        </div>
        </>
      );
}
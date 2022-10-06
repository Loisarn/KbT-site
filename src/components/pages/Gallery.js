import React from "react";
import { Image } from "antd";

import image1 from '../../images/image1.JPG';
import image2 from '../../images/image2.JPG';
import image3 from '../../images/image3.JPG';
import image4 from '../../images/image4.JPG';
import image5 from '../../images/image5.JPG';
import image6 from '../../images/image6.JPG';
import image7 from '../../images/image7.JPG';

export default function Gallery() {
  return (
  <div className="block galleryBlock">
  <div className="container-fluid">
    <Image width={250} height={300} src={image1} className="gallery-photo" alt="spider"/>
    <Image width={250} height={300} src={image2} className="gallery-photo" alt="skull"/>
    <Image width={250} height={300} src={image3} className="gallery-photo" alt="supermario"/>
    <Image width={250} height={300} src={image4} className="gallery-photo" alt="dog"/>
    <Image width={250} height={300} src={image5} className="gallery-photo" alt="zelda"/>
    <Image width={250} height={300} src={image6} className="gallery-photo" alt="medusa"/>
    <Image width={250} height={300} src={image7} className="gallery-photo" alt="man"/>
  </div>
  </div>
    );
}

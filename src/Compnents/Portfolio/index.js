import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PortfolioSection, PortfolioItem, PortfolioList, PortfolioSpan, PortfolioTitle, Image, ImageWrapper, Overlay, OverlaySpan } from './Style.js'
const Portfolio = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios.get('js/data.json').then(res => { setImages(res.data.portfolio) })

  }, [])
  const portfolioImages = images.map((imageItem) => {
    return (
      <ImageWrapper key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay>
          <OverlaySpan>
            Show Image
          </OverlaySpan>
        </Overlay>
      </ImageWrapper>
    )
  });
  return (
    <PortfolioSection>
      <PortfolioTitle><PortfolioSpan>My</PortfolioSpan> Portfolio</PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className='box'>
        {portfolioImages}
      </div>

    </PortfolioSection>
  );
}

export default Portfolio;

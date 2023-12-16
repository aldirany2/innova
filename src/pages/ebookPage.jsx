import React, { useContext } from 'react'
import { Cards } from '../Components/card/card'
import { Carousels } from '../Components/carousel/carousel'
import { product } from '../context/productContext';

export const EbookPage = () => {
  let {data} =useContext(product);
  let cardInfo=data.data[0].attributes

  return (
    <div>
        <h2>E-books</h2>
        <Carousels/>
        <div>
            <Cards name={cardInfo.name} slug={cardInfo.slug} price={cardInfo.display_price} currency={cardInfo.currency} img={cardInfo.book.image_url} />
        </div>
    </div>
  )
}

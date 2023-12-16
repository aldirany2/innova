import React, { useContext } from 'react'
import { product } from '../../../context/productContext'

export const Content = () => {
  let { x } = useContext(product)

  return (
    <div className='border border-4 w-75'>{
      x ? 'mohamedHassan' : "Mohamed gaber"
    }


      <button>Bookmark</button>
    </div>
  )
}

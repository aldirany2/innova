import React from 'react'
import { Headpag } from './headpag-section/headpag'
import { Aside } from './aside-section/aside'
import { Content } from './content-section/content'

export const MainSeaction = () => {
  return (
    <div>
      <Headpag />
      <div className='row'>
        <Aside />
        <Content />
      </div>
    </div>
  )
}

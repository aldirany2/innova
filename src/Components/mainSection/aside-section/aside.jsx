import React, { useContext } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { product } from '../../../context/productContext';
export const Aside = () => {
  let { setx, x, setBookMark, bookMark } = useContext(product);

  return (
    <div className='border w-25'>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>pages</Accordion.Header>
          <Accordion.Body className='p-0'>
            <ul className='list-style-none m-0 p-0'>
              <li className='py-3 bg-dark text-white w-100 px-3 ' onClick={() => { setx(true) }}>page 1-2</li>
              <li className='py-3 bg-dark text-white w-100 px-3 ' onClick={() => { setx(false) }}> page 3-4</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => {
            if (x) {
              setBookMark(["page1-2"])
            } else {

              setBookMark(["page3-4"])
            }
          }}>bookmarks</Accordion.Header>
          <Accordion.Body>
            <ul className='list-style-none m-0 p-0'>
              <li className='py-3 bg-dark text-white w-100 px-3 ' >  {bookMark}  </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>    </div>
  )
}






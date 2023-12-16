import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export const Cards = ({name, slug, price,currency, img}) => {
  return (
    <Link to={"/productDetails"}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{slug}</Card.Title>
          <Card.Text>
            {currency} {price}
          </Card.Text>
          <Button variant="primary">show details</Button>
        </Card.Body>
      </Card>
    </Link>
  )
}





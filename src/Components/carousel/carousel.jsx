import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const Carousels = () => {
  return (
    <Tabs
    defaultActiveKey="profile"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
    <Tab eventKey="home" title="all">
    </Tab>
    <Tab eventKey="profile" title="training">
    </Tab>
    <Tab eventKey="contact" title="cardio">
    </Tab>
  </Tabs>
  )
}


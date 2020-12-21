import React from 'react'
import Common from './Common'
import web from "../src/images/about.svg"

function About() {
    return (
     <>
      <Common
    name="Welcome to About Section"
    imgsrc={web}
    visit="/Services"
    btname="Contact"
    />
     </>
    )
}

export default About

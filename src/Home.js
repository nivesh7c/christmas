import React from 'react'
import web from "../src/images/santa.svg"
import Common from './Common'

function Home() {
    return (
        <>
    <Common
    name="Welcome to Skynox Training" 
    imgsrc={web}
    visit="/Services" 
    btname="Get Start"
    />
        </>
    )
}

export default Home

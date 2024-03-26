// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  staticImage
} from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="🏙️🏔️🌴Travel Ideas Club 🌴🏔️🏙️">
        <p>Welcome to Travel Ideas Club, a micro-site for sharing trip ideas and itineraries among friends.</p>
        <StaticImage
        className={staticImage}
        alt="City skyline of New York City, looking out over Little Island."
        src="../images/city.jpg"
      />
        <StaticImage 
        className={staticImage}
        alt="Mountain view looking out over the Grand Tetons from Jackson Hole"
        src="../images/mountain.jpg"
      />
        <StaticImage
        className={staticImage}
        alt="View of the beach and ocean, with a few distant people, on a bright day."
        src="../images/beach.png"
      />
      </Layout>
    </main>
  )
}

export const Head = () => (
  <>
    <title>Travel Ideas Club | Home</title>
    <meta name="description" content="Welcome to the Travel Ideas Club, a micro-site for sharing trip ideas and itineraries among friends." />
  </>
)

export default IndexPage
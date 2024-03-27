// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import {
  staticImage
} from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home">
        <p>Welcome to Travel Ideas Club, a micro-site for sharing trip ideas and itineraries among friends.</p>
        <StaticImage
        className={staticImage}
        alt="City skyline of New York City, looking out over Little Island."
        src="../images/city-scene.jpg"
      />
        <StaticImage 
        className={staticImage}
        alt="Mountain view looking out over the Grand Tetons from Jackson Hole"
        src="../images/mountain-scene.jpg"
      />
        <StaticImage
        className={staticImage}
        alt="View of the beach and ocean, with a few distant people, on a bright day."
        src="../images/beach-scene.png"
      />
      </Layout>
    </main>
  )
}

export const Head = () => (
  <>
    <Seo title="Home" />
    <meta name="description" content="Welcome to the Travel Ideas Club, a micro-site for sharing trip ideas and itineraries among friends." />
  </>
)

export default IndexPage
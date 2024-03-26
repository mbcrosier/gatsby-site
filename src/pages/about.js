// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About the Club">
        <p>Welcome to Travel Ideas Club, a micro-site for sharing trip ideas and itineraries among friends.</p>
        <p>All it takes to join the club is to either add an itinerary of your own, or follow one!</p>
      </Layout>
    </main>
  )
}

export const Head = () => (
    <>
      <title>Travel Ideas Club | About</title>
      <meta name="description" content="Learn about Travel Ideas Club, a micro-site for sharing trip ideas and itineraries among friends." />
    </>
  )

// Step 3: Export your component
export default AboutPage
import * as React from 'react'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    staticImage,
    siteTitle
} from './layout.module.css'
import '../styles/global.css'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
                    <li className={navLinkItem}><Link to="/ideas" className={navLinkText}>Ideas</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout
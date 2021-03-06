import React from 'react'
import { Link } from 'react-router'
import typography from '../blog-typography'
import { Container } from 'react-responsive-grid'
const rhythm = typography.rhythm
const adjustFontSizeToMSValue = typography.adjustFontSizeToMSValue
import includes from 'lodash/includes'
import '../css/zenburn.css'

class Wrapper extends React.Component {
  render () {
    let header
    // Check if the location is either the front page or a tags page.
    // If so, use a big header, otherwise use a smaller one.
    if (includes(['/', '/tags/'], this.props.pathContext.path) ||
        includes(this.props.pathContext.path, '/tags/')
       ) {
      header = (
        <Link
          style={{
            textDecoration: 'none',
            boxShadow: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          <h1
            style={{
              ...adjustFontSizeToMSValue(1.5),
              marginBottom: rhythm(1.5),
            }}
          >
            Bricolage
          </h1>
        </Link>
      )
    } else {
      header = (
        <Link
          style={{
            textDecoration: 'none',
            boxShadow: 'none',
            color: 'inherit',
          }}
          to="/"
        >
          <h3>Bricolage</h3>
        </Link>
      )
    }
    return (
      <Container
        style={{
          padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
          maxWidth: 750,
        }}
      >
        <div>
          {header}
        </div>
        {this.props.children}
      </Container>
    )
  }
}

export default Wrapper

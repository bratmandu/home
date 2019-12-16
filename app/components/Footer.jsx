import React from 'react'
import ScrollTop from './utilities/scrollTop'

export default function Footer() {
  return (
    <footer className="px-3 py-2 fixed-bottom">
      <div className="container">
        <div>
          Footer text area
          <button type="button" className="btn btn-primary float-right" onClick={ScrollTop}>
            Top
          </button>
        </div>
      </div>
    </footer>
  )
}

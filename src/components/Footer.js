import React, { Component } from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      Emilio Ponce.
      <span className="Element">
        <a href="https://www.github.com/emilioponce">Github</a>
      </span>
      <span className="Element">
        <a href="https://emilioponce.info">Blog</a>
      </span>
      <span className="Element-right">
        <a href="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0 license</a>
      </span>
    </div>
  )
}

export default Footer

import React from "react"

import { Link } from "gatsby"

const Footer = props => {
  const data = props.data.allFooterJson.edges[0].node

  return (
    <>
      <div>
        <ul>
          {data.Address.map(address => (
            <li>
              <h4>
                {address.City}, {address.Country}
              </h4>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Come work with us!</h2>
        <p>
          We are always looking for great people with talent to join our teams.
        </p>
        <Link to="/">Careers</Link>
      </div>
      <div>
        <h2>Social</h2>
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img alt="FB"></img>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img alt="TW"></img>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img alt="In"></img>
          </a>
        </div>
      </div>
      <div>
        <p>{data.Copyright}</p>
        <a href="/">Privacy Policy</a>
      </div>
    </>
  )
}

export default Footer

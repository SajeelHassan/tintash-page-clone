import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import Card from "../components/Card/Card"
import { graphql } from "gatsby"
export default function Home(props) {
  console.log(props)
  const data = props.data.allServicesJson.nodes
  return (
    <>
      <Navbar />
      <Header />
      <ul>
        {data.map(service => (
          <li key={service.id}>
            <Card
              Title={service.Title}
              Description={service.Description}
              image="images/web.svg"
              cto={service.CallToAction}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allServicesJson {
      nodes {
        CallToAction
        Description
        Title
        id
        image {
          relativePath
        }
      }
    }
  }
`

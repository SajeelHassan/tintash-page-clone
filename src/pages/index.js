import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Header from "../components/Header/Header"
import Card from "../components/Card/Card"
import Cards from "../components/Cards/Cards"
import { graphql } from "gatsby"
import Footer from "../components/Footer/Footer"
import FooterHeadline from "../components/FooterHeadline/FooterHeadline"
import Container from "../components/Helpers/Container"
import NavHead from "../components/Helpers/NavHead"
import "../styles/index.css"
export default function Home(props) {
  const data = props.data.allServicesJson.nodes
  return (
    <>
      <NavHead>
        <Container>
          <Navbar />
          <Header />
        </Container>
      </NavHead>
      <Container>
        <Cards>
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
        </Cards>
      </Container>
      <FooterHeadline />
      <Footer data={props.data} />
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
    allFooterJson {
      edges {
        node {
          Address {
            City
            Country
          }
          Copyright
          id
        }
      }
    }
  }
`

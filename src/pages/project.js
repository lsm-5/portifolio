import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0,0,0,0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) => href && css`
    &:hover ${Image}{
      transition: transform .5s;
      transform: translateY(-5px);
    }
  `}
`

const Project = ({ className, location }) => {
  const title = "Projetos"
  const { keywords, portifolio } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('/images/pierre-chatel-innocenti-W5INoOK-5eI-unsplash.jpg')}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            {portifolio.map(job => (
              <Col
                key={job.description}
                align="center"
              >
                <JobCard
                  as={job.url ? "a" : "div"}
                  href={job.url}
                  target="_blank"
                >
                  <Image src={withPrefix(job.image)} />
                  <h4 style={{maxWidth: 220, textAlign: 'center'}}>{job.description}</h4>
                  <p style={{maxWidth: 220, textAlign: 'center'}}  >{job.subDescription}</p>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Project)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`

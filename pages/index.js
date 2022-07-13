import Head from 'next/head'
import Image from 'next/image'
import projects from '../data/projects'
import about from '../data/about'
import { Heading, MainWrapper, Row, Column, Description, Section, Calendar } from '../styled_components/mainpage'
import styles from '../styles/Home.module.css'
import Project from '../components/Project'

const main = {
  main: "mediumseagreen",
}

const sub = {
  main: "skyblue"
}

export default function Home() {
  return (
    <MainWrapper>

      <Section theme={main}>
        <Column>
          <Row>
            <div>
              <img src={about.headshot.main} alt={about.title}/>
            </div>
          <Calendar as="a" href={about.calendar}>Schedule An Introduction</Calendar>
          </Row>
          <Row>
            <Heading>I Develop Solutions</Heading>
            <Description>
              <p>{about.description}
              <br/><br/>
              Noteable Skills<br/>
              {about.skills}</p>
            </Description>
          </Row>
        </Column>
      </Section>

      <Section theme={sub}>
        <Column>
          <Row>
            <Heading>Professional Values</Heading>
            <Description>
              <p>{about.values.learn}</p>
              <br></br>
              <p>{about.values.trust}</p>
              <br></br>
              <p>{about.values.why}</p>
              <br></br>
            </Description>
          </Row>
          <Row>
            <div>
              <img src={about.headshot.sub} alt={about.title}/>
            </div>
          <Calendar as="a" href={about.calendar}>Let's Get Acquainted</Calendar>
          </Row>
        </Column>
      </Section>

      <Section>
        <Calendar as="a" href={about.calendar}>Like what you see? Schedule a meet and greet</Calendar>
        <Heading>My Latest Projects</Heading>
        <Row>
        {projects.map((project, index) => {
          return <Project project={project} key={index}/>
        })}
        </Row>
      </Section>


    </MainWrapper>
  )
}

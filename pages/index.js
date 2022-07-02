import Head from 'next/head'
import Image from 'next/image'
import projects from '../data/projects'
import about from '../data/about'
import { Heading, MainWrapper, Row, Column } from '../styled_components/mainpage'
import styles from '../styles/Home.module.css'
import Project from '../components/Project'

export default function Home() {
  return (
    <MainWrapper>

      <Column>
        <Row>
          <Heading>I Develop Solutions</Heading>
          <p>{about.description}
          <br/><br/>
          My Skills:<br/>
          {about.skills}</p>
        </Row>
        <Row>
          <div>
            <img src={about.headshot} alt={about.title}/>
          </div>
        </Row>
      </Column>


    <Heading>My Projects</Heading>
      <Row>
      {projects.map((project, index) => {
        return <Project project={project} key={index}/>
      })}
      </Row>


    </MainWrapper>
  )
}

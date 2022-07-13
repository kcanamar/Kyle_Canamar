import projects from '../data/projects'
import about from '../data/about'
import { Heading, MainWrapper, Row, Column, Description, Section, Calendar } from '../styled_components/mainpage'
import Project from '../components/Project'

export default function Protfolio() {
    return (
        <MainWrapper>
            <Section>
                <Heading>My Portfolio</Heading>
                <Calendar as="a" href={about.calendar}>Schedule A Meeting Here</Calendar>
                <Row>
                    {projects.map((project, index) => {
                    return <Project project={project} key={index}/>
                    })}
                </Row>
            </Section>
        </MainWrapper>
    )
}
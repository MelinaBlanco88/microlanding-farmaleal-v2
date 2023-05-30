import { Container } from "react-bootstrap";
import { Benefits, Hero,  Pricing, Tabla } from "../components";


export const LandingPage = () => {
    return (
    <>
        <Hero />
        <Container className='px-0'>
            <Benefits />
        </Container>
        <div className="separator"></div>
        <Container className='px-0'>
            <Tabla />
            <Pricing />
        </Container>
    </>)
}
import { Container } from "react-bootstrap";
import { Benefits, Footer, Hero, NavBar, Pricing } from "./components/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/_styles.scss";
import { Tabla } from "./components/Tabla";

export const App = () => {
	return (
		<div style={{ minHeight: "100vh", width: "100%" }}>
			<NavBar />
			<Hero />
			<Container className='px-0'>
				<Benefits />
				
			</Container>


				<div className="separator"></div>

				<Container className='px-0'>
					<Tabla />
					<Pricing />
				</Container>
			<Footer />
		</div>
	);
};

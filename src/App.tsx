import { Container } from "react-bootstrap";
import { Benefits, Footer, Hero, NavBar, Pricing } from "./components/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/_styles.scss";

export const App = () => {
	return (
		<div style={{ minHeight: "100vh", width: "100%" }}>
			<NavBar />
			<Hero />
			<Container className='px-0'>
				<Benefits />
				<Pricing />
			</Container>
			<Footer />
		</div>
	);
};

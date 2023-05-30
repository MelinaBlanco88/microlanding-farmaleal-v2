import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/_styles.scss";
import { Routes , Route } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { LandingPage, VideconsultasPage, EntregasPage } from "./pages";


 
export const App = () => {
	return (
		<div style={{ minHeight: "100vh", width: "100%" }}>
			<NavBar />
			<Routes>
				<Route path="/" Component={LandingPage} />
				<Route path="/entregas" Component={EntregasPage} />
				<Route path="/videoconsultas" Component={VideconsultasPage} />

			</Routes>
			<Footer />
		</div>
	);
};

import { Container, Row, Col, Stack, Navbar } from "react-bootstrap";
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<section id='navbar'>
			<Container fluid>
				<Row className='text-center primary-bg py-2 text-white'>
					<Col xs={0} md={2}></Col>
					<Col xs={12} lg={8} className=''>
						<p className='m-0 px-1 header-top '>Tu farmacia digital en productos de especialidad - Envíos a todo México</p>
					</Col>
					<Col xs={12} lg={2}>
						<Stack direction='horizontal' gap={1} className='d-flex justify-content-center pt-2 pt-md-0'>
							<a href="https://twitter.com/FarmaLeal/" className='p-0 text-white mx-2'>
								<FaTwitter size={22} />
							</a>
							<a href="https://www.facebook.com/CFarmaLeal/" className='p-0 text-white mx-2'>
								<AiFillFacebook size={22} />
							</a>
							<a href="https://www.instagram.com/farmaleal/" className='p-0 text-white mx-2'>
								<AiOutlineInstagram size={22} />
							</a>
							<a href="https://www.youtube.com/channel/UCVezBeVMt6iPAsq2a9_4CIA" className='p-0 text-white mx-2'>
								<AiFillYoutube size={22} />
							</a>
						</Stack>
					</Col>
				</Row>
			</Container>
			<Stack direction='vertical' className=''></Stack>

			<Navbar expand='md'>
				<Container>
					<Row className='align-items-center w-100'>
						<Col xs={8}>
							<a href='/'>
								<img
									className='ms-0 logo-image'
									src='./images/logo-farmaleal.png'
									alt='Logo Farmaleal'
									height='auto'
									width='80px'
									style={{ objectFit: "contain" }}
								/>
							</a>
						</Col>
						<Col xs={4} className=''>
							<Stack direction='horizontal' gap={2} className='d-flex justify-content-end'>
								<Link className='text-decoration-none text-end' to='/'>
									<p className='text-body mt-3 ms-3 fw-500 fs-6 text-decoration-none'>Inicio</p>
								</Link>
								<Link className='text-decoration-none text-end' to='/'>
									<p className='text-body mt-3 ms-3 fw-500 fs-6 text-decoration-none'>Login</p>
								</Link>
							</Stack>
						</Col>
					</Row>
				</Container>
			</Navbar>
		</section>
	);
};

import { Col, Row, Container, Stack, Button } from "react-bootstrap";
import { HeroIcon } from ".";
import { BiDollarCircle } from "react-icons/bi";
import { TbPill, TbDiscount2, TbPhoneCall, TbTruckDelivery } from "react-icons/tb";

const Items = [
	{
		label: "El precio más bajo",
		icon: <BiDollarCircle size={35} />,
	},
	{
		label: "1 producto gratis al mes*",
		icon: <TbPill size={35} />,
	},
	{
		label: "¡Miles de descuentos!",
		icon: <TbDiscount2 size={35} />,
	},
	{
		label: "Video-consultas 24/7",
		icon: <TbPhoneCall size={35} />,
	},
	{
		label: "Entrega nacional",
		icon: <TbTruckDelivery size={35} />,
	},
];

export const Hero = () => {
	return (
		<section id='hero'>
			<Container className='p-0'>
				<Row className='mx-3 px-0'>
					<Col xs={12} lg={8} className='px-0 pe-lg-2'>
						<Stack
							direction='vertical'
							gap={4}
							className=' mt-5 text-center text-md-start text-md-left align-items-center align-items-md-start pe-lg-5 justify-content-evenly'
						>
							<Row>
								<h4 className='h4 color-secondary fw-400 mb-0'>MEMBRESÍA</h4>
								<h1 className='h1 color-secondary fw-300'>
									<span className='fw-700'>CLUB</span> FARMALEAL
								</h1>
							</Row>
							<Row className='color-secondary'>
								<p className='fw-700 mb-0'>POR SÓLO</p>
								<Stack direction='horizontal' className='justify-content-center justify-content-md-start'>
									<h2 className='fw-700 price'>$1,200</h2>
									<h6 className='h6 fw-500 mb-0 ms-2'>AL AÑO</h6>
								</Stack>
							</Row>
							<Row>
								<p className='color-secondary fw-500 small text-uppercase'>
									Obtén descuentos de hasta 50% <br /> y{" "}
									<span className='fw-700'>grandes beneficios en medicamentos de enfermedades crónicas</span>
								</p>
							</Row>
							<Row className='d-flex justify-content-between w-100'>
								<Col xs={6}>
									<a href='#'>
										<Button size='sm' className='main-button  rounded-pill w-100 fw-500 py-3 border-0'>
											OBTENER MEMBRESÍA
										</Button>
									</a>
								</Col>
								<Col xs={6} className='ps-2 ps-md-3 my-auto'>
									<a href='#benefits'>
										<Button size='sm' className='bg-transparent btn-link ps-0 color-secondary'>
											<h6 className='fw-700 mb-0'>
												<u>VER BENEFICIOS</u>
											</h6>
										</Button>
									</a>
								</Col>
							</Row>
							<Row className='mt-2 align-items-center justify-items-center w-100'>
								<Stack direction={window.innerWidth <= 425 ? "vertical" : "horizontal"} className='justify-content-evenly '>
									{Items.map((element) => {
										return <HeroIcon key={element.label} {...element} />;
									})}
								</Stack>
							</Row>
						</Stack>
					</Col>
					<Col xs={12} lg={4} className='hero-top px-0 py-md-1 mt-md-5 pb-5 mb-5  pb-lg-1 mb-lg-1'>
						<div className='hero-image-container position-relative mx-auto'>
							<img src='images/heroImage2.png' className='w-100 rounded' />
							<img className='hero_image position-absolute ' src='images/tarjetas.png' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

import { Col, Container, Row, Stack } from "react-bootstrap";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const imgSrcs: string[] = ["visa", "mastercard", "american", "carnet"];

export const Footer = () => {
	return (
		<section id='footer' className='primary-bg px-1 px-md-5'>
			<Container fluid className='py-5'>
				<Row>
					<Col xs={12} md={6} className='text-center text-white text-md-start'>
						<h5 className='h5'>Contáctanos</h5>
						<p>
							Llamanos:
							<a target='_blank' href='tel:+01(55)31451948' className='text-decoration-none ms-2 fw-400 text-white'>
								<u>01 (55) 3145 1948</u>
							</a>
						</p>
						<p>
							Dirección:
							<a target='_blank' href='https://goo.gl/maps/8QMcNs6ck3NuJ4WD9' className='text-decoration-none ms-2 fw-400 text-white'>
								<u>Culiacán 123, piso 8, Col. Hipódromo, CDMX, 06100 1948</u>
							</a>
						</p>
						<p>
							E-mail:
							<br className='d-sm-none' />
							<a
								target='_blank'
								href='mailto:servicioalcliente@farmaleal.com.mx'
								className='text-decoration-none ms-0 ms-md-2  fw-400 text-white '
							>
								<u>servicioalcliente@farmaleal.com.mx</u>
							</a>
						</p>
						<p>
							Horarios:
							<span className='ms-2 fw-400 text-white'>Lun - Vie 9 AM a 8 PM</span>
						</p>
					</Col>
					<Col xs={12} md={6} className='text-center text-white text-md-end'>
						<h5 className='h5'>Políticas</h5>
						<p>
							<a target='_blank' href='#' className='text-decoration-none ms-2 fw-400 text-white'>
								Contáctanos
							</a>
						</p>
						<p>
							<a target='_blank' href='#' className='text-decoration-none ms-2 fw-400 text-white'>
								Preguntas frecuentes
							</a>
						</p>
						<p>
							<a target='_blank' href='#' className='text-decoration-none ms-2 fw-400 text-white'>
								Términos del servicio
							</a>
						</p>
						<p>
							<a target='_blank' href='#' className='text-decoration-none ms-2 fw-400 text-white'>
								Calcula tu envío
							</a>
						</p>
						<p>
							<a target='_blank' href='#' className='text-decoration-none ms-2 fw-400 text-white'>
								Aviso de privacidad
							</a>
						</p>
					</Col>
				</Row>
				<Row className='text-white '>
					<div className='w-75 mx-auto text-center'>
						<h5 className='h5'>Formas de pago seguro</h5>
						<Row>
							<Col xs={12} md={4} className='text-center text-white'>
								<h6 className='h6 fw-400 my-4'>Tarjetas de crédito</h6>
								<img src='/images/creditImages.png' className='mw-100 ' alt='credito' />
							</Col>
							<Col xs={12} md={8} className='text-center text-white'>
								<h6 className='h6 fw-400 my-4'>Tarjetas de débito</h6>
								<img src='/images/debitImages.png' className='mw-100' alt='debito' />
							</Col>
						</Row>
					</div>
				</Row>
			</Container>
		</section>
	);
};

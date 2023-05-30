import React from "react";
import { Stack } from "react-bootstrap";
import { BiDollarCircle } from "react-icons/bi";
import { TbPill, TbDiscount2, TbPhoneCall, TbTruckDelivery } from "react-icons/tb";
import { Tabla } from "./Tabla";
import { Link } from "react-router-dom";
const items = [
	{	
		link: "https://tdconsentido.mx/",
		icon: <TbPill size={"1.9rem"} />,
		label: "En tu primer compra mensual te regalamos un producto de nuestro catálogo de más de 300 medicamentos pensados para ti",
	},
	{
		link: "https://tdconsentido.mx/",
		icon: <TbDiscount2 size={"1.9rem"} />,
		label: "Miles de descuentos comerciales en nuestra RED TDC",
	},
	{
		link: "/entregas",
		icon: <TbTruckDelivery size={"1.9rem"} />,
		label: "Entrega nacional *",
		subText: "*Envíos gratis a CDMX. Resto del país a costo Neto de mensajería.",
	},
	{
		link: "/videoconsultas",
		icon: <TbPhoneCall size={"1.9rem"} />,
		label: "Videoconsultas con médicos 24/7",
	},
];

export const Benefits = () => {
	return (
		<section id='benefits' className='my-5 px-2 text-center color-primary'>
			<h1 className='h1 mb-4'>
				<b>Beneficios</b>
			</h1>

			<h5 className='h5 mb-5 pt-0'>
			<span className='membresia'>Te</span> <b>garantizamos</b> el mejor precio del mercado pero además,<br />tu membresía incluye sin costo adicional:
			</h5>

			<div className='row justify-content-center text-white'>
				{/* 
				<div className='col-12 col-md-12 mb-1'>
					<Stack direction='vertical' gap={3} className='h-100'>
						<div className='benefit-item h-100 d-flex secondary-bg'>
							<Stack className='my-4 justify-content-evenly align-items-center'>
								<BiDollarCircle size={"1.9rem"} />
								<p className='fw-500 h6'>Los medicamentos que requieras al precio más bajo GARANTIZADO</p>
							</Stack>
						</div>
					</Stack>
				</div>
				*/}

				<div className='row col-grid'>
					{items.map((element, i) => {
						return (
							<Link to={element.link} className='col p-3'>
								<Stack
									key={element.label}
									className={`${i % 3 === 0 ? "primary-bg" : "secondary-bg"} p-2 benefit-item hvr-underline-from-center h-100 d-flex justify-content-center`}
								>
									<Stack direction='horizontal' className='my-4 align-items-center justify-content-center'>
										{element.icon}
										<p className='fw-500 h6 ms-3  mb-0'>{element.label}</p>
									</Stack>

									{element.subText && <p className='small mx-auto'>{element.subText}</p>}
								</Stack>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};

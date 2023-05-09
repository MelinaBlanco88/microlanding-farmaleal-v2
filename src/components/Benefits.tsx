import React from "react";
import { Stack } from "react-bootstrap";
import { BiDollarCircle } from "react-icons/bi";
import { TbPill, TbDiscount2, TbPhoneCall, TbTruckDelivery } from "react-icons/tb";
const items = [
	{
		icon: <TbPill size={"1.9rem"} />,
		label: "1 producto gratis al mes del catálogo de productos gratuitos.*",
	},
	{
		icon: <TbDiscount2 size={"1.9rem"} />,
		label: "Descuentos en ropa, restaurantes, viajes, laboratorios, consultas médicas, ópticas, dentistas y ¡mucho más!",
	},
	{
		icon: <TbTruckDelivery size={"1.9rem"} />,
		label: "Entrega nacional *",
		subText: "*El costo de los envíos corre por cuenta del afiliado. Envíos a CDMX sin costo.",
	},
];

export const Benefits = () => {
	return (
		<section id='benefits' className='my-5 px-2 text-center color-primary'>
			<h5 className='h5 mb-5'>
				CON TU <b className='membresia'>MEMBRESÍA</b> PODRÁS ACCEDER A
			</h5>

			<div className='w-100 row g-3 m-0 justify-content-center align-items-stretch text-white'>
				<div className='left-side-container col-12 col-md-6 '>
					<Stack direction='vertical' gap={3} className='h-100'>
						<div className='benefit-item h-100 d-flex secondary-bg'>
							<Stack className='my-4 justify-content-evenly align-items-center'>
								<BiDollarCircle size={"1.9rem"} />
								<p className='fw-500 h6'>Los medicamentos que quieras, al precio más bajo</p>
							</Stack>
						</div>
						<div className='benefit-item h-100 primary-bg d-flex'>
							<Stack className='my-4 justify-content-evenly align-items-center'>
								<TbPhoneCall size={"1.9rem"} />

								<p className='fw-500 h6'>Videoconsultas con médicos 24/7</p>
							</Stack>
						</div>
					</Stack>
				</div>
				<div className='right-side-container col-12 col-md-6'>
					<Stack direction='vertical' gap={3}>
						{items.map((element, i) => {
							return (
								<Stack
									key={element.label}
									className={`${i % 2 === 0 ? "primary-bg" : "secondary-bg"} benefit-item w-100 d-flex justify-content-center`}
								>
									<Stack direction='horizontal' className='w-100 my-4 align-items-center justify-content-center'>
										{element.icon}
										<p className='fw-500 h6 ms-3  mb-0'>{element.label}</p>
									</Stack>

									{element.subText && <p className='small mx-auto'>{element.subText}</p>}
								</Stack>
							);
						})}
					</Stack>
				</div>
			</div>
		</section>
	);
};

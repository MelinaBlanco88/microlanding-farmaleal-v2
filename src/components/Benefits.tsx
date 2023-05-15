import React from "react";
import { Stack } from "react-bootstrap";
import { BiDollarCircle } from "react-icons/bi";
import { TbPill, TbDiscount2, TbPhoneCall, TbTruckDelivery } from "react-icons/tb";
const items = [
	{
		icon: <TbPill size={"1.9rem"} />,
		label: "Escoge un producto gratis al mes de nuestro catálogo de más de 300 medicamentos pensados para ti",
	},
	{
		icon: <TbDiscount2 size={"1.9rem"} />,
		label: "Descuentos en ropa, restaurantes, viajes, laboratorios, consultas médicas, ópticas, dentistas y ¡mucho más!",
	},
	{
		icon: <TbTruckDelivery size={"1.9rem"} />,
		label: "Entrega nacional *",
		subText: "*Envíos a CDMX sin costo. El costo de los envíos corre por cuenta del afiliado. ",
	},
	{
		icon: <TbPhoneCall size={"1.9rem"} />,
		label: "Videoconsultas con médicos 24/7",
	},
];

export const Benefits = () => {
	return (
		<section id='benefits' className='my-5 px-2 text-center color-primary'>
			<h5 className='h5 mb-5'>
				CON TU <b className='membresia'>MEMBRESÍA</b> PODRÁS ACCEDER A
			</h5>

			<div className='row justify-content-center text-white'>
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
					<div className='row col-grid'>
						{items.map((element, i) => {
							return (
								<div className='col p-1'>
									<Stack
										key={element.label}
										className={`${i % 3 === 0 ? "primary-bg" : "secondary-bg"} benefit-item h-100 d-flex justify-content-center`}
									>
										<Stack direction='horizontal' className='my-4 align-items-center justify-content-center'>
											{element.icon}
											<p className='fw-500 h6 ms-3  mb-0'>{element.label}</p>
										</Stack>

										{element.subText && <p className='small mx-auto'>{element.subText}</p>}
									</Stack>
								</div>
							);
						})}
					</div>
			</div>
		</section>
	);
};

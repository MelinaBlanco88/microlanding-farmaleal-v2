import { Button, Stack } from "react-bootstrap";

export const Pricing = () => {
	return (
		<section id='pricing' className='secondary-bg text-white px-5 py-5 mb-5'>
			<Stack direction='vertical' className='w-100 text-center'>
				<h6 className='fw-400'>SÓLO</h6>
				<h1>
					<b>$1,200 al año</b>
				</h1>
				<p>
					¡12 meses sin intereses!
				</p>
				<a href='#'>
					<Button size='sm' className='main-button  rounded-pill w-100 fw-500 py-3 px-4 border-0'>
						OBTENER MEMBRESÍA
					</Button>
				</a>
			</Stack>
		</section>
	);
};

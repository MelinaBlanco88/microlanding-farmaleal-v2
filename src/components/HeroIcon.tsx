import React from "react";
import { Stack } from "react-bootstrap";
interface Props {
	icon: JSX.Element;
	label: string;
}
export const HeroIcon = ({ icon, label }: Props) => {
	return (
		<div className='w-100 d-flex justify-content-center'>
			<Stack className='hero-icon color-primary align-items-center'>
				{icon}
				<p className='color-secondary fw-600 text-center'>{label}</p>
			</Stack>
		</div>
	);
};

import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import FlightsContext from '../../FlightsContext';
import planeIcon from '../../assets/icons/icon_plane.svg';
import './FlightsItem.css';

const FlightsItem = ({
	aviacompany,
	duration,
	from_city,
	to_city,
	start,
	end,
	price,
	adults,
	children,
}) => {
	const { code_city_maker, getDateHours, durationMaker, priceSum } =
		useContext(FlightsContext);

	const fromCityCodeRef = useRef(null);

	return (
		<div className='flightsItem__inner'>
			<div className='flightsItem__times flightsItem__inner-element'>
				<p className='flightsItem__time sub-title'>
					<span className='caption-text' ref={fromCityCodeRef}>
						{code_city_maker(from_city)}
					</span>
					{getDateHours(new Date(start))}
				</p>
				<img src={planeIcon} alt='icon of the plane' />
				<p className='flightsItem__time sub-title'>
					<span className='caption-text'>{code_city_maker(to_city)}</span>
					{getDateHours(new Date(end))}
				</p>
			</div>

			<p className='flightsItem__way caption-text flightsItem__inner-element'>
				{durationMaker(duration)}
			</p>

			<div className='flightsItem__airlines flightsItem__inner-element'>
				<p className='flightsItem__airline'>{aviacompany}</p>
			</div>

			<p className='flightsItem__price flightsItem__inner-element'>{`${priceSum(
				price,
				adults,
				children
			)
				.toFixed(2)
				.replace(/\d(\d{3})+\)/g, '$& ')}$`}</p>

			<Link
				className='fligthsItem-btn caption-text flightsItem__inner-element'
				to='/passengers'>
				Choose flight
			</Link>
		</div>
	);
};

export default FlightsItem;

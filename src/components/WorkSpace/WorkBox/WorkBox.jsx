import React from 'react';
import './WorkBox.css';

export default function WorkBox(props) {
	return (
		<div className='sub-header__workbox'>
			<h3>{props.type}</h3>
		</div>
	);
}

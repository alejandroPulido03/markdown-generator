import React from 'react';
import WorkBox from '../WorkBox/WorkBox';

export default function MarkDownView(props) {
	return (
		<section className='workSpace-container'>
			<WorkBox type='Preview' />
			<div className='workSpace-preview__container'>{props.userText}</div>
		</section>
	);
}

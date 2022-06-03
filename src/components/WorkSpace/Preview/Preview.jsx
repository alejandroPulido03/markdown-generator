import React from 'react';
import WorkBox from '../WorkBox/WorkBox';

export default function Preview(props) {
	return (
		<section className='workSpace-container'>
			<WorkBox
				type='Preview'
				setIsPreview={props.setIsPreview}
				isPreview={props.isPreview}
			/>
			Lorem ipsum
		</section>
	);
}

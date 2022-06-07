import React from 'react';
import markDownToHtml from '../../../utils/read-text-to-md';
import WorkBox from '../WorkBox/WorkBox';
import './MarkDownView.css';

export default function MarkDownView(props) {
	return (
		<section className='workSpace-container'>
			<WorkBox type='Preview' />
			<div
				className='workSpace-preview__container mdFormat'
				dangerouslySetInnerHTML={{
					__html: markDownToHtml(props.userText),
				}}
			></div>
		</section>
	);
}

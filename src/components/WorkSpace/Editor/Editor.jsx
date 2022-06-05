import React from 'react';
import WorkBox from '../WorkBox/WorkBox';
import './Editor.css';
export default function Editor(props) {
	const handleText = e => {
		props.setUserText(e.target.value);
	};

	return (
		<section
			className={`workSpace-container ${
				props.isHidden ? 'workSpace-container-hidden' : ''
			}`}
		>
			<WorkBox type='Markdown' />
			<div className='workSpace-editor__container'>
				<textarea
					className='workSpace-editor__textArea'
					value={props.userText}
					onChange={handleText}
				></textarea>
			</div>
		</section>
	);
}

import React from 'react';
import './FileName.css';

export default function FileName(props) {
	return (
		<div className={`new-file-name__wrapper ${props.customClasses}`}>
			<span className='new-file-name__icon'></span>
			<label htmlFor='new-file-name' className='new-file-name__label'>
				{props.date ?? 'New Document'}
			</label>
			<div className='new-file-input__wrapper'>
				<input
					className='new-file-name__input'
					placeholder={props.value ?? 'Untitled.md'}
					id='new-file-name'
					disabled={props.disabled ?? false}
				/>
				<span></span>
			</div>
		</div>
	);
}

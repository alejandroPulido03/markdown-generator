import React from 'react';
import FileName from '../FileName/FileName';
import './Navigator.css';

export default function Navigator() {
	return (
		<div className='app-nav__container'>
			<div className='mainly-nav__container'>
				<h1 className='app-title Navigator-app__title'>Markdown</h1>
				<FileName
					customClasses={'new-file-name__wrapper_nav'}
				></FileName>
			</div>

			<div className='file-managing-btns__wrapper'>
				<button className='file-managing-btns__delete'></button>
				<button className='file-managing-btns__save'>
					<span className='file-managing-btns__save-icon'></span>
					<span className='file-managing-btns__save-text'>
						Save Changes
					</span>
				</button>
			</div>
		</div>
	);
}

import React from 'react';
import Drawer from '../DrawerComponent/Drawer.jsx';
import './Navigator.css';

export default function Navigator() {
	return (
		<div className='app-nav__container'>
			<div className='mainly-nav__container'>
				<Drawer></Drawer>
				<h1 className='app-title Navigator-app__title'>Markdown</h1>
				<div className='new-file-name__wrapper'>
					<span className='new-file-name__icon'></span>
					<label
						htmlFor='new-file-name'
						className='new-file-name__label'
					>
						Document Name
					</label>
					<div className='new-file-input__wrapper'>
						<input
							className='new-file-name__input'
							placeholder='Untitled.md'
							id='new-file-name'
						/>
						<span></span>
					</div>
				</div>
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

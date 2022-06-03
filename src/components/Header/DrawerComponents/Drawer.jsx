import React, { useState } from 'react';
import FileName from '../FileName/FileName';
import './Drawer.css';
import './DrawerMenu.css';

export default function Drawer() {
	const [isActive, setIsActive] = useState(false);

	const toogleDrawer = () => {
		setIsActive(!isActive);
	};

	return (
		<div
			className={`drawer-menu__btn ${
				isActive ? 'drawer-menu__btn__active' : ''
			}`}
		>
			<span
				className={`drawer-menu__btn-icon ${
					isActive ? 'drawer-menu__btn-icon-active' : ''
				}`}
				onClick={toogleDrawer}
			></span>
			<DrawerMenu />
		</div>
	);
}

function DrawerMenu() {
	const [isToogleDarkMode, setIsToogleDarkMode] = useState(false);

	const setDarkMode = () => {
		document.documentElement.classList.toggle('dark');
		setIsToogleDarkMode(!isToogleDarkMode);
	};
	return (
		<div className='drawer-menu__container'>
			<h1 className='app-title '>Markdown</h1> {/*Drawer-app__title*/}
			<h2 className='drawer-menu__title'>My documents</h2>
			<button className='file-managing-btns__save file-menu__new'>
				+ New Document
			</button>
			<ul className='drawer-file__list'>
				<li>
					<FileName
						customClasses={'new-file-name__wrapper_drawer'}
						disabled={true}
						value='Hola'
						date='Today'
					></FileName>
				</li>
				<li>
					<FileName
						customClasses={'new-file-name__wrapper_drawer'}
						disabled={true}
						value='Hola'
						date='01 Abril 2020'
					></FileName>
				</li>
				<li>
					<FileName
						customClasses={'new-file-name__wrapper_drawer'}
						disabled={true}
						value='Hola'
						date='01 Abril 2020'
					></FileName>
				</li>
				<li>
					<FileName
						customClasses={'new-file-name__wrapper_drawer'}
						disabled={true}
						value='Hola'
						date='01 Abril 2020'
					></FileName>
				</li>
				<li>
					<FileName
						customClasses={'new-file-name__wrapper_drawer'}
						disabled={true}
						value='Hola'
						date='01 Abril 2020'
					></FileName>
				</li>
				<li>
					<FileName
						customClasses={'new-file-name__wrapper_drawer'}
						disabled={true}
						value='Hola'
						date='01 Abril 2020'
					></FileName>
				</li>
				<li>
					<FileName
						customClasses={'new-file-name__wrapper_drawer'}
						disabled={true}
						value='Hola'
						date='01 Abril 2020'
					></FileName>
				</li>
				<li>
					<FileName
						customClasses={'new-file-name__wrapper_drawer'}
						disabled={true}
						value='Hola'
						date='01 Abril 2020'
					></FileName>
				</li>
				<li>
					<FileName
						customClasses={'new-file-name__wrapper_drawer'}
						disabled={true}
						value='Hola'
						date='01 Abril 2020'
					></FileName>
				</li>
			</ul>
			<div className='darkMode-btn__wrapper'>
				<span
					className={`darkMode-icon darkMode-icon__light ${
						isToogleDarkMode ? 'darkMode-icon__light__inactive' : ''
					}`}
				></span>
				<button
					className={`darkMode-toogle__track ${
						isToogleDarkMode ? 'darkMode-toogle__track-active' : ''
					}`}
					onClick={setDarkMode}
				>
					<span
						className={`darkMode-toogle__thumb ${
							isToogleDarkMode
								? 'darkMode-toogle__thumb-active'
								: ''
						}`}
					></span>
				</button>
				<span className='darkMode-icon darkMode-icon__dark'></span>
			</div>
		</div>
	);
}

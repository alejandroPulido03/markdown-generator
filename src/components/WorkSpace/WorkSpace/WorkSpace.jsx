import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import '../WorkBox/WorkBox.css';
import './WorkSpace.css';
export default function WorkSpace() {
	const [isPreview, setIsPreview] = useState(false);
	return (
		<main>
			<Editor isHidden={isPreview}></Editor>
			<Preview
				setIsPreview={val => setIsPreview(val)}
				isPreview={isPreview}
			></Preview>

			<button
				className={`sub-header__workbox-icon ${
					!isPreview || 'sub-header__workbox-icon-active'
				}`}
				onClick={() => setIsPreview(!isPreview)}
			></button>
		</main>
	);
}

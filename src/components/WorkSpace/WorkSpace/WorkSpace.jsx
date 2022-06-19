import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import Preview from '../MarkDownView/MarkDownView';
import '../WorkBox/WorkBox.css';
import './WorkSpace.css';
export default function WorkSpace() {
	const [isPreview, setIsPreview] = useState(false);
	const [userText, setUserText] = useState('');

	return (
		<main>
			<Editor
				isHidden={isPreview}
				setUserText={setUserText}
				userText={userText}
			></Editor>
			<Preview
				setIsPreview={val => setIsPreview(val)}
				isPreview={isPreview}
				userText={userText}
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

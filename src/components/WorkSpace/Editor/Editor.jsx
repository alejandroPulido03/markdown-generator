import React from 'react';
import WorkBox from '../WorkBox/WorkBox';
export default function Editor(props) {
	return (
		<section
			className={`workSpace-container ${
				props.isHidden ? 'workSpace-container-hidden' : ''
			}`}
		>
			<WorkBox type='Markdown' />; Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Aspernatur autem quidem culpa laborum ipsa totam
			tenetur enim debitis corporis eius, reiciendis vero pariatur ut,
			fugiat sint perferendis necessitatibus dignissimos labore.
		</section>
	);
}

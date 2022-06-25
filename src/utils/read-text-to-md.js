export default function markDownToHtml(text) {
	const htmlLines = [];

	text.split('\n').forEach((line, lineIndex) => {
		let formatedText = line;

		formatedText = formatHr(formatedText);
		formatedText = formatLists(formatedText);
		formatedText = formatTextDecorations(formatedText);
		formatedText = formatBlockquote(formatedText);
		formatedText = formatLinks(formatedText);
		formatedText = formatTitles(formatedText);
		formatedText = formatCodeBlock(formatedText);
		formatedText = formatLinesTitle(
			formatedText,
			lineIndex < text.split('\n').length
				? text.split('\n')[lineIndex + 1]
				: null
		);

		if (formatedText === line) {
			formatedText = formatedText.concat('</br>');
		}

		htmlLines.push(formatedText);
	});
	return htmlLines.join('');
}

function formatLinks(formatedText) {
	const expression =
		(formatedText.match(/!\[.+\]\(\S+\)/g)
			? formatedText.match(/!\[.+\]\(\S+\)/g)[0]
			: null) ||
		(formatedText.match(/\[.+\]\(\S+\)/g)
			? formatedText.match(/\[.+\]\(\S+\)/g)[0]
			: null) ||
		null;
	if (expression) {
		const exp_text = expression.slice(
			expression.indexOf('[') + 1,
			expression.indexOf(']')
		);
		const exp_link = expression.slice(
			expression.indexOf('(') + 1,
			expression.indexOf(')')
		);

		const image = `<img src="${exp_link}" alt="${exp_text}" title="${exp_text}"/>`;
		const link = `<a href="${exp_link}">${exp_text}</a>`;

		formatedText = expression[0] == '!' ? image : link;
	}
	return formatedText;
}

function formatHr(formatedText) {
	if (formatedText === '___' || formatedText === '***') {
		console.log(formatedText);
		formatedText = '<hr>';
	}
	return formatedText;
}

function formatLists(formatedText) {
	if (formatedText.slice(0, 2).match(/- |\* |\+ /)) {
		formatedText = `<li style="margin-left: ${
			1 * (formatedText.match(/- |\* |\+ /g) || []).length * 10
		}px;">${formatedText.replace(/- |\* |\+ /g, '')}</li>`;
	}
	if (formatedText.slice(0, 5).match(/-\[[xX]\] |-\[\] /)) {
		formatedText = `<input type='checkbox' class='checkbox' onclick=(false) ${
			formatedText[2] !== ']' ? 'checked' : ''
		}> ${formatedText.slice(4)}`;
	}
	return formatedText.concat('</br>');
}

function formatLinesTitle(formatedText, textAfter) {
	const titles = {
		'=': '# ',
		'-': '## ',
	};
	const text = [...new Set(textAfter)].join('');
	const flag = [...new Set(formatedText)].join('');
	if (textAfter && titles[text]) {
		formatedText = formatTitles(titles[text] + formatedText);
	} else if (titles[flag]) {
		formatedText = '';
	}
	return formatedText;
}

let isOpenCodeBlock = false;
function formatCodeBlock(formatedText) {
	if (formatedText === '```') {
		if (!isOpenCodeBlock) {
			formatedText = "<code class='CodeBlock'><xmp>";
			isOpenCodeBlock = true;
		} else {
			formatedText = '</xmp></code>';
			isOpenCodeBlock = false;
		}
	}
	if (isOpenCodeBlock) {
		formatedText = formatedText.concat('\n');
	}
	return formatedText;
}

function formatBlockquote(formatedText) {
	const word = formatedText.split(' ');
	if (word[0][0] === '>') {
		formatedText = formatedText.replace(/>/g, "<div class='blockquote'> ");
		return formatedText.concat(
			' </div>'.repeat((formatedText.match(/>/g) || []).length)
		);
	} else {
		return formatedText;
	}
}

function formatTitles(formatedText) {
	const titleTagIndex = Math.max(
		formatedText.indexOf('#', formatedText.indexOf('>')),
		formatedText.indexOf('#')
	);
	if (titleTagIndex >= 0) {
		if (
			titleTagIndex + 1 < formatedText.length &&
			(formatedText[titleTagIndex + 1] === ' ' ||
				formatedText[titleTagIndex + 1] === '#')
		) {
			const value = formatedText.slice(titleTagIndex).split(' ');
			formatedText = `${formatedText.slice(
				0,
				titleTagIndex
			)} <h${Math.min(value[0].length, 6)}> ${value
				.slice(1)
				.join(' ')} </h${Math.min(value[0].length)}>`;
		}
	}
	return formatedText;
}

function formatTextDecorations(formatedText) {
	const highlight_text = {
		'`': ['<code><xmp> ', ' </xmp></code>'],
		'**': ['<strong> ', ' </strong>'],
		'*': ['<em> ', ' </em>'],
		_: ['<u> ', ' </u>'],
		'~~': ['<del> ', ' </del>'],
	};
	for (let key in highlight_text) {
		if ((formatedText.split(key).length - 1) % 2 === 0) {
			for (let i = 0; i < formatedText.split(key).length; i += 2) {
				formatedText = formatedText
					.replace(key, highlight_text[key][0])
					.replace(key, highlight_text[key][1]);
			}
		}
	}
	return formatedText;
}

/* 


TODO: Improve the transition when the editor is resized
TODO: Save the text in the editor when the user clicks on the save button
TODO: Improve the blockquotes
*/

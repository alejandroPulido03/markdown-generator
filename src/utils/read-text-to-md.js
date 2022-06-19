export default function markDownToHtml(text) {
	const htmlLines = [];

	text.split('\n').forEach(line => {
		let formatedText = line;

		formatedText = formatTextDecorations(formatedText);
		formatedText = formatBlockquote(formatedText);
		formatedText = formatTitles(formatedText);

		htmlLines.push(formatedText);
	});
	return htmlLines.join('');
}

function formatBlockquote(formatedText) {
	const word = formatedText.split(' ');
	if (word[0][0] === '>') {
		formatedText = formatedText.replace(/>/g, "<div class='blockquote'> ");
		return formatedText.concat(
			' </div>'.repeat((formatedText.match(/>/g) || []).length)
		);
	} else {
		return formatedText.concat('</br>');
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
			formatedText = `${formatedText.slice(0, titleTagIndex)} <h${
				value[0].length
			}> ${value.slice(1).join(' ')} </h${value[0].length}>`;
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

TODO: Dont show blocks of code with the ` character
TODO: Improve the transition when the editor is resized
TODO: Save the text in the editor when the user clicks on the save button


===============	= h1
--------------- = h2


- = <ul>
+ = <ul>
* = <ul>
[] = <input type="checkbox">
[x] = <input type="checkbox" checked>
1. = <ol>
\t - = <ul><ul>
\t 1. = <ol><ol>
`` = <code>
--- = <hr>
*** = <hr>
___ = <hr>

[link](url) = <a href="url">link</a>
<url> = <a src="url">
![alt text](url) = <img alt="alt text" src="url">

|a| b |
|--|--|
| b |b  | = <table>

\ = escaping


https://www.markdownguide.org/cheat-sheet/ = markdown cheat sheet







*/

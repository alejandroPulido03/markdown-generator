export default function markDownToHtml(text) {
	const htmlLines = [];
	const highlight_text = {
		'**': ['<strong>', '</strong>'],
		'*': ['<em>', '</em>'],
		_: ['<u>', '</u>'],
		'`': ['<code><xmp>', '</xmp></code>'],
		'~~': ['<del>', '</del>'],
	};

	text.split('\n').forEach(line => {
		let formatedText = line;
		let word = line.split(' ');
		if (word[0][0] === '#') {
			formatedText = `<h${word[0].length}>${word.splice(1).join(' ')}</h${
				word[0].length
			}>`;
		} else if (
			word[0][0] === '*' ||
			word[0][0] === '_' ||
			word[0][0] === '-'
		) {
			formatedText = `<li>${word.splice(1).join(' ')}</li>`;
		}

		for (let key in highlight_text) {
			if ((formatedText.split(key).length - 1) % 2 === 0) {
				for (let i = 0; i < formatedText.split(key).length; i += 2) {
					console.log(formatedText.split(key), key);
					formatedText = formatedText
						.replace(key, highlight_text[key][0])
						.replace(key, highlight_text[key][1]);
				}
			}
		}

		htmlLines.push(formatedText);
	});
	return htmlLines.join('<br>');
}

/* 
Use a object to store the markdown text

# = h1
## = h2
### = h3
#### = h4
##### = h5
###### = h6
===============	= h1
--------------- = h2
\n = <br>
**word** = <strong>
__word__ = <strong>
*word* = <em>
_word_ = <em>
***word*** = <strong><em>
___word___ = <strong><em>
~~word~~ = <del>

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
> = blockquote
>> = nested blockquote

https://www.markdownguide.org/cheat-sheet/ = markdown cheat sheet







*/

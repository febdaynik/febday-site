import '../styles/App.css';
import TextTyper from './TextTyper';

const textToRender = `/**
 *
 * Hey. My name's Samuel Reed. I'm a co-founder of BitMEX and frequent
 * open source contributor.
 *
 * I build interactive websites.
 *
 * How about some live coding?
 */

/**
 * Let's begin. We start by animating... well, everything.
 */

* {
	transition: all 1s;
}

/**
 * That didn't do much. But you'll see.
 *
 * Black on white is really boring,
 * so let's do something about it.
 */

html {
	background: rgb(63, 82, 99);
}

/***
 * Hold on...
 */

pre, a {
	color: white;
}

/**
 * That's better. Sorry about your eyes.
 *
 * Working in this big empty space is tough.
 *
 * I'm going to make a nice area for us to work in.
 */

pre:not(:empty) {
	overflow: auto;
	background: rgb(48, 48, 48);
	border: 1px solid #ccc;
	max-height: 45vh;
	width: 49%;
	font-size: 14px;
	font-family: monospace;
	padding: 1vh 0.5vw;
	box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
	white-space: pre-wrap;
	outline: 0;
	margin: 1vh 0.5vw;
}

/**
 * Okay. We're going to start filling up the screen.
 * Let's get ready to do some work.
 */

#style-text {
	transform: translateX(95%);
	position: absolute;
}

/**
 * This is good, but all the text is white!
 * Let's make it even more readable.
 */

.comment       { color: #857F6B; font-style: italic; }
.selector      { color: #E69F0F; }
.selector .key { color: #64D5EA; }
.key           { color: #64D5EA; }
.value         { color: #BE84F2; }
.value.px      { color: #F92772; }

/**
 * Now we're getting somewhere.
 * Time to get a little perspective.
 */

body {
	perspective: 1000px;
}

#style-text {
	transform: translateX(98.5%) rotateY(-10deg);
	transform-origin: right;
	max-height: 93.1vh;
}

/**
 * So, let's talk projects. That's why you're here, right?
 * I can't imagine you'd come just to see the pretty colors.
 */

pre:not(#style-text) {
	transform: rotateY(10deg);
	transform-origin: left;
}


/**
 * That markdown on the left doesn't look great. Let's render it.
 */

#work-text.flipped {
	transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);
}

#work-text .md {
	transform: rotateY(190deg) rotateZ(180deg);
	margin-top: 800px;
}

/**
 * Alright. We're ready.
 *
 * 3...
 * 2...
 * 1...
 *
 * .
 * ....faked you out.
 *
 * Okay here we go!
 *
 */


/**
 * The text could use some tweaks.
 */

.md {
	font-family: "Helvetica Neue", Helvetica, sans-serif;
}

.md h1, .md h2, .md h3, .md h4, .md h5, .md h6 {
	display: inline-block;
	color: #ddd;
	border-bottom: 1px solid #ccc;
	padding-bottom: 5px;
}

.md li {
	margin: 5px 0;
}

.md h1, .md h2, .md h3, .md h4, .md h5, .md h6, .md ul, .md p {
	margin: 0px;
}

/**
 * That's better.
 *
 * If you want to contact me, use the PGP keys on the left.
 *
 * You know, if you're into that sort of thing.
 */

#pgp-text {
	font-size: 12px;
	color: #ada;
}


/**
 * We're almost done.
 */

 pre:hover{
	 box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
 }

 #skip-animation, #pause-resume {
	 display: none;
 }

/**
 * I hope you enjoyed this.
 *
 * Thanks to Jake Albaugh, who was the first (that I know of) to do
 * a page like this. Some of the autotyping and syntax highlighting
 * code is based off his work.
 *
 * See more of Jake's work at http://codepen.io/jakealbaugh/
 */

/**
 * By the way, you can edit this box. Try adding new CSS!
 *
 * For example,
 *
 * The property 'text-shadow' takes the parameters:
 * 'x', 'y', 'blur', 'color'.
 *
 * So if I wanted to mirror the values,
 * I could place a shadow 15px under it,
 * with a little blur for effect:
 */

.value {
	text-shadow: 0px 15px 1px white;
}

/**
 * Try it out! There's lots you can do.
 * Try playing with text sizes, shadows, animations, or just
 * break the page. I won't hold it against you.
 */

`

function App() {
	return (
		<div className="App">
			<TextTyper text={textToRender} interval={50} Markup={"pre"} />
		</div>
	);
}

export default App;

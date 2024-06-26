import React, { useState, useEffect } from "react";

const TextTyper=({
	text = "",
	interval = 100,
	Markup = "span"
}) => {
	const [typedText, setTypedText] = useState("");

	const typingRender = (text, updater, interval) => {
	let localTypingIndex = 0;
	let localTyping = "";
	if (text) {
		let printer = setInterval(() => {
		if (localTypingIndex < text.length) {
			updater((localTyping += text[localTypingIndex]));
			localTypingIndex += 1;
		} else {
			localTypingIndex = 0;
			localTyping = "";
			clearInterval(printer);
		}
		}, interval);
	}
	};
	useEffect(() => {
		typingRender(text, setTypedText, interval);
	}, [text, interval]);

	return (
		<>
			<Markup id="style-text">{typedText}</Markup>
			<style>{typedText}</style>
		</>
	)
}

export default TextTyper
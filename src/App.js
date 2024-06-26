import './App.css';
import TextTyper from './TextTyper';

const textToRender = 'Hello world. My name Nikolay, i`am fullstack developer 😁'

function App() {
	return (
		<div className="App">
			<TextTyper text={textToRender} interval={50} Markup={"code"} />
		</div>
	);
}

export default App;

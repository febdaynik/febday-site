import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const ExampleComponent = () => {
	const [textColor, setTextColor] = useState('red');
	const classBlock = 'wth-class'

	return (
	  <>
		<div
		  className="w-full bg-blue-400/10 p-3 rounded-lg text-[1.75rem]"
		  style={{
			color: textColor,
			fontSize: '35px',
			display: 'inline-block',
		  }}
		>
		  <TypeAnimation
		  	cursor={false}
		  	className={classBlock}
			sequence={[
			  'One',
			  800,
			  () => setTextColor('aqua'),
			  'One Two',
			  800,
			  () => setTextColor('deeppink'),
			  'One Two Three',
			  1000,
			  () => setTextColor('darkkhaki'),
			  '',
			]}
			repeat={Infinity}
		  />
		</div>
		<button
		  onClick={() => {
			const items = [
			  'blue',
			  'green',
			  'purple',
			  'pink',
			  'brown',
			  'darkmagenta',
			  'darksalmon',
			  'dodgerblue',
			  'firebrick',
			  'darkviolet',
			];
			setTextColor(items[Math.floor(Math.random() * items.length)]);
		  }}
		  className="border rounded-lg bg-gray-100 dark:bg-gray-800 dark:border-gray-700 p-3 mt-3"
		>
		  Change Color
		</button>
	  </>
	);
};

export default ExampleComponent
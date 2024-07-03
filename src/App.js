import './styles/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Menu from './components/Menu/menu';
import DesktopPage from './components/Desktop/desktopPage';
import Botofolio from './components/Work/botofolio';
import Contact from './components/Contact/contact';
import About from './components/About/about';
import DefaultExplorerComponent from './components/Desktop/DesktopPanel/default';
import TrashComponent from './components/Desktop/DesktopPanel/trash';


const router = createBrowserRouter([
	{
	  path: "/",
	  children: [
		{
			path: "/",
			Component: Menu,
		},
		{
		  path: "desktop",
		  Component: DesktopPage,
		  children: [
			{
				path: "",
				Component: DefaultExplorerComponent,
			},
			{
				path: "botofolio",
				Component: Botofolio,
			},
			{
				path: "contact",
				Component: Contact,
			},
			{
				path: "about",
				Component: About,
			},
			{
				path: "trash",
				Component: TrashComponent,
			}
		  ]
		},
	  ],
	},
  ]);


function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

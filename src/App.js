import './styles/App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Menu from './components/Menu/menu';
import DesktopPage from './components/Desktop/desktopPage';
import Botofolio from './components/Work/botofolio';
import ContactMd from './components/Contact/contact.md';
import AboutMd from './components/About/about.md';
import DefaultExplorerComponent from './components/DefaultDesktop/default';
import TrashComponent from './components/Desktop/DesktopPanel/trash';
import MarkdownComponent from './components/MarkdownParser/markdown';


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
				element: <MarkdownComponent path_file={ContactMd} />,
			},
			{
				path: "about",
				element: <MarkdownComponent path_file={AboutMd}/>,
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

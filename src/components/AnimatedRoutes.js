import Menu from './Menu/menu'
import Botofolio from './DesktopPage/botofolio';
import About from './DesktopPage/about';
import Contact from './DesktopPage/contact';
import {
	Routes, 
	Route,
	useLocation
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


export default function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Menu />} />
				<Route path='/botofolio' element={<Botofolio />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
}
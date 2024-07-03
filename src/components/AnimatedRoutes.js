import {
	Routes, 
	Route,
	useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Menu from './Menu/menu';
import DesktopPage from './Desktop/desktopPage';


export default function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Menu />} />
				<Route path='/desktop/botofolio' element={<DesktopPage path='botofolio' />} />
				<Route path='/desktop/about' element={<DesktopPage path='about' />} />
				<Route path='/desktop/contact' element={<DesktopPage path='contact' />} />
				<Route path='/desktop' element={<DesktopPage path='desktop' />} />
			</Routes>
		</AnimatePresence>
	);
}
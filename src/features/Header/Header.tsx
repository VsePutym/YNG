import style from '@Styles/Header.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../Hooks/Hooks.ts'
import { setMenuOpen } from '../../Stores/yngSlice.ts'

const Header = () => {
	const dispatch = useAppDispatch();
	
	return (
			<div className={style.container}>
				<Link to='home'><h2>YNGЯНГ</h2></Link>
				<MenuIcon fontSize="large" color="primary" onClick={() => dispatch(setMenuOpen()) } />
		</div>
	)
}

export default Header
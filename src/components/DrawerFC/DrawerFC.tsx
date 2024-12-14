import { Drawer } from '@mui/material'
import style from '@Styles/Drawer.module.scss'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../Hooks/Hooks.ts'
import { selectorMenuOpen } from '../../Selectors/selectorsYng.ts'
import { setMenuOpen } from '../../Stores/yngSlice.ts'
import foodImg from '@Img/ImgFood/2.png'
import Divider from '@mui/material/Divider'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import InstagramIcon from '@mui/icons-material/Instagram'


const DrawerFC = () => {
	const dispatch = useAppDispatch()
	const selectorOpenMenu = useAppSelector(selectorMenuOpen)
	
	const MenuHeader = [
		{ id: 0, name: 'ЗАВТРАКИ', href: '/home' },
		{ id: 1, name: 'ЗАКУСКИ', href: '/Laptop' },
		{ id: 2, name: 'ХОЛОДНЫЕ БЛЮДА', href: '/Apple' },
		{ id: 3, name: 'ГОРЯЧИЕ БЛЮДА', href: '/Samsung' },
		{ id: 4, name: 'ДЕСЕРТЫ', href: '/Xiaomi' },
		{ id: 5, name: 'НАПИТКИ', href: '/AnotherDevice' },
		{ id: 6, name: 'КОНТАКТЫ', href: '/Contacts' }
	]
	
	return (
		<Drawer anchor='right' onClose={() => dispatch(setMenuOpen())} open={selectorOpenMenu}
		        sx={{ width: '100%', maxWidth: '200px' }}>
			<div className={style.wrapperDrawer}>
				<ul className={style.container}>
					{MenuHeader.map((item) => (
						<Link to={item.href} className={style.itemLi} key={item.id}>
							<p style={{ fontWeight: 500, color: '#2c3037' }}>{item.name}</p>
							<Divider component='li' />
						</Link>
					))}
				</ul>
				<img className={style.imgBg} src={foodImg} alt='food' />
			<div className={style.wrapperInfo}>
				<div className={style.textOpen}>
					<AccessTimeIcon  />
					<p>открыты с 10:00 до 22:00</p>
				</div>
				<div className={style.instagram}>
					<InstagramIcon />
					<a href='https://www.instagram.com/'>Instagram</a>
				</div>
			</div>
			</div>
		</Drawer>
	)
}

export default DrawerFC
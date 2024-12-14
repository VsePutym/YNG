import BG from '@Img/BG4.jpg'
import { Parallax } from 'react-parallax'
import style from '@Styles/Main.module.scss'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CallIcon from '@mui/icons-material/Call'
import InstagramIcon from '@mui/icons-material/Instagram'

const Main = () => {
	return (
		<div className={style.container}>
			<div className={style.wrapperBG}>
				<Parallax
					bgImage={BG}
					bgImageAlt='BG'
					strength={800}
					bgImageStyle={{
						objectFit: 'cover', // Обеспечиваем сохранение пропорций
						width: '100%'
					}}
				>
					<div className={style.textOpen}>
						<AccessTimeIcon fontSize='large' />
						<p>открыты с 10:00 до 22:00</p>
					</div>
					<div className={style.textPhone}>
						<CallIcon fontSize='large' />
						<a href='tel:+7 (777) 777-77-77' type='tel'>+ 7 (777) 777-77-77</a>
					</div>
					<div className={style.instagram}>
						<InstagramIcon />
						<a href='https://www.instagram.com/'>Instagram</a>
					</div>
					<div className={style.BGS} />
					<h1 className={style.title}>YNGЯНГ</h1>
				</Parallax>
			</div>
		</div>
	)
}

export default Main
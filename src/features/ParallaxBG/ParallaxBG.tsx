import BG2 from '@Img/gs4.jpg'
import { Parallax } from 'react-parallax'
import style from '@Styles/ParallaxBG.module.scss'
const ParallaxBG = () => {
	return(
		<div className={style.container}>
			<Parallax
				bgImage={BG2}
				bgImageAlt="BG"
				strength={600}
				bgClassName={style.testing}>
				<p>YNG FOOD</p>
				<div className={style.BG} />
			</Parallax>

		</div>
	)
}

export default ParallaxBG
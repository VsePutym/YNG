import style from '@Styles/Fish.module.scss'
import FishImg from '@Img/ImgFood/44.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
const Fish = () => {
	return (
		<div className={style.container}>
		<h2>YNGЯНГ</h2>
			<AnimationOnScroll animateIn="animate__slideInRight" animateOut="animate__slideOutLeft" duration={5}>
				<img src={FishImg} alt="FishImg" />
			</AnimationOnScroll>
		</div>
	)
}

export default Fish
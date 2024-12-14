import style from '@Styles/WelcomeBanner.module.scss'
import welcomeImg1 from '@Img/Welcom/welcom1.png'
import textImg from '@Img/ImgFood/1.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const WelcomeBanner = () => {
	return (
		<div className={style.container}>
			<div className={style.title}>
				<h3>НАШ РЕСТОРАН</h3>
				<h2>Свежая домашняя еда для всех и каждого</h2>
			</div>
			<AnimationOnScroll animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight' duration={6}>
				<img className={style.foodText} src={textImg} alt='food' />
			</AnimationOnScroll>
			<p>
				"Мы создаём блюда, которые согревают душу и радуют сердце. Свежие ингредиенты, проверенные рецепты и щепотка
				любви в каждом кусочке. Ощутите вкус настоящего!"
			</p>
			<p>Попробуйте, и вы поймёте, как вкусно может быть просто — каждый ингредиент, каждый кусочек объединяет в себе
				заботу, тепло и искреннюю любовь к еде.</p>
			<div className={style.imgs}>
				<img className={style.peoples} src={welcomeImg1} alt='welcomeImg1' />
			</div>
		</div>
	)
}

export default WelcomeBanner
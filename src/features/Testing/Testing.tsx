import BGTesting from '@Img/BG3.jpg'
import style from '@Styles/Testing.module.scss'
import foodImg from '@Img/ImgFood/e34.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Testing = () => {
	return (
		<div className={style.container}>
			<div className={style.titleWrapper}>
				<h3>ПОПРОБУЙ НОВОЕ</h3>
				<AnimationOnScroll animateIn='animate__slideInUp' animateOut='animate__fadeOutLeft' duration={2}>
					<h2>Суп из шпината</h2>
				</AnimationOnScroll>
			</div>
			<div className={style.wrapperBlock}>
				<img src={BGTesting} alt='BGTesting' />
				<div className={style.wrapperDescription}>
					<p>
						"Суп из шпината и спаржи — это утонченное сочетание свежих ингредиентов и нежной текстуры. Листья шпината и
						молодая спаржа раскрывают
						свои природные вкусы в гармонии с лёгким сливочным бульоном. Это блюдо не только радует глаз своим ярким
						зелёным цветом, но и
						наполняет энергией благодаря богатству витаминов. Подаётся с хрустящими гренками для создания идеального
						баланса текстур."
					</p>
				</div>
			</div>
			<AnimationOnScroll animateIn='animate__zoomIn' animateOut='animate__zoomOut' duration={3}>
				<img src={foodImg} alt='foodImg' />
			</AnimationOnScroll>
		</div>
	)
}

export default Testing
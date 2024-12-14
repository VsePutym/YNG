import style from '@Styles/Promo.module.scss'
import bg from '@Img/4445.png'

const Promo = () => {
	return (
		<div className={style.container}>
			<div className={style.textWrapper}>
				<div className={style.text}>
					<p>Завтраки</p>
					<p>c 10:00 - 12:00</p>
				</div>
			</div>
			<img src={bg} alt='bg' />
		</div>
	)
}

export default Promo

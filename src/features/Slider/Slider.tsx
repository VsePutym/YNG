import styles from '@Styles/Slider.module.scss'
import s1 from '@Img/Sliders/s0.jpg'
import s2 from '@Img/Sliders/s1.jpg'
import s3 from '@Img/Sliders/s2.jpg'
import s4 from '@Img/Sliders/s4.jpg'
import s5 from '@Img/Sliders/s5.jpg'
import s6 from '@Img/Sliders/s6.jpg'
import s7 from '@Img/Sliders/s7.jpg'
import s8 from '@Img/Sliders/s8.jpg'
import s9 from '@Img/Sliders/s9.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import {Pagination, EffectCards} from 'swiper/modules';
const Slider = () => {
	return (
		<div className={styles.wrapperSlider}>
			<h2 className={styles.titleSlider}>Галерея зала</h2>
			<Swiper
				effect={'cards'}
				pagination={true}
				speed={900}
				modules={[Pagination, EffectCards]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img className={styles.sliderPhoto} src={s1} alt="Stylish modern clothing from Modee" />
				</SwiperSlide>
				<SwiperSlide>
					<img className={styles.sliderPhoto} src={s2} alt="Stylish modern clothing from Modee" />
				</SwiperSlide>
				<SwiperSlide>
					<img className={styles.sliderPhoto} src={s3} alt="Stylish modern clothing from Modee" />
				</SwiperSlide>
				<SwiperSlide>
					<img className={styles.sliderPhoto} src={s4} alt="Stylish modern clothing from Modee" />
				</SwiperSlide>
				<SwiperSlide>
					<img className={styles.sliderPhoto} src={s5} alt="Stylish modern clothing from Modee" />
				</SwiperSlide>
				
				<SwiperSlide>
					<img className={styles.sliderPhoto} src={s6} alt="Stylish modern clothing from Modee" />
				</SwiperSlide>
				
				<SwiperSlide>
					<img className={styles.sliderPhoto} src={s7} alt="Stylish modern clothing from Modee" />
				</SwiperSlide>
				
				<SwiperSlide>
					<img className={styles.sliderPhoto} src={s8} alt="Stylish modern clothing from Modee" />
				</SwiperSlide>
				
				<SwiperSlide>
					<img className={styles.sliderPhoto} src={s9} alt="Stylish modern clothing from Modee" />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Slider;
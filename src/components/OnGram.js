import React from "react"
import styles from "../modules/OnGram.module.css"
import {OnGramCard} from "./OnGramCard.js"
import Carousel from "react-multi-carousel";
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io"


const CustomDot = ({ onClick, ...rest }) => {
	let data=[

		{
			"title":"@truely.styled x The Oversized Alpaca Crew",
			"src" :"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/9a8b2d55_11d5.jpg"

		},
		{
			"title":"@jesss.thetix x The Forever Sneaker",
			"src":"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/45fe1269_bc85.jpg"
		},
		{
			"title":"@onpenn x The Super-Straight Jean",
			"src":"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/28c8b601_a39d.jpg"
		},
		{
			"title":"@onpenn x The Super-Straight Jean",
			"src":"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/e0d9c7a9_5029.jpg"
		},
		{
			"title":"@aaricanichole x The 100% Human Face Mask",
			"src":"https://s7d5.scene7.com/is/image/Anthropologie/59984054_010_b?$an-category$&qlt=80&fit=constrain"
		}
	]
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  const carouselItems = data.map();


  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={styles.active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};


const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className={styles.btn}>
    		<button className={styles.btn1} onClick={() => next()}><IoIosArrowBack/></button>

      <button className={styles.btn2} onClick={() => previous()}><IoIosArrowForward/></button>
      
    </div>
  );
};

export const OnGram=()=>{
	const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 1,  },
  mobile: {
    breakpoint: { max: 490, min: 0 },
    items: 1,
  }
};
	let data=[
		{
			"title":"@truely.styled x The Oversized Alpaca Crew",
			"src" :"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/9a8b2d55_11d5.jpg"

		},
		{
			"title":"@jesss.thetix x The Forever Sneaker",
			"src":"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/45fe1269_bc85.jpg"
		},
		{
			"title":"@onpenn x The Super-Straight Jean",
			"src":"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/28c8b601_a39d.jpg"
		},
		{
			"title":"@onpenn x The Super-Straight Jean",
			"src":"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/e0d9c7a9_5029.jpg"
		},
		{
			"title":"@aaricanichole x The 100% Human Face Mask",
			"src":"https://s7d5.scene7.com/is/image/Anthropologie/59984054_010_b?$an-category$&qlt=80&fit=constrain"
		}
	]
	return(
		<div className={styles.main}>
			<h1 className={styles.mainh1}>On The Gram</h1>
			<div className={styles.inner}>
				<Carousel
					swipeable={true}
  					draggable={true}
  					responsive={responsive}
		    		infinite={true}
  					autoPlaySpeed={1000}
  					keyBoardControl={true}
  					customTransition="all .5"
  					removeArrowOnDeviceType={["mobile"]}
					transitionDuration={500}
					arrows={false}
					renderButtonGroupOutside={true}
  					customButtonGroup={<CustomButtonGroup/>}
				>
				{data.map(dat=>
					<OnGramCard title={dat.title} src={dat.src}/>
					)}
				</Carousel>
			</div>

		</div>
		)
}
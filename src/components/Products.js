import React from "react"
import styles from "../modules/Product.module.css"
import {Card} from "./Card.js"
import Carousel from "react-multi-carousel";
import {CardCarousel} from "./CardCarousel";
import "react-multi-carousel/lib/styles.css";



export const Product=()=>{
	const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2//optional, default to 1.
  }
};
	let data=[
		{
			"title":"Vega Lounge Jumpsuit",
			"src" :"https://s7d5.scene7.com/is/image/Anthropologie/35388685_020_b10?$an-category$&qlt=80&fit=constrain"

		},
		{
			"title":"Maeve Carys Mock Neck Sweater",
			"src":"https://s7d5.scene7.com/is/image/Anthropologie/4113086690011_082_b14?$an-category$&qlt=80&fit=constrain"
		},
		{
			"title":"Classic V-Neck Tee",
			"src":"https://s7d5.scene7.com/is/image/Anthropologie/4130231803171_001_b?$an-category$&qlt=80&fit=constrain"
		},
		{
			"title":"Gleaming Primrose Mirror",
			"src":"https://s7d5.scene7.com/is/image/Anthropologie/48097422_070_b10?$an-category$&qlt=80&fit=constrain"
		},
		{
			"title":"Evaline Maxi Dress",
			"src":"https://s7d5.scene7.com/is/image/Anthropologie/59984054_010_b?$an-category$&qlt=80&fit=constrain"
		}
	]
	return(
		<div className={styles.product}>
			<h1 className={styles.well}>We Think You'll Love</h1>
			<div className={styles.cont}>
				<Carousel
					swipeable={true}
  			draggable={true}
  			responsive={responsive}
		    infinite={true}
  			autoPlaySpeed={1000}
  			keyBoardControl={true}
  			customTransition="all .5"
  			removeArrowOnDeviceType={["tablet", "mobile"]}
			transitionDuration={1000}
  			
			>
			{data.map(dat=>
				<CardCarousel key={dat.title} title={dat.title} src={dat.src}/>
			)}
			</Carousel>
			</div>
			<div className={styles.cont1}>

			{data.map(dat=>
				<Card key={dat.title} title={dat.title} src={dat.src}/>

			)}
			</div>

		</div>
		)
}
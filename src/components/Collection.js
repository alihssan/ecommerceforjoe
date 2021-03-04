import React from "react"

import styles from "../modules/Collection.module.css"


export const Collection=()=>{
	let data=[
	{
		"title":"The Way-High Jean—New Wash",
		"src":"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/60094c78_49be.png",
		"short_dec":"Way high. Way cute. And way, way flattering.",
	},
	{
		"title":"Introducing Track",
		"src":"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/69e5c481_b04b.jpg",
		"short_dec":"A collection of premium organic pieces",
	},
	{
		"title":"The Silky Cotton Cropped Shirt",
		"src":"https://media.everlane.com/image/upload/c_fill,dpr_1.0,f_auto,g_face:center,q_auto,w_auto/v1/i/b75b1d25_8781.jpg",
		"short_dec":"Meet your high-rise jean’s",
	},

	]
	return(
		<div className={styles.collectioncont}>
				<div className={styles.cont}>

		{data.map(dat=>
			<div className={styles.card}>
			<img src={dat.src}/>
				<div className={styles.text}>
					<p className={styles.main}>{dat.title}</p>
					<p className={styles.inner}>{dat.short_dec}</p>
				</div>
			</div>
		)}
		</div>
		</div>
	)
}
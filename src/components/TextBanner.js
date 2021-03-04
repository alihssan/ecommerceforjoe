import React from "react"
import styles from "../modules/TextBanner.module.css"



export const TextBanner=()=>{
	return(
		<div className={styles.outerbanner}>
			<div className={styles.innerbanner}>
			<div className={styles.inn}>
			<div className={styles.span}>All Shirts,</div>
			<div className={styles.span}>Dress Shirts,</div>
			<div className={styles.span}>Ties,</div>
			<div className={styles.span}>New Arrivals,</div>
			<div className={styles.span}>Denim Shirts,</div>
			<div className={styles.span}>The Essentials</div>

			</div>



			</div>


		</div>

	)
}


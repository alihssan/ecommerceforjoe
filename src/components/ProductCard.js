import React from "react"
import styles from "../modules/ProductCard.module.css"



export const ProductCard=(props)=>{
	return(
			<div className={styles.product}>
				<img className={styles.img}/>
				<h1></h1>
				<div className={styles.span}></div><br/>
				
			</div>
		)
}
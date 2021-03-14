import React from "react"
import styles from "../modules/CardCarousel.module.css"



export const CardCarousel=(props)=>{
	return(			<div className={styles.card}>
					<img src={props.src}/>
					<h1>{props.title}</h1>
					</div>
		)
}
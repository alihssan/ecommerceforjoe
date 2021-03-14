import React from "react"
import styles from "../modules/Card.module.css"



export const Card=(props)=>{
	return(			<div className={styles.card}>
					<img src={props.src}/>
					<h1>{props.title}</h1>
					</div>
		)
}
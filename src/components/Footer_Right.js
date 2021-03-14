import React from "react"
import styles from "../modules/Footer.module.css"
import {BsArrowRight} from "react-icons/bs"


export const Footer_Right=()=>{
	return(
			<div className={styles.right}>
				<h2>
					Exceptional quality. Ethical factories. Radical Transparency. Sign up to enjoy free U.S. shipping and returns on your first order.
				</h2>
				<input type="text" placeholder="Email Address"/>
				<BsArrowRight className={styles.btn} color={"#dfe0e1"} size={25}/>

			</div>
		)
}
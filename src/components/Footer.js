import React from "react"
import styles from "../modules/Footer.module.css"
import {Footer_left} from "./Footer_Left.js"
import {Footer_Right} from "./Footer_Right.js"
import {Footer_Bottom} from "./Footer_Bottom.js"

export const Footer=()=>{
	return(
		<>
			<div className={styles.main}>
				<Footer_Right/>

				<Footer_left/>
			</div>
			<Footer_Bottom/>
		</>

		)
}




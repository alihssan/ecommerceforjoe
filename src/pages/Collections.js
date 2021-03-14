import React from "react"
import {ProductCard} from "../../src/components/ProductCard.js"
import styles from "../../src/modules/CollectionPage.module.css"


export default function Collection(){
	return(
		<div className={styles.collection}>
		<ProductCard/>
		</div>


		)
}
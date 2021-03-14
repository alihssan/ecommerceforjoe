import React from "react"
import styles from "../modules/Footer.module.css"

export const Footer_Bottom=()=>{
	return(
		<div className={styles.bottom}>

		<ul className={styles.horizontal}>
			<li className={styles.heading}>
				© 2021 All Rights Reserved
			</li>
			<div className={styles.label}>
			<li className={styles.link}>
					Privacy Policy
			</li>
			<li className={styles.link5}>
					Terms of Service
			</li>
			<li className={styles.link1}>
					CA Supply Chain Transparency
			</li>
			<li className={styles.link2}>
					Vendor Code of Conduct
			</li>
			<li className={styles.link3}>
				Sitemap Pages
			</li>
			<li className={styles.link4}>
				Sitemap Products
			</li>
			</div>
		</ul>
		<ul className={styles.horizontal2}>

			<li className={styles.link}>
					Privacy Policy
			</li>
			<li className={styles.link1}>
					CA Supply Chain Transparency
			</li>
			<li className={styles.link2}>
					Vendor Code of Conduct
			</li>
			<li className={styles.link4}>
				Sitemap Products
			</li>
		</ul>
			<li className={styles.heading1}>
				© 2021 All Rights Reserved
			</li>

		</div>
		)
}
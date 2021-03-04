import React from "react"
import {Header2} from "../components/Header2.js"
import img from "../components/imm2.jpg"
import styles from "../modules/back.module.css"
import {MainHead} from "../components/Mainhead.js"
import {VideoContainer} from "../components/VideoContainer.js"
import {TextBanner} from "../components/TextBanner"
import {Collection} from "../components/Collection"
export default function Home() {
  return (
  	<div className={styles.back}>
  		<link rel="preconnect" href="https://fonts.gstatic.com"/>
		<link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"/>
  		<Header2/>
  		<MainHead/>
  		<TextBanner/>
  		<Collection/>


  	</div>


  	)

}


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
  		<Header2/>
  		<MainHead/>
  		<TextBanner/>
  		<Collection/>


  	</div>


  	)

}


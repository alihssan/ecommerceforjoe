import React,{useEffect,useState} from "react"
import {Header2} from "../components/Header2.js"
import img from "../components/imm2.jpg"
import styles from "../modules/back.module.css"
import {MainHead} from "../components/Mainhead.js"
import {VideoContainer} from "../components/VideoContainer.js"
import {TextBanner} from "../components/TextBanner"
import {Collection} from "../components/Collection"
import {Product} from "../components/Products"
import {Footer} from "../components/Footer"
import {OnGram} from "../components/OnGram"
import SquareConnection from "square-connection"
import fetchJsonp from 'fetch-jsonp'
import { Client, Environment } from 'square'


export default function Home() {
  let [st,setst]=useState({});



  useEffect(()=>{
fetch("/.netlify/functions/api")
.then(console.log)

  },[])
 /*const square = new SquareConnection('EAAAEGuOU0fZy_1YbWVl_HnHuTlbv7yJMp4nlJ4sRa4S0cFhgW-tZInP6oTWV1SB');
const request = square.get('/catalog/list');

request.then((result) => {
  console.log(result); // logs out an Axios result object if the API call succeded
});

request.catch((error) => {
  console.log(error); // logs out an Axios error object if the API call didn't succed
})*/
  return (
  	<div className={styles.back}>
  		<link rel="preconnect" href="https://fonts.gstatic.com"/>
		<link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet"/>
  		<Header2/>
  		<MainHead/>
  		<TextBanner/>
  		<Collection/>
  		<Product/>
  		<Footer/>


  	</div>


  	)

}


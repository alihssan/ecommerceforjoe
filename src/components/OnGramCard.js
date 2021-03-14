import React from "react"
import "../modules/OnGramCard.css"





export const OnGramCard=(props)=>{
	return(
		<div className="card">
			<img src={props.src}/>
			<h1>{props.title}</h1>
		</div>
	)
}
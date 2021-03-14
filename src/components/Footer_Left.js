import React,{useState} from "react"
import styles from "../modules/Footer.module.css"
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import Fade from "react-reveal/Fade"

export const Footer_left=()=>{
	const [Dropdown,setDropdown]=useState(false);
	const [Dropdown1,setDropdown1]=useState(false);
	const [Dropdown2,setDropdown2]=useState(false);
	const [Dropdown3,setDropdown3]=useState(false);

	return(

			<>
			{/*To be Displayed from 1200px to 700px*/}
			<div className={styles.left}>
				<div className={styles.container}>
					<h1>Account</h1>
						<li>Manage Account</li>
						<li>Saved Items</li>
						<li>Orders & Returns</li>
						<li>Redeem a Gift card</li>


				</div>
				<div className={styles.container}>
						<h1>Company</h1>
						<li>About</li>
						<li>Factories</li>
						<li>Careers</li>
						<li>International</li>
						<li>Accessibility</li>


				</div>
				<div className={styles.container}>
						<h1>Connect</h1>
						<li>Contact & FAQ</li>
						<li>Instagram</li>
						<li>Twitter</li>
						<li>Affiliates</li>
						<li>Bulk Orders</li>


				</div>
				<div className={styles.container}>
						<h1>Visit Us</h1>
						<li>Find a location nearest</li>
						<li>you. <a>See Our Stores</a></li>
						
				</div>

			</div>
		{/*End */}
		{/*To be Displayed from 700px*/}
		<div className={styles.left700}>
			<div className={styles.dropdown}>
				<h1>Account</h1>
				{Dropdown===false && <AiOutlinePlus className={styles.plus} onClick={e=>setDropdown(true)}/> }
				{Dropdown===true && <AiOutlineMinus className={styles.plus} onClick={e=>setDropdown(false)}/>}
				{Dropdown===true &&
				<div className={styles.drop}>
				<Fade bottom>		

					<li>Manage Account</li>
					<li>Saved Items</li>
					<li>Orders & Returns</li>
					<li>Redeem a Gift card</li>
				</Fade>
				</div>
			}
			</div>
			<div className={styles.dropdown}>
				<h1 styles={Dropdown===true ? {borderBottom:"transparent"} : null}>Company</h1>
				{Dropdown1===false && <AiOutlinePlus className={styles.plus} onClick={e=>setDropdown1(true)}/> }
				{Dropdown1===true && <AiOutlineMinus className={styles.plus} onClick={e=>setDropdown1(false)}/>}
				{Dropdown1===true &&	
				<div className={styles.drop}>
					<Fade bottom>		

					<li>About</li>
					<li>Factories</li>
					<li>Careers</li>
					<li>International</li>
					<li>Accessibility</li>
					</Fade>

				</div>
			}
			</div>
			<div className={styles.dropdown}>
				<h1>Connect</h1>
				{Dropdown2===false && <AiOutlinePlus className={styles.plus} onClick={e=>setDropdown2(true)}/> }
				{Dropdown2===true && <AiOutlineMinus className={styles.plus} onClick={e=>setDropdown2(false)}/>}
				{Dropdown2===true &&
				<div className={styles.drop}>
				<Fade>
					<li>Contact & FAQ</li>
					<li>Instagram</li>
					<li>Twitter</li>
					<li>Affiliates</li>
					<li>Bulk Orders</li>
				</Fade>
				</div>
			}
			</div>
			<div className={styles.dropdown}>
				<h1>Visit Us</h1>
				{Dropdown3===false && <AiOutlinePlus className={styles.plus} onClick={e=>setDropdown3(true)}/> }
				{Dropdown3===true && <AiOutlineMinus className={styles.plus} onClick={e=>setDropdown3(false)}/>}
				{Dropdown3===true &&
				<div className={styles.drop}>
					<Fade bottom>		

					<li>Find a location nearest</li>
					<li>you. <a>See Our Stores</a></li>
					</Fade>
				</div>
			}
			</div>
		</div>
		</>
		)
}
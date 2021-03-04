import React from "react"
import styles from "../modules/VideoContainer.module.css"





export const VideoContainer=()=>{
	return(
		<div className={styles.videocontainer}>
				<video
                  height="100%"
                  width="100%"
                  loop
                  muted
                  autoPlay
                >
                  <source
                    src="https://cdn.static.amplience.net/orlebarbrown/_vid/ob_atlantic_210217_landscape_nocopy_h264/eed360ef-6dfc-4833-8a99-71d82544c88c/video/2dfc28d2-40bd-40dc-a17b-5a42cc8723a4.mp4"
                    type="video/mp4"
                  />

                </video>
                <div className={styles.textcontainer}>
                	<h2>NEW CAPSULE</h2>
                	<h1>BAY</h1>
                	<div className="hero__btns flex flex--wrap flex--center-small">
									<span className="btn btn--block btn--primary">Shop Now</span>
								</div>

                </div>


		</div>
		)
}
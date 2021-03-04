import React from "react"
import "../modules/MainHead.css"



export const MainHead=()=>{
	return(
		<div className="homepage-carousel">
			<div className="video-hero-asset">
				<div className="container campaign-video video-container">
					<div className="img__frame">
						<div className="campaign-video-wrapper">
							<video
                  className="atlantic-bay-video"
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
                <video
                  className="bay-video"
                  height="100%"
                  width="100%"
                  loop
                  muted
                  autoPlay
                >
                  <source
                    src="https://cdn.static.amplience.net/orlebarbrown/_vid/ob_atlantic_210217_square_nocopy_h264/42da169d-4284-4baa-adb7-443a65c017cb/video/f14882a8-ad62-4f0d-9680-9da588eb9bb9.mp4#t=0.5"
                    type="video/mp4"
                  />

                </video>
						</div>
					</div>
					<div className="container__absolute flex flex--align-center">
						<div className="container no-margin--b drop">
							<div className="gs herocopywidth">
								<h2 className="heading heading--center-small text--white-color hero-padding" style={{fontWeight:"bold"}}>NEW Capsule </h2>
								<h1 className="heading no-margin--b heading--center-small text--white-color" style={{fontWeight:"bold"}}>Bay</h1>
								<div className="hero__btns flex flex--wrap flex--center-small">
									<span className="btn btn--block btn--primary">Shop Now</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}

function Gallery() {
	return (
		<section class="text-gray-400 bg-gray-900 body-font" id="AboutUs">
			<div class="container px-5 py-24 mx-auto">
				<div class="text-center mb-20">
					<h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
						About us
					</h1>
					<p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
						Built from a love for competition, 570 Flag Football...
					</p>
					<div class="flex mt-6 justify-center">
						<div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
					</div>
				</div>
				<div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
					<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
						<div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-10 h-10"
								viewBox="0 0 24 24"
							>
								<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
							</svg>
						</div>
						<div class="flex-grow">
							<h2 class="text-white text-lg title-font font-medium mb-3">
								Sports
							</h2>
							<p class="leading-relaxed text-base">
								Flag football
							</p>
						</div>
					</div>
					<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
						<div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-8 h-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
								/>
							</svg>
						</div>
						<div class="flex-grow">
							<h2 class="text-white text-lg title-font font-medium mb-3">
								Competition
							</h2>
							<p class="leading-relaxed text-base">
								Intense friendly play
							</p>
						</div>
					</div>
					<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
						<div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								class="w-10 h-10"
								viewBox="0 0 24 24"
							>
								<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
								<circle cx="12" cy="7" r="4"></circle>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
								/>
							</svg>
						</div>
						<div class="flex-grow">
							<h2 class="text-white text-lg title-font font-medium mb-3">
								Community
							</h2>
							<p class="leading-relaxed text-base">
								Our main goal is to provide a space to discover
								new friends or enjoy time with old ones, while
								being active. In addition to hosting weekly
								games, we organize lunches, days out, and other
								group activites to further bring people
								together.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Gallery

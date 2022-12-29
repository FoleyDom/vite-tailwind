import Schedule from './Schedule'

function Heros() {
dev2
    return (
        <section class="text-gray-400 bg-gray-900 body-font" id="WhatWeDo">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        The most exciting
                        <br class="hidden lg:inline-block " />
                        {''} flag football in NEPA
                    </h1>
                    <p class="mb-8 leading-relaxed text-blue-500">
                        With an emphasis on having fun and building lasting friendships, 570 flag
                        football is also highly competitive. Bringing together some of the best
                        local athletes, our area has to offer. This league is built different! If
                        you think you could keep up, register below. If you'd like to come watch,
                        click on the schedule button below.
                    </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            <Schedule />
                        </button>
                        <a href="#ContactUs">
                            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                Register
                            </button>
                        </a>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src="https://i.ibb.co/Stsb8Ph/pexels-pixabay-38911.webp"
                    />
                </div>
            </div>
        </section>
    )
	return (
		<section class="text-gray-400 bg-gray-900 body-font" id="WhatWeDo">
			<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
				<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						The most exciting
						<br class="hidden lg:inline-block " />
						{''} flag football in NEPA
					</h1>
					<p class="mb-8 leading-relaxed text-blue-500">
						With an emphasis on having fun and building lasting
						friendships, 570 flag football is also highly
						competitive. Bringing together some of the best local
						athletes, our area has to offer.
					</p>
					<div class="flex justify-center">
						<button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
							<Schedule />
						</button>
						<a href="#ContactUs">
							<button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
								Register
							</button>
						</a>
					</div>
				</div>
				<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						class="object-cover object-center rounded"
						alt="hero"
						src="https://i.ibb.co/Stsb8Ph/pexels-pixabay-38911.webp"
					/>
				</div>
			</div>
		</section>
	)
 
}

export default Heros

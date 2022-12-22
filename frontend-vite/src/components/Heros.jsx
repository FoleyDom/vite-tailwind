function Heros() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        The most exciting
                        <br class="hidden lg:inline-block " />
                        flag football in NEPA
                    </h1>
                    <p class="mb-8 leading-relaxed text-blue-500">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                        cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag
                        selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                    </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Button
                        </button>
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

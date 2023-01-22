import footballingrass from '../assets/footballingrass.png'
import throwfootball from '../assets/throwfootball.png'
import players from '../assets/players.png'
import footballsign from '../assets/footballsign.png'

export default function Pictures() {
	return (
		<section class='text-gray-400 bg-gray-900 body-font'>
			<div class='container px-5 py-24 mx-auto flex flex-wrap'>
				<div class='flex flex-wrap md:-m-2 -m-1'>
					<div class='flex flex-wrap'>
						<div class='md:p-2 p-1 w-full'>
							<img
								alt='gallery'
								class='w-full h-full object-cover object-center block'
								src={footballsign}
							/>
						</div>
						<div class='md:p-2 p-1 w-1/2'>
							<img
								alt='gallery'
								class='w-full object-cover h-full object-center block'
								src={throwfootball}
							/>
						</div>
						<div class='md:p-2 p-1 w-1/2'>
							<img
								alt='gallery'
								class='w-full object-cover h-full object-center block'
								src={players}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

import fbg from '../assets/fbg.webp'
import fb2small from '../assets/fb2small.webp'
import sign16x10 from '../assets/sign16x10.webp'

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
								src={sign16x10}
								loading='eager'
								rel='modulepreload'
							/>
						</div>
						<div class='md:p-2 p-1 w-1/2'>
							<img
								alt='gallery'
								class='w-full object-cover h-full object-center block'
								src={fb2small}
								loading='eager'
								rel='modulepreload'
							/>
						</div>
						<div class='md:p-2 p-1 w-1/2'>
							<img
								alt='gallery'
								class='w-full object-cover h-full object-center block'
								src={fbg}
								loading='eager'
								rel='modulepreload'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

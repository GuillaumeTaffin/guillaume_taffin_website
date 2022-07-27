<script>
	import PresentationCard from '../lib/components/PresentationCard.svelte';
</script>

<div class='py-4 md:py-16'>

	<div class='flex flex-col lg:flex-row'>
		<div class='flex justify-center'>
			<img src='images/gt_pic.jpg' alt='gt'
					 class='rounded-full w-40 md:w-60 lg:w-full lg:max-w-lg lg:rounded-bl-none lg:rounded-tl-none ' />
		</div>
		<div class='grid place-items-center p-8 md:p-16'>
			<div>
				<h1 class='py-2 text-6xl handwritten md:text-8xl text-primary font-semibold drop-shadow-md'>
					Hi, I'm Guillaume.
				</h1>
				<p class='text-2xl'>
					I'm a backend developer, with a huge inclination towards software craftsmanship, clean code and
					all that good stuff !
				</p>
			</div>

		</div>
	</div>
</div>


<div class='flex flex-wrap justify-center py-8'>
	<PresentationCard title='What I do...'>
		I am currently a Senior Backend Developer working at the National Bank of Canada in Montreal.
		Mostly working on developing transactional and banking micro-services and REST APIs.
		Also taking care of the operational deployment, monitoring and maintenance of the services.
	</PresentationCard>

	<PresentationCard title='What I like...'>
		I love learning and sharing knowledge with other people, at work and outside.
		I particularly like everything around software craftsmanship, continuous delivery,
		and everything that helps developers to perform at their best while enjoying their
		day-to-day life!
	</PresentationCard>
	<PresentationCard title='What I want...'>
		I aim to use this space to convey my passion about software development through writings,
		create an open space of sharable knowledge and hopefully have a positive impact in the software world!
	</PresentationCard>
</div>


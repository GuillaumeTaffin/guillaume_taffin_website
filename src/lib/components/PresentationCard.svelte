<script>
	export let title = '';
</script>

<div class='max-w-2xl p-8'>
	<h2 class='text-primary text-5xl handwritten text-center pb-4 font-medium drop-shadow-md'>{title}</h2>

	<p class='text-xl text-justify'>
		<slot></slot>
	</p>
	<div class='py-4 flex justify-center'>
		<button class='py-2 px-4 text-primary hover:font-bold hover:italic'>Read more...</button>
	</div>
</div>
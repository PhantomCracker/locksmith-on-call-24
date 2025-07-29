<script lang="ts">
    let items = [
        { text: 'MLA Certified Locksmiths', img: '/images/master-locksmiths-association.webp' },
		{ text: 'DBS Checked Technicians', img: '/images/disclosure-and-barring-service.webp' },
		{ text: 'Fully Insured & Licensed', img: '/images/insured.webp' },
		{ text: '⭐⭐⭐⭐⭐ Rated 5.0 on Google Reviews' }
	];
</script>

<section class="bg-white text-text-base py-4">
	<div class="max-w-6xl mx-auto px-4 text-center space-y-8">
		<h2 class="text-2xl md:text-3xl font-bold text-primary">
			Local and Trusted Locksmiths Since 2008
		</h2>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
			{#each items as item}
				<div class="flex flex-col items-center gap-2 px-4 py-4 border border-gray-200 rounded shadow bg-white">
					{#if item.img}
						<img src={item.img} alt={item.text} class="h-8 w-auto" />
					{/if}
					<span class="text-sm md:text-base text-center">{item.text}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

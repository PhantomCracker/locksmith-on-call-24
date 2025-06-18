<script lang="ts">
    let items = [
        { text: 'MLA Certified Locksmiths', img: '/images/mla.jpeg' },
		{ text: 'DBS Checked Technicians', img: '/images/dbs.png' },
		{ text: 'Fully Insured & Licensed', img: '/images/insured.jpg' },
		{ text: '⭐⭐⭐⭐⭐ Rated 5.0 on Google Reviews' }
	];
</script>

<section class="bg-white text-text-base py-16">
	<div class="max-w-6xl mx-auto px-4 text-center space-y-8">

        <h2 class="text-2xl md:text-3xl font-bold text-primary">
			Local and Trusted Locksmiths Since 2008
		</h2>
        <div class="relative overflow-hidden">
			<!-- Carousel container -->
			<div class="flex animate-scroll gap-8 items-center">
				{#each [...items, ...items] as item, i}
					<div class="flex-shrink-0 flex items-center gap-2 min-w-max text-text-base px-6 py-4 border border-gray-200 rounded shadow bg-white">
						{#if item.img}
							<img src={item.img} alt={item.text} class="h-8 w-auto" />
						{/if}
						<span class="whitespace-nowrap text-sm md:text-base">{item.text}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes scroll {
		0% { transform: translateX(0%); }
		100% { transform: translateX(-50%); }
	}
	.animate-scroll {
		width: max-content;
		animation: scroll 40s linear infinite;
	}
</style>
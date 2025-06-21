<script lang="ts">
	import { formatLocationCoverage } from '$lib/utils/textFormatters';
	
	export let areas: string[];
	export let city: string;

  	const safeCity = city?.trim() || 'Your Area';
</script>

<section class="bg-primary text-white py-20">
	<div class="max-w-6xl mx-auto px-4 text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">24/7 Emergency Locksmith Near {safeCity}</h1>
		<p class="text-lg md:text-xl mb-4">{formatLocationCoverage(city, areas)}</p>
		<a href="tel:0123456789" class="inline-block bg-accent text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition">
			📞 Call Now: 0123 456 789
		</a>
	</div>
</section>

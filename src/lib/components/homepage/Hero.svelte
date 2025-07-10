<script lang="ts">
	import { formatLocationCoverage } from '$lib/utils/textFormatters';

	export let areas: string[];
	export let city: string;

	const safeCity = city?.trim() || 'Your Area';
</script>

<section class="relative h-[600px] overflow-hidden">
	<!-- Background Image -->
	<img
		src="/images/locksmith.webp"
		alt="Professional locksmith working"
		class="absolute inset-0 w-full h-full object-cover"
	/>

	<!-- Gradient Overlay -->
	<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-blue-900/60 to-primary/90"></div>

	<!-- Content -->
	<div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">24/7 Emergency Locksmith In {safeCity}</h1>
		<p class="text-lg md:text-xl mb-4">{formatLocationCoverage(city, areas)}</p>
		<a
			href="tel:03307890914"
			class="inline-block bg-accent text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition"
			on:click={(e) => {
				e.preventDefault();
				gtag_report_conversion('tel:03307890914');
			}}>
			📞 Call Now: 0330 789 0914
		</a>
	</div>
</section>

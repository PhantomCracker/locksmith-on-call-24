<script lang="ts">
	export let city: string;

	const safeCity = city?.trim() || 'your area';
</script>

<section class="py-16 bg-white text-text-base">
	<div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
		<img src="/images/why-choose-us.webp" alt="Trusted Locksmith Team" class="rounded shadow" />
		<div>
			<h2 class="text-3xl font-bold mb-4 text-primary">Why Choose Locksmith on Call?</h2>
			<ul class="space-y-4 text-lg">
				<li>✅ Fast Arrival Across {safeCity}</li>
				<li>✅ 24/7 Emergency Availability</li>
				<li>✅ Fully Licensed and Insured</li>
				<li>✅ Friendly local services in {safeCity}</li>
				<li>✅ Transparent Pricing – No Hidden Fees</li>
			</ul>
		</div>
	</div>
</section>

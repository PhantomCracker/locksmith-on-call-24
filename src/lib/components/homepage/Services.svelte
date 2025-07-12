<script lang="ts">
	const services = [
		{
			title: 'Emergency Lockout (Home & Office)',
			description: 'Locked out of your home or business? We provide fast, non-destructive entry 24/7.',
			routeLink: 'emergency-lockout'
		},
		{
			title: 'Lock Replacement & Installation',
			description: 'Secure your home or office with high-quality British Standard locks.',
			routeLink: 'lock-replacement'
		},
		{
			title: 'UPVC Door & Lock Repairs',
			description: 'We repair faulty mechanisms and broken locks on residential and commercial doors.',
			routeLink: 'upvc-repair'
		},
        {
			title: 'Safe Unlocking & Installation',
			description: 'We open locked safes and provide secure safe installations for home or office.',
			routeLink: 'safe-unlocking'
		},
		{
			title: 'Security Upgrades',
			description: 'We install anti-snap cylinders, high-security deadbolts, and insurance-approved locks.',
			routeLink: 'security-upgrades'
		}
	];
</script>

<section class="bg-background-white text-text-base py-16">
	<div class="max-w-6xl mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-10 text-primary">Our Locksmith Services</h2>
		<p class="text-center max-w-2xl mx-auto mb-6 text-sm text-gray-500 italic">
			<strong>We do not offer car unlocking or auto locksmith services.</strong>
		</p>
		<div class="grid md:grid-cols-2 gap-8 mt-8">
			{#each services as service}
				<a href={`/services/${service.routeLink}`}>
					<div class="bg-white p-6 rounded shadow hover:shadow-lg transition">
						<h3 class="font-semibold text-xl text-primary mb-2">{service.title}</h3>
						<p>{service.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

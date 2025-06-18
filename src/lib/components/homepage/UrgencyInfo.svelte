<script>
	const infoPoints = [
		{
			icon: '🚀',
			title: 'Fast 30-Minute Response',
			desc: 'We’ll get to you quickly, wherever you are.'
		},
		{
			icon: '⏰',
			title: '24/7, 365 Availability',
			desc: 'We never close — help is always one call away.'
		},
		{
			icon: '💸',
			title: 'No Call-Out Fee',
			desc: 'You only pay for the work we do — no surprises.'
		},
		{
			icon: '🏠',
			title: 'Home & Office Doors Only',
			desc: 'We specialize in residential and commercial entry — no car lockouts.'
		},
		{
			icon: '🔐',
			title: 'Safe Opening & Installation',
			desc: 'We open locked safes and professionally install new ones for home or business.'
		}
	];
</script>

<section class="bg-background-white text-text-base py-12">
	<div class="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
		{#each infoPoints as item}
			<div class="p-4 border border-gray-200 rounded shadow-sm bg-white hover:shadow transition">
				<h3 class="text-lg font-semibold text-primary">
					{item.icon} {item.title}
				</h3>
				<p class="text-sm mt-2">{item.desc}</p>
			</div>
		{/each}
	</div>
</section>

<script lang="ts">
    // TODO: update the data based on location
	let faqs = [
		{
			q: 'How fast can you arrive?',
			a: 'We typically arrive within 30 minutes anywhere in our coverage area.'
		},
		{
			q: 'Do you damage the door?',
			a: 'In most cases, we use non-destructive entry techniques to get you back in without damage.'
		},
		{
			q: 'What areas do you cover?',
			a: 'We serve all of London, Birmingham, and surrounding regions.'
		},
		{
			q: 'Can I pay with credit or debit card?',
			a: 'Yes! We accept all major credit and debit cards on-site.'
		},
		{
			q: 'Do you use professional-grade locks?',
			a: 'Absolutely. We install only trusted, insurance-approved brands for your safety.'
		},
		{
			q: 'Are your locksmiths certified?',
			a: 'Yes, all our technicians are fully certified, DBS-checked and insured.'
		},
		{
			q: 'Do you offer 24/7 service?',
			a: 'Yes, we’re available 24 hours a day, 365 days a year — including holidays.'
		}
	];

	let openIndex: number | null = null;
</script>

<section class="bg-background-white text-text-base py-16">
	<div class="max-w-4xl mx-auto px-4">
		<h2 class="text-3xl font-bold text-center mb-10 text-primary">Frequently Asked Questions</h2>
		<div class="space-y-4">
			{#each faqs as faq, i}
				<div class="border border-gray-200 rounded overflow-hidden">
					<button
						class="w-full text-left px-4 py-3 font-medium hover:bg-primary hover:text-white transition flex justify-between items-center"
						on:click={() => openIndex = openIndex === i ? null : i}
					>
						<span>{faq.q}</span>
						<span class="text-lg">{openIndex === i ? '−' : '+'}</span>
					</button>
					{#if openIndex === i}
						<div class="px-4 py-3 bg-white border-t border-gray-200 text-sm">
							{faq.a}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

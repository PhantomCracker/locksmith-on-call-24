<script lang="ts">
    import Hero from '$lib/components/homepage/Hero.svelte';
    import TrustSection from '$lib/components/homepage/TrustSection.svelte';
	import UrgencyInfo from '$lib/components/homepage/UrgencyInfo.svelte';
	import Services from '$lib/components/homepage/Services.svelte';
    import Testimonials from '$lib/components/homepage/Testimonials.svelte';
	import WhyChooseUs from '$lib/components/homepage/WhyChooseUs.svelte';
	import FAQ from '$lib/components/homepage/FAQ.svelte';
	import EmergencyCTA from '$lib/components/homepage/EmergencyCTA.svelte';
</script>

<svelte:head>
    <title>Emergency Locksmith Near You | 24/7 Fast Help in the entire United Kingdom</title>
	<meta name="description" content="Locked out? We’re available 24/7 for emergency locksmith services in United Kingdom and nearby areas. Fast, reliable, no call-out fee." />
	<meta name="google-site-verification" content="EYEqv4P_G2aEWDGjuCGggJcqf7B_zxGLjbmvDlYMv5Y" />

	<script type="application/ld+json">
		{JSON.stringify({
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "How fast can you arrive?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "We typically arrive within 30 minutes anywhere in our coverage area."
					}
				},
				{
					"@type": "Question",
					"name": "Do you damage the door?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "In most cases, we use non-destructive techniques to unlock your door without damage."
					}
				},
				{
					"@type": "Question",
					"name": "What areas do you cover?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "We cover the entire United Kingdoms and the surrounding areas."
					}
				},
				{
					"@type": "Question",
					"name": "Can I pay with credit or debit card?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Yes, we accept all major credit and debit cards on-site."
					}
				},
				{
					"@type": "Question",
					"name": "Do you use professional-grade locks?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Yes, we only use high-quality, insurance-approved locks for installations and replacements."
					}
				},
				{
					"@type": "Question",
					"name": "Are your locksmiths certified?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "All our locksmiths are certified, DBS-checked and fully insured."
					}
				},
				{
					"@type": "Question",
					"name": "Do you offer 24/7 service?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Yes, we are available 24 hours a day, 365 days a year."
					}
				}
			]
		})}
	</script>
</svelte:head>

<Hero />
<TrustSection />
<UrgencyInfo />
<Services />
<Testimonials />
<WhyChooseUs />
<FAQ />
<EmergencyCTA />

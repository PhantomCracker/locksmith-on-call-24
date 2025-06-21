<script lang="ts">
    import Hero from '$lib/components/homepage/Hero.svelte';
    import TrustSection from '$lib/components/homepage/TrustSection.svelte';
    import UrgencyInfo from '$lib/components/homepage/UrgencyInfo.svelte';
    import Services from '$lib/components/homepage/Services.svelte';
    import Testimonials from '$lib/components/homepage/Testimonials.svelte';
    import WhyChooseUs from '$lib/components/homepage/WhyChooseUs.svelte';
    import FAQ from '$lib/components/homepage/FAQ.svelte';
    import EmergencyCTA from '$lib/components/homepage/EmergencyCTA.svelte';

    const city = 'Blackpool';
    const areas: string[] = ['Blackpool', 'Fleetwood', 'Thornton-cleveleys', 'Poulton-le-flyde', 'Lytham St. Annes']
</script>

<svelte:head>
	<title>Emergency Locksmith in {city} | 24/7 Fast Local Locksmith</title>
	<meta name="description" content="Locked out in {city}? Locksmith on Call offers 24/7 emergency locksmith services with no call-out fees. Fast, reliable & local." />

	<!-- Schema Markup -->
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'LocalBusiness',
			name: 'Locksmith on Call',
			image: 'https://locksmithoncall.co.uk/logo.png', // Replace with actual logo URL
			'@id': 'https://locksmithoncall.co.uk/locksmith-in-blackpool',
			url: 'https://locksmithoncall.co.uk/locksmith-in-blackpool',
			telephone: '+441234567890',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Blackpool',
				addressCountry: 'GB'
			},
			openingHours: '24/7',
			sameAs: [
				'https://www.facebook.com/locksmithoncall',
				'https://www.instagram.com/locksmithoncall'
			]
		})}
  	</script>
</svelte:head>

<Hero {city} {areas} />
<TrustSection />
<UrgencyInfo />
<Services />
<Testimonials />
<WhyChooseUs {city} />
<FAQ {city} {areas}/>
<EmergencyCTA />

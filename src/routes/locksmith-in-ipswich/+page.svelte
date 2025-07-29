<script lang="ts">
    import Hero from '$lib/components/homepage/Hero.svelte';
    import TrustSection from '$lib/components/homepage/TrustSection.svelte';
    import UrgencyInfo from '$lib/components/homepage/UrgencyInfo.svelte';
    import Services from '$lib/components/homepage/Services.svelte';
    import Testimonials from '$lib/components/homepage/Testimonials.svelte';
    import WhyChooseUs from '$lib/components/homepage/WhyChooseUs.svelte';
    import FAQ from '$lib/components/homepage/FAQ.svelte';
    import EmergencyCTA from '$lib/components/homepage/EmergencyCTA.svelte';

    const city = 'Ipswich';
    const areas: string[] = ['Ipswich', 'Felixstowe', 'Woodbridge', 'Stowmarket', 'Aldeburgh', 'Leiston', 'Saxmundham', 'Southwold', 'Halesworth', 'Harleston', 'Diss', 'Eye', 'Thetford', 'Brandon', 'Bury St Edmunds'];
</script>

<svelte:head>
	<title>Emergency Locksmith in {city} | 24/7 Fast Local Locksmith</title>
	<meta name="description" content="Locked out in {city}? Locksmith on Call offers 24/7 emergency locksmith services with no call-out fees. Fast, reliable & local." />

	<!-- Schema Markup -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "Locksmith on Call",
			"image": "https://locksmithoncall.co.uk/logo.webp",
			"@id": `https://locksmithoncall.co.uk/locksmith-in-${city.toLowerCase()}`,
			"url": `https://locksmithoncall.co.uk/locksmith-in-${city.toLowerCase()}`,
			"telephone": "03307890914",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": city,
				"addressRegion": "Suffolk",
				"postalCode": "IP",
				"addressCountry": "GB"
			},
			"openingHoursSpecification": [{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": [
				"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
				],
				"opens": "00:00",
				"closes": "23:59"
			}],
			"description": `24/7 emergency locksmith in ${city}. Fast, reliable and local. No call-out fee, serving homes and offices across ${city} since 2008.`,
			"areaServed": {
				"@type": "Place",
				"name": city
			}
		}
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

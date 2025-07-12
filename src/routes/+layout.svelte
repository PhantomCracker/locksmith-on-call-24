<script lang="ts">
	import '../app.css';
	import Clarity from '$lib/components/homepage/Clarity.svelte';

	let mobileNavOpen = false;
</script>

<svelte:head>
	<title>Emergency Locksmith Near You</title>
	<meta name="description" content="Locksmith on Call offers 24/7 emergency locksmith services with no call-out fees. Fast, reliable & local." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- Google Tag Manager -->
	<script>
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-KRWFHND7');
	</script>
	<!-- End Google Tag Manager -->

	<link rel="preload" as="image" href="/logo.webp" />
	<link
		rel="preload"
		href="/fonts/inter-latin-500-normal.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter-latin-500-italic.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter-latin-600-normal.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter-latin-600-italic.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter-latin-700-normal.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		href="/fonts/inter-latin-700-italic.woff2"
		as="font"
		type="font/woff2"
		crossorigin="anonymous"
	/>

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "Locksmith on Call",
			"image": "https://locksmithoncall24.co.uk/logo.webp",
			"@id": "https://locksmithoncall24.co.uk/",
			"url": "https://locksmithoncall24.co.uk/",
			"telephone": "03307890914",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "37 Tavistock Pl",
				"addressLocality": "London",
				"postalCode": "WC1H 9SE",
				"addressCountry": "UK"
			},
			"openingHoursSpecification": [{
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": [
					"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
				],
				"opens": "00:00",
				"closes": "23:59"
			}],
			"priceRange": "$$",
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "4.9",
				"reviewCount": "2076"
			},
			"review": [
				{
					"@type": "Review",
					"author": {
						"@type": "Person",
      					"name": "Andre T."
					},
					"datePublished": "2025-06-12",
					"reviewBody": "We had a burglary scare — Locksmith on Call upgraded all our locks the same evening. Very reassuring.",
					"name": "Quick, professional and friendly",
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": "5"
					}
				},
				{
					"@type": "Review",
					"author": {
						"@type": "Person",
      					"name": "Ibrahim Y."
					},
					"datePublished": "2025-06-02",
					"reviewBody": "Even on a Sunday afternoon, they showed up fast and fixed our broken back door lock cleanly.",
					"name": "Excellent lock replacement",
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": "5"
					}
				},
				{
					"@type": "Review",
					"author": {
						"@type": "Person",
      					"name": "Becky D."
					},
					"datePublished": "2025-05-08",
					"reviewBody": "Needed all my house locks changed after losing keys. Super quick, no pressure, and transparent pricing.",
					"name": "Reliable and transparent pricing",
					"reviewRating": {
						"@type": "Rating",
						"ratingValue": "5"
					}
				}
			],
			"makesOffer": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Emergency Lockout Service"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Lock Replacement & Installation"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "UPVC Door & Lock Repair"
					}
				}
			]
		}
	</script>
</svelte:head>


<div class="flex flex-col min-h-screen bg-background-white text-text-base">

	<!-- 🧭 Navigation -->
	<header class="bg-background-white shadow-md sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-2 font-bold text-lg text-primary">
				<img src="/logo.webp" alt="Locksmith on Call" class="h-8 w-auto" />
				<span>Locksmith on Call</span>
			</a>


			<!-- Desktop Nav -->
			<nav class="hidden md:flex gap-6 items-center">
				<a href="/" class="hover:text-primary transition">Home</a>
				<a href="/services" class="hover:text-primary transition">Services</a>
				<a href="/about" class="hover:text-primary transition">About</a>
				<a href="/areas-covered" class="hover:text-primary transition">Covered areas</a>
				<a href="tel:03307890914" class="bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition flex items-center gap-1">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#2c2c2c"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
					Call Now
				</a>
			</nav>

			<!-- Mobile Menu Button -->
			<button class="md:hidden" on:click={() => mobileNavOpen = !mobileNavOpen} aria-label="Menu">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004aad"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
			</button>
		</div>

		<!-- Mobile Nav -->
		{#if mobileNavOpen}
			<nav class="md:hidden bg-background-white border-t border-gray-200 px-4 py-3 flex flex-col gap-3">
				<a href="/" class="hover:text-primary">Home</a>
				<a href="/services" class="hover:text-primary">Services</a>
				<a href="/about" class="hover:text-primary">About</a>
				<a href="/areas-covered" class="hover:text-primary">Covered areas</a>
				<a href="/contact" class="hover:text-primary">Contact</a>
				<a href="tel:03307890914" class="bg-accent text-white px-4 py-2 rounded text-center hover:opacity-90">
					📞 Call Now
				</a>
			</nav>
		{/if}
	</header>

	<!-- 🧱 Main Content -->
	<main class="flex-grow">
		<slot />
	</main>

	<!-- 🦶 Footer -->
	<footer class="bg-primary text-white py-6 mt-8">
		<div class="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
			<div>
				<h2 class="font-semibold mb-2">Contact Us</h2>
				<p>📍 Serving the entire United Kingdom</p>
				<p>📞 <a href="tel:03307890914" class="text-accent hover:underline"
					on:click={(e) => {
					e.preventDefault();
					gtag_report_conversion('tel:03307890914');
				}}>0330 789 0914</a></p>
				<p>✉️ support@locksmithoncall.co.uk</p>
			</div>
			<div>
				<h2 class="font-semibold mb-2">About</h2>
				<p>24/7 Emergency Locksmith Services</p>
				<p>Licensed & Insured • Fast Response</p>
				<p>&copy; {new Date().getFullYear()} Locksmith on Call</p>
			</div>
		</div>
	</footer>

	<a
		href="tel:03307890914"
		class="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-accent text-white text-center font-semibold py-3 rounded shadow-lg hover:opacity-90 transition"
		on:click={(e) => {
		e.preventDefault();
		gtag_report_conversion('tel:03307890914');
	}}>
		📞 Call Now: 0330 789 0914
	</a>

	<a
		href="https://wa.me/447760595941?text=Hello%2C%20I%20need%20help%20with%20a%20lockout%20situation."
		target="_blank"
		rel="noopener"
		class="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm md:text-base"
		aria-label="Chat with us on WhatsApp"
	>
		<!-- WhatsApp icon (inline SVG or emoji) -->
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
			<path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.157 5.317 5.478 0 12.056 0c3.19 0 6.167 1.24 8.413 3.488A11.87 11.87 0 0 1 24 12.055c-.003 6.627-5.385 12.015-12.01 12.015a11.9 11.9 0 0 1-5.911-1.57L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.302 1.593 5.448 0 9.89-4.444 9.893-9.894.002-5.452-4.438-9.89-9.89-9.89-5.452 0-9.89 4.438-9.89 9.89a9.865 9.865 0 0 0 1.598 5.29l-.999 3.648 3.986-1.637zM8.478 7.54c-.167-.372-.344-.38-.503-.386-.13-.006-.278-.005-.427-.005a.82.82 0 0 0-.592.278c-.204.22-.78.762-.78 1.857s.797 2.15.908 2.3c.111.148 1.531 2.458 3.778 3.37 1.873.738 2.25.591 2.655.553.405-.038 1.305-.531 1.49-1.044.185-.513.185-.953.13-1.044-.056-.09-.204-.148-.43-.26-.224-.111-1.326-.653-1.532-.726-.204-.075-.353-.111-.503.112-.148.223-.591.726-.725.873-.13.148-.268.167-.49.056-.222-.111-.935-.344-1.782-1.096-.658-.586-1.102-1.31-1.23-1.533-.13-.223-.014-.344.098-.455.101-.1.224-.26.335-.391.111-.13.148-.223.222-.371.074-.149.037-.278-.019-.39-.055-.112-.49-1.2-.67-1.64z"/>
		</svg>
		<span class="sm:inline">Chat via WhatsApp</span>
	</a>

</div>
<Clarity />

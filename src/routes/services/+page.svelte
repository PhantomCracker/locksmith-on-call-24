<script lang="ts">
	const services = [
        {
            title: 'Emergency House Lockout',
            desc: 'Locked out of your house? We’ll get you back in quickly with minimal disruption.',
            icon: '🚨'
        },
        {
            title: 'uPVC Door Unlocking',
            desc: 'Specialized in opening and repairing jammed or failed uPVC doors.',
            icon: '🚪'
        },
        {
            title: 'Non-Destructive Entry',
            desc: 'Whenever possible, we use lock-picking and bypass tools to avoid damaging your door.',
            icon: '🧰'
        },
        {
            title: 'Lock Repairs & Replacements',
            desc: 'We fix broken locks and replace them with secure, modern hardware.',
            icon: '🛠️'
        },
        {
            title: 'Window Lock Installation & Repair',
            desc: 'We install and service window locks to prevent unauthorized access and improve child safety.',
            icon: '🪟'
        },
        {
            title: 'Deadlocks & Padlocks',
            desc: 'We supply and install deadbolts, hasps, and heavy-duty padlocks for sheds, gates, and storage.',
            icon: '🔒'
        },
        {
            title: 'Lock Upgrades (Insurance-Approved)',
            desc: 'We fit British Standard locks that comply with your home insurance requirements.',
            icon: '✅'
        },
        {
            title: 'Safe Opening & Installation',
            desc: 'We open locked safes and securely install new ones for home or business.',
            icon: '🔐'
        },
        {
            title: 'Security Upgrades',
            desc: 'From anti-snap cylinders to restricted key systems — we make your property more secure.',
            icon: '🛡️'
        },
        {
            title: 'Post-Burglary Lock Replacement',
            desc: 'After a break-in or attempted burglary, we replace damaged locks quickly and reinforce your entry points.',
            icon: '🚓'
        },
        {
            title: 'Key Extraction (Broken Key Removal)',
            desc: 'We safely remove broken keys stuck inside locks without damaging the mechanism.',
            icon: '🗝️'
        },
        {
            title: 'Mailbox & Cabinet Lock Services',
            desc: 'Lost the key to a mailbox or office cabinet? We unlock and replace small utility locks.',
            icon: '📬'
        },
        {
            title: 'High-Security Lock Fitting',
            desc: 'We fit commercial-grade and anti-bump, anti-snap locks to secure high-value areas.',
            icon: '🔐'
        },
        {
            title: 'Master Key Systems (Small Office)',
            desc: 'We install master key systems to give office managers access while restricting staff entry to select areas.',
            icon: '🧑‍💼'
        },
    ];
</script>

<svelte:head>
	<title>Locksmith Services Near You | Emergency, Safe, Lock Repair & More</title>
	<meta name="description" content="Explore our full range of locksmith services for home and office doors. No car unlocking. Emergency access, safe installations, lock repairs, and more." />
</svelte:head>

<section class="bg-background-white text-text-base py-16">
	<div class="max-w-6xl mx-auto px-4">
		<h1 class="text-4xl font-bold text-primary text-center mb-4">Our Locksmith Services</h1>
		<p class="text-center text-sm text-gray-500 max-w-xl mx-auto mb-10">
			Professional locksmith services for residential and commercial doors. No matter the issue — we've got you covered.
		</p>

		<div class="grid md:grid-cols-2 gap-8">
			{#each services as service}
				<div class="bg-white border border-gray-200 rounded shadow hover:shadow-lg p-6 transition">
					<div class="text-3xl mb-2">{service.icon}</div>
					<h2 class="text-xl font-semibold text-primary mb-1">{service.title}</h2>
					<p class="text-sm">{service.desc}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 bg-[#fff7f4] border border-accent text-text-base px-6 py-6 mt-8 mb-4 rounded">
			<h3 class="text-lg font-semibold text-accent mb-2">Please note:</h3>
			<ul class="list-disc pl-5 text-sm space-y-1">
				<li>We <strong>do not offer car or vehicle unlocking services</strong>.</li>
				<li>All services apply to <strong>home, office and safe locks only</strong>.</li>
				<li>We are available <strong>24/7 including holidays</strong>.</li>
				<li>We have <strong>locksmith service near you</strong>.</li>
			</ul>
		</div>

		<!-- CTA -->
		<div class="mt-12 text-center">
			<p class="mb-4 font-medium text-lg">Need help right now?</p>
			<a href="tel:03307890914" class="inline-block bg-accent text-white px-6 py-3 rounded hover:opacity-90 transition font-semibold"
                on:click={(e) => {
                e.preventDefault();
                gtag_report_conversion('tel:03307890914');
            }}>
				📞 Call Now: 0330 789 0914
			</a>
		</div>
	</div>
</section>

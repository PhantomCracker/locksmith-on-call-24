<script>
	const values = [
		{
			title: 'Fast Response Time',
			desc: 'We’re local and mobile — meaning we can reach most locations in under 30 minutes.',
			icon: '⚡'
		},
		{
			title: '24/7, 365 Locksmith Service Near You',
			desc: 'Lockouts don’t follow business hours, and neither do we. We’re always available.',
			icon: '⏰'
		},
		{
			title: 'No Call-Out Fees',
			desc: 'We only charge for the job — not just for showing up. Fair and honest pricing.',
			icon: '💸'
		},
		{
			title: 'Trusted Since 2008',
			desc: 'We’ve helped thousands of customers over the years and earned a solid local reputation.',
			icon: '🏆'
		}
	];
</script>

<svelte:head>
	<title>About Locksmith on Call | Local, Trusted Locksmith Since 2008 | Local Locksmith Near You</title>
	<meta name="description" content="Get to know Locksmith on Call – 24/7 locksmith service helping homes and businesses across United Kingdom and surrounding areas since 2008." />
</svelte:head>

<section class="bg-background-white text-text-base py-16">
	<div class="max-w-4xl mx-auto px-4">
		<h1 class="text-4xl font-bold text-primary mb-4 text-center">About Locksmith on Call</h1>
		<div class="flex flex-col md:flex-row items-center gap-8 mt-8">
			<img
				src="/images/locksmith-on-call-founder-768.webp"
				srcset="
					/images/locksmith-on-call-founder-480.webp 480w,
					/images/locksmith-on-call-founder-768.webp 768w,
					/images/locksmith-on-call-founder.webp 1024w
				"
				sizes="(max-width: 768px) 100vw, 50vw"
				alt="Emergency local locksmith near you"
				loading="lazy"
				width="768"
				height="512"
				class="w-full md:w-1/2 rounded shadow border"
			/>

			<div>
				<p class="text-sm leading-relaxed">
                    Back in 2008, Locksmith on Call started with just a toolbox, an old van and a commitment to helping people out of stressful situations with speed and respect.
                    <br /><br />
                    We had been working in building maintenance and physical security for years, often subcontracted by bigger firms — and we saw how many customers were being left waiting for hours, overcharged or treated like just another ticket number. We knew there was a better way to do things — local, honest and personal.
                    <br /><br />
                    So we went out on our own. It wasn’t glamorous in the early days — long nights, 2am callouts and learning how to run a real business between jobs. But it was worth it. We got to meet real people in real emergencies — from parents locked out with their toddlers inside, to elderly neighbours locked out in the cold. That’s when it really hit me: this isn’t just about locks. It’s about showing up for people when they need it most.
                    <br /><br />
                    Over the last 15+ years, Locksmith on Call has grown through word of mouth and reputation — not gimmicks. We’ve expanded our tools, our team, and our service area, but we’ve never lost sight of what matters most: fast, fair and professional service you can count on.
                    <br /><br />
                    Today, we proudly serve homes, flats, offices, landlords and small businesses across the entire United Kingdom. Whether it’s an emergency lockout, safe installation or a simple lock upgrade, we still approach every job with urgency, care and the same honest values we started with.
                </p>

			</div>
		</div>

		<div class="grid sm:grid-cols-2 gap-6 mt-12">
			{#each values as v}
				<div class="p-6 bg-white border border-gray-200 rounded shadow-sm hover:shadow transition text-center">
					<div class="text-3xl mb-2">{v.icon}</div>
					<h2 class="text-lg font-semibold text-primary mb-1">{v.title}</h2>
					<p class="text-sm">{v.desc}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center">
			<p class="text-lg font-medium">We’re here when you need us — any day, any time.</p>
			<a href="tel:03307890914" class="inline-block mt-4 bg-accent text-white px-6 py-3 rounded hover:opacity-90 transition font-semibold"
					on:click={(e) => {
				e.preventDefault();
				gtag_report_conversion('tel:03307890914');
			}}>
				📞 Call Now: 0330 789 0914
			</a>
		</div>
	</div>
</section>

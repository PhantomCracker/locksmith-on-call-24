<script lang="ts">
	const testimonials = [
		{ name: 'Andre T.', text: 'We had a burglary scare — Locksmith on Call upgraded all our locks the same evening. Very reassuring.', date: 'June 2025' },
		{ name: 'Ibrahim Y.', text: 'Even on a Sunday afternoon, they showed up fast and fixed our broken back door lock cleanly.', date: 'June 2025' },
		{ name: 'Becky D.', text: 'Needed all my house locks changed after losing keys. Super quick, no pressure, and transparent pricing.', date: 'May 2025' },
		{ name: 'Charlotte E.', text: 'Incredible service! Got locked out with my dog inside. They were calm, professional, and got me back in safely.', date: 'May 2025'},
		{ name: 'Samir R.', text: 'Great experience — called them for a safe installation in our office and it was handled perfectly.', date: 'April 2025' },
		{ name: 'Daniel M.', text: 'Called at 3am, they arrived in 25 minutes and opened the door in seconds. Life saver!', date: 'January 2025' },
		{ name: 'Sofia P.', text: 'The safe was stuck shut — they opened it quickly without damage and installed a new one too.', date: 'February 2025' },
		{ name: 'Chloe H.', text: 'I locked myself out with the oven still on. They got there in 18 minutes. Honestly saved the day.', date: 'March 2025' },

		{ name: 'Dani K.', text: 'I’ve used them twice in 2024 — once for a lockout and once to install a safe. Always fast and polite.', date: 'October 2024' },
		{ name: 'George A.', text: 'They fixed a jammed commercial lock on short notice. Lifesavers for small business owners.', date: 'August 2024' },
		{ name: 'Hannah S.', text: 'Their WhatsApp support helped me book them super quickly when my key snapped in the lock.', date: 'July 2024' },
		{ name: 'Viktor Z.', text: 'Locksmith on Call was the only one who answered during a Sunday storm. Highly recommend.', date: 'May 2024' },
		{ name: 'Ella D.', text: 'They installed new anti-snap locks on all our doors after we moved. I feel much safer now.', date: 'March 2024' },

		{ name: 'Tariq A.', text: 'Needed emergency help in Birmingham. They arrived fast, were polite, and transparent with pricing.', date: 'December 2024' },
		{ name: 'Leah G.', text: 'Lost keys during holidays. Locksmith on Call answered immediately and got me in. Highly recommended.', date: 'September 2024' },

		{ name: 'James F.', text: 'Our office lock failed. They replaced it the same day with a high-security one. Fast and clean.', date: 'July 2023' },
		{ name: 'Ella B.', text: 'Had a jammed UPVC lock — they repaired it with no mess. Affordable and professional.', date: 'April 2023' },

		{ name: 'Nina S.', text: 'Used them for both my home and my mum’s flat. Always fast, friendly and on time.', date: 'November 2022' },
		{ name: 'Omar D.', text: 'They rekeyed our entire property after a break-in. Made us feel safe again.', date: 'June 2022' },

		{ name: 'Luca W.', text: 'Needed a British Standard lock upgrade for insurance. Great advice and fast install.', date: 'October 2021' },
		{ name: 'Maya T.', text: 'Got locked out with a toddler. They were kind, quick, and stress-free. True pros.', date: 'May 2021' },

		{ name: 'Ben C.', text: 'They removed a broken key from the lock without any damage. Very skilled.', date: 'August 2020' },
		{ name: 'Holly J.', text: 'Installed a small safe in my home office. Super secure and discrete.', date: 'February 2020' },

		{ name: 'Zara L.', text: 'Called after midnight and got in within 30 minutes. Very reliable.', date: 'December 2019' },
		{ name: 'Nick R.', text: 'They fixed a misaligned lock that two other locksmiths couldn’t handle. Highly recommend.', date: 'March 2019' },

		{ name: 'Freya V.', text: 'Needed lock help in a rush — they came faster than expected and were lovely.', date: 'June 2018' },
		{ name: 'Ethan M.', text: 'We use them for all our rental properties. Always dependable and honest.', date: 'January 2018' },

		{ name: 'Grace P.', text: 'Replaced a failed smart lock with a manual backup. Explained everything clearly.', date: 'November 2017' },

		{ name: 'Noah K.', text: 'Used them twice over the years — consistent, friendly, and fair pricing.', date: 'April 2016' },

		{ name: 'Amelia H.', text: 'They got us back in and changed the locks the same day. Can’t thank them enough.', date: 'August 2015' },

		{ name: 'Thomas B.', text: 'Installed a commercial-grade lock on our shop. Precise and secure.', date: 'October 2014' },

		{ name: 'Olivia W.', text: 'The only locksmith we call for our home and office. Always reliable.', date: 'June 2013' },

		{ name: 'Harry M.', text: 'Very professional. Explained options clearly and completed work quickly.', date: 'February 2012' },

		{ name: 'Isla D.', text: 'Affordable and honest. What more do you want from a locksmith?', date: 'December 2011' },

		{ name: 'Liam C.', text: 'Saved us when our door slammed shut with the keys inside.', date: 'July 2010' },

		{ name: 'Megan T.', text: 'Found them through a friend and never looked back. Excellent service.', date: 'March 2009' },

		{ name: 'Jack H.', text: 'Used them when we moved into our first home in 2008. Still our go-to today.', date: 'September 2008' }
	];

	let current = 0;

	const next = () => current = (current + 1) % testimonials.length;
	const prev = () => current = (current - 1 + testimonials.length) % testimonials.length;

	const autoSlide = setInterval(() => {
		next();
	}, 15000);

	import { onDestroy } from 'svelte';
	onDestroy(() => clearInterval(autoSlide));
</script>

<section class="bg-white py-16 text-text-base">
	<div class="max-w-3xl mx-auto px-4 text-center">
		<h2 class="text-3xl font-bold text-primary mb-10">What Our Clients Say</h2>

		<!-- Slide -->
		<div class="relative border border-gray-200 rounded-lg shadow p-6">
			<div class="text-yellow-500 text-lg mb-2">⭐⭐⭐⭐⭐</div>
			<p class="italic mb-4">"{testimonials[current].text}"</p>
			<p class="font-semibold text-sm">{testimonials[current].name}</p>
			<p class="text-xs text-gray-500">{testimonials[current].date}</p>

			<!-- Controls -->
			<div class="top-1/2 -translate-y-1/2 w-full flex justify-between">
				<button
					on:click={prev}
					class="bg-gray-100 hover:bg-gray-200 text-xl px-3 py-1 rounded-full shadow"
					aria-label="Previous testimonial"
				>&larr;</button>

				<button
					on:click={next}
					class="bg-gray-100 hover:bg-gray-200 text-xl px-3 py-1 rounded-full shadow"
					aria-label="Next testimonial"
				>&rarr;</button>
			</div>
		</div>
	</div>
</section>

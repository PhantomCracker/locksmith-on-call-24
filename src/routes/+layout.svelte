<script lang="ts">
	import '../app.css';

	let mobileNavOpen = false;
</script>

<div class="flex flex-col min-h-screen bg-background-white text-text-base">

	<!-- 🧭 Navigation -->
	<header class="bg-background-white shadow-md sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-2 font-bold text-lg text-primary">
				<span class="material-symbols-outlined text-2xl">lock</span>
				<span>Locksmith on Call</span>
			</a>

			<!-- Desktop Nav -->
			<nav class="hidden md:flex gap-6 items-center">
				<a href="/" class="hover:text-primary transition">Home</a>
				<a href="/services" class="hover:text-primary transition">Services</a>
				<a href="/about" class="hover:text-primary transition">About</a>
				<a href="/contact" class="hover:text-primary transition">Contact</a>
				<a href="tel:0123456789" class="bg-accent text-white px-4 py-2 rounded hover:opacity-90 transition flex items-center gap-1">
					<span class="material-symbols-outlined">call</span>
					Call Now
				</a>
			</nav>

			<!-- Mobile Menu Button -->
			<button class="md:hidden" on:click={() => mobileNavOpen = !mobileNavOpen}>
				<span class="material-symbols-outlined text-3xl text-primary">menu</span>
			</button>
		</div>

		<!-- Mobile Nav -->
		{#if mobileNavOpen}
			<nav class="md:hidden bg-background-white border-t border-gray-200 px-4 py-3 flex flex-col gap-3">
				<a href="/" class="hover:text-primary">Home</a>
				<a href="/services" class="hover:text-primary">Services</a>
				<a href="/about" class="hover:text-primary">About</a>
				<a href="/contact" class="hover:text-primary">Contact</a>
				<a href="tel:0123456789" class="bg-accent text-white px-4 py-2 rounded text-center hover:opacity-90">
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
				<p>📍 Serving Greater London</p>
				<p>📞 <a href="tel:0123456789" class="text-accent hover:underline">0123 456 789</a></p>
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
		href="tel:0123456789"
		class="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-[var(--color-accent)] text-white text-center font-semibold py-3 rounded shadow-lg hover:opacity-90 transition"
	>
		📞 Call Now: 0123 456 789
	</a>
</div>

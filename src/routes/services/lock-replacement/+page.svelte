<script>
  export let title = 'Lock Replacement & Installation';
  export let description = 'Secure your home or office with high-quality British Standard locks installed by professionals.';
</script>

<svelte:head>
  <title>{title} | Locksmith on Call</title>
  <meta name="description" content={description} />
</svelte:head>

<section class="relative py-20 bg-gradient-to-br from-[var(--color-background-white)] to-gray-100 text-[var(--color-text-base)] overflow-hidden">
  <div class="absolute inset-0 opacity-10 bg-[url('/images/patterns/lock-bg-pattern.svg')] bg-repeat"></div>
  <div class="relative z-10 max-w-5xl mx-auto px-4 text-center">
    <h1 class="text-5xl md:text-6xl font-extrabold text-[var(--color-primary)] mb-4 leading-tight drop-shadow-md">{title}</h1>
    <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">{description}</p>

    <img src="/images/services/lock-replacement.webp" alt="Locksmith replacing a high-security door lock" class="mx-auto w-full md:w-3/4 rounded-2xl shadow-xl mb-12 border-[6px] border-[var(--color-primary)]" />

    <div class="grid gap-10 text-left">
      <p class="text-lg">When it comes to securing your property, high-quality locks make all the difference. Our locksmiths provide professional installation and replacement of <strong>British Standard locks</strong> approved by insurance providers and trusted across the UK.</p>

      <p class="text-lg">Whether you're upgrading for enhanced protection, replacing a damaged lock, or just moved into a new property, we’ve got the right solution for you. We offer a wide selection of deadlocks, euro cylinders, sash locks, and anti-snap cylinders for both homes and businesses.</p>

      <p class="text-lg">Our process ensures a precise and secure fit that maintains your door’s integrity and boosts long-term security. We’ll also advise you on the best type of lock based on your needs and insurance requirements.</p>

      <div class="border-t border-gray-300 pt-8">
        <h2 class="text-2xl font-semibold text-[var(--color-primary)] mb-4">🔧 How We Replace & Install Locks</h2>
        <ol class="list-decimal pl-6 text-lg space-y-2">
          <li>🔍 <strong>Assessment:</strong> We inspect the existing lock and door structure for compatibility.</li>
          <li>🗝️ <strong>Recommendation:</strong> Based on your needs, we suggest approved lock types (anti-snap, deadbolt, smart lock, etc).</li>
          <li>🛠️ <strong>Precision Installation:</strong> We remove the old lock, prepare the door, and install the new lock with secure fittings.</li>
          <li>🔐 <strong>Testing:</strong> We ensure the lock operates smoothly with no alignment issues or friction.</li>
          <li>✅ <strong>Final Check & Advice:</strong> We provide guidance on lock care and issue new keys securely.</li>
        </ol>
      </div>

      <div class="border-t border-gray-300 pt-8">
        <h2 class="text-2xl font-semibold text-[var(--color-primary)] mb-4">💡 Why Choose Us</h2>
        <ul class="list-disc pl-6 text-left text-lg space-y-2">
          <li>✅ Insurance-approved British Standard locks</li>
          <li>✅ Professional fitting for homes and offices</li>
          <li>✅ Enhanced protection against lock snapping and drilling</li>
          <li>✅ Friendly, experienced, DBS-checked locksmiths</li>
          <li>✅ No hidden fees – transparent pricing every time</li>
        </ul>
      </div>

      <div class="text-center">
        <a href="tel:03307890914" class="inline-block mt-10 bg-[var(--color-accent)] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-orange-700 transition-transform transform hover:scale-105">
          🔒 Upgrade Your Locks Today – Call Now
        </a>
      </div>
    </div>
  </div>
</section>

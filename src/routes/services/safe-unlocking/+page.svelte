<script>
  export let title = 'Safe Unlocking & Installation';
  export let description = 'We open locked safes and install secure models for homes and offices with complete discretion and professionalism.';
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

    <img src="/images/services/safe-unlocking.webp" alt="Locksmith unlocking a digital safe" class="mx-auto w-full md:w-3/4 rounded-2xl shadow-xl mb-12 border-[6px] border-[var(--color-primary)]" />

    <div class="grid gap-10 text-left">
      <p class="text-lg">Locked out of your safe or need a new one professionally installed? Our locksmiths are trained in <strong>non-destructive safe opening</strong> techniques and experienced in fitting a wide variety of home and office safes.</p>

      <p class="text-lg">We understand the importance of discretion and security. Whether it’s a lost code, broken mechanism, or faulty dial, we work with precision and care to open your safe without damage whenever possible.</p>

      <p class="text-lg">We also provide secure installation for fireproof, digital, wall, and floor safes. From selecting the right model to anchoring it correctly, we handle the full setup process so you can store valuables with peace of mind.</p>

      <div class="border-t border-gray-300 pt-8">
        <h2 class="text-2xl font-semibold text-[var(--color-primary)] mb-4">🔐 How We Unlock & Install Safes</h2>
        <ol class="list-decimal pl-6 text-lg space-y-2">
          <li>🔍 <strong>Assessment:</strong> We identify the safe model, locking method, and access issue.</li>
          <li>🧠 <strong>Access Strategy:</strong> We use safe-specific decoding, manipulation, or override methods.</li>
          <li>🛠️ <strong>Non-Destructive Entry:</strong> Whenever possible, we open the safe without drilling or damage.</li>
          <li>📦 <strong>Installation:</strong> For new safes, we anchor and level them in place using manufacturer guidelines.</li>
          <li>✅ <strong>Testing & Advice:</strong> We demonstrate use, update combination codes, and provide storage tips.</li>
        </ol>
      </div>

      <div class="border-t border-gray-300 pt-8">
        <h2 class="text-2xl font-semibold text-[var(--color-primary)] mb-4">💡 Why Choose Us</h2>
        <ul class="list-disc pl-6 text-left text-lg space-y-2">
          <li>✅ Safe opening with minimal disruption</li>
          <li>✅ Installation of fireproof and insurance-rated safes</li>
          <li>✅ Experienced with all locking mechanisms</li>
          <li>✅ Discreet, trustworthy, and DBS-checked locksmiths</li>
          <li>✅ Professional advice tailored to your needs</li>
        </ul>
      </div>

      <div class="text-center">
        <a href="tel:03307890914" class="inline-block mt-10 bg-[var(--color-accent)] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-orange-700 transition-transform transform hover:scale-105">
          📦 Need a Safe Opened or Installed? Call Now
        </a>
      </div>
    </div>
  </div>
</section>

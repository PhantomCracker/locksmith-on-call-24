<script>
  export let title = 'Emergency Lockout (Home & Office)';
  export let description = 'Locked out of your home or business? We provide fast, non-destructive entry 24/7.';
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

    <img src="/images/services/emergency-lockout.webp" alt="Emergency locksmith unlocking door" class="mx-auto w-full md:w-3/4 rounded-2xl shadow-xl mb-12 border-[6px] border-[var(--color-primary)]" />

    <div class="grid gap-8 text-left">
      <p class="text-lg">Whether you're locked out late at night or early in the morning, our locksmiths are on call <strong>24/7</strong> to get you back inside quickly and without damage. We use <strong>non-destructive methods</strong> to preserve the integrity of your locks and doors.</p>

      <p class="text-lg">This service is designed for <strong>speed, safety, and peace of mind</strong>. We aim to reach you within <strong>30 minutes</strong> of your call. Our experienced technicians carry a full range of tools to handle any lockout scenario — including deadbolts, euro cylinders, and smart locks.</p>

      <p class="text-lg">Whether you lost your keys, snapped one in the lock, or face a faulty mechanism, our pros will help — no call-out fees, no stress, no damage. Homes, flats, offices — we’ve got you covered.</p>

      <p class="text-lg">Here’s how we solve your lockout problem step-by-step:</p>
      <ol class="list-decimal pl-6 text-lg space-y-2">
        <li>🔍 <strong>Assessment:</strong> We assess your lock type, door material, and entry point.</li>
        <li>🛠️ <strong>Non-Destructive Entry:</strong> We first try to pick or manipulate the lock using specialized tools.</li>
        <li>🔓 <strong>Entry:</strong> If required, we may use a bypass or decoding tool to open high-security locks.</li>
        <li>🔐 <strong>Repair or Replace:</strong> If the lock is damaged or faulty, we offer immediate on-site replacement with insurance-approved locks.</li>
        <li>✅ <strong>Final Test & Advice:</strong> We ensure full functionality and provide advice on how to avoid similar issues in the future.</li>
      </ol>

      <div class="border-t border-gray-300 pt-8">
        <h2 class="text-2xl font-semibold text-[var(--color-primary)] mb-4">💡 Why Choose Us</h2>
        <ul class="list-disc pl-6 text-left text-lg space-y-2">
            <li>✅ Rapid 24/7 emergency response</li>
            <li>✅ Non-destructive access methods</li>
            <li>✅ Fully licensed, DBS-checked locksmiths</li>
            <li>✅ Transparent pricing, no hidden fees</li>
            <li>✅ Residential & commercial coverage</li>
        </ul>
      </div>

      <div class="text-center">
        <a href="tel:03307890914" class="inline-block mt-10 bg-[var(--color-accent)] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-orange-700 transition-transform transform hover:scale-105">
          📞 Call Now – We Can Be There in Under 30 Minutes
        </a>
      </div>
    </div>
  </div>
</section>
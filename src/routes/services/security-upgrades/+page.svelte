<script>
  export let title = 'Security Upgrades';
  export let description = 'We install anti-snap cylinders, high-security deadbolts, and insurance-approved locks to improve your safety and meet compliance.';
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

    <img src="/images/services/security-upgrades.webp" alt="Locksmith installing a high-security deadbolt" class="mx-auto w-full md:w-3/4 rounded-2xl shadow-xl mb-12 border-[6px] border-[var(--color-primary)]" />

    <div class="grid gap-10 text-left">
      <p class="text-lg">Whether you're securing your home or business, our <strong>lock security upgrades</strong> are designed to stop intruders and comply with insurance requirements. We install anti-snap cylinders, smart locks, high-security deadbolts, and door reinforcement hardware.</p>

      <p class="text-lg">Our locksmiths provide tailored advice based on your existing door types and vulnerability assessments. From basic improvements to complete overhauls, we help you take proactive control of your property's security.</p>

      <p class="text-lg">All installations are performed with precision and discretion, ensuring enhanced protection with minimal disruption. Your peace of mind is our priority.</p>

      <div class="border-t border-gray-300 pt-8">
        <h2 class="text-2xl font-semibold text-[var(--color-primary)] mb-4">🛡️ How We Upgrade Your Locks</h2>
        <ol class="list-decimal pl-6 text-lg space-y-2">
          <li>🏠 <strong>Security Survey:</strong> We assess your current locks and door hardware for weak points.</li>
          <li>🔍 <strong>Recommendation:</strong> We suggest BS3621-approved locks, anti-snap cylinders, or smart locks.</li>
          <li>🔧 <strong>Installation:</strong> We remove outdated locks and professionally fit your upgraded components.</li>
          <li>🧪 <strong>Testing:</strong> We check all locks for smooth operation and reinforce fixings where needed.</li>
          <li>✅ <strong>Advice:</strong> We walk you through your new system and offer maintenance guidance.</li>
        </ol>
      </div>

      <div class="border-t border-gray-300 pt-8">
        <h2 class="text-2xl font-semibold text-[var(--color-primary)] mb-4">💡 Why Choose Us</h2>
        <ul class="list-disc pl-6 text-left text-lg space-y-2">
          <li>✅ British Standard (BS3621) lock upgrades</li>
          <li>✅ Anti-snap, anti-drill, and anti-pick cylinder installation</li>
          <li>✅ Smart lock solutions available</li>
          <li>✅ Insurance compliance and peace of mind</li>
          <li>✅ Friendly, vetted locksmiths with fast service</li>
        </ul>
      </div>

      <div class="text-center">
        <a href="tel:+441234567890" class="inline-block mt-10 bg-[var(--color-accent)] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-orange-700 transition-transform transform hover:scale-105">
          🔐 Secure Your Property – Call Now for an Upgrade
        </a>
      </div>
    </div>
  </div>
</section>

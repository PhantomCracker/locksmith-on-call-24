<script>
  export let title = 'UPVC Door & Lock Repairs';
  export let description = 'We repair faulty mechanisms and broken locks on residential and commercial UPVC doors quickly and efficiently.';
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

    <img src="/images/services/upvc-repair.webp" alt="Locksmith repairing UPVC door mechanism" class="mx-auto w-full md:w-3/4 rounded-2xl shadow-xl mb-12 border-[6px] border-[var(--color-primary)]" />

    <div class="grid gap-10 text-left">
      <p class="text-lg">UPVC doors are widely used for their durability and insulation, but their locking mechanisms can fail due to wear, alignment issues, or damage. Our expert locksmiths specialize in <strong>non-destructive UPVC lock repairs</strong> for both homes and businesses.</p>

      <p class="text-lg">We carry a full range of UPVC gearboxes, multipoint locking strips, and replacement handles to ensure we can repair or replace parts on the spot. Our focus is on restoring full functionality without needing to replace the entire door or frame.</p>

      <p class="text-lg">Whether your door is jammed, won't lock, or the handle is stiff, our repairs are fast, effective, and cost-efficient. Most issues are fixed within one visit.</p>

      <div class="border-t border-gray-300 pt-8">
        <h2 class="text-2xl font-semibold text-[var(--color-primary)] mb-4">🛠️ How We Repair UPVC Doors</h2>
        <ol class="list-decimal pl-6 text-lg space-y-2">
          <li>🔍 <strong>Inspection:</strong> We assess the entire mechanism, handle, cylinder, and alignment.</li>
          <li>🧰 <strong>Diagnosis:</strong> We identify whether the issue is with the lock case, gearbox, or door frame.</li>
          <li>🔧 <strong>Repair or Replace:</strong> We fit compatible UPVC parts from our stocked van to restore operation.</li>
          <li>🚪 <strong>Alignment:</strong> We realign the door hinges or keeps to ensure smooth locking and closing.</li>
          <li>✅ <strong>Testing:</strong> We verify the lock engages cleanly and provide usage tips to avoid repeat issues.</li>
        </ol>
      </div>

      <div class="border-t border-gray-300 pt-8">
        <h2 class="text-2xl font-semibold text-[var(--color-primary)] mb-4">💡 Why Choose Us</h2>
        <ul class="list-disc pl-6 text-left text-lg space-y-2">
          <li>✅ Fast repairs for jammed or faulty UPVC door locks</li>
          <li>✅ Full range of parts carried on-site</li>
          <li>✅ Avoid costly door replacements</li>
          <li>✅ Trusted experts with over a decade of experience</li>
          <li>✅ Clear pricing and honest recommendations</li>
        </ul>
      </div>

      <div class="text-center">
        <a href="tel:03307890914" class="inline-block mt-10 bg-[var(--color-accent)] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-orange-700 transition-transform transform hover:scale-105">
          🔧 Get Your UPVC Door Fixed Today – Call Now
        </a>
      </div>
    </div>
  </div>
</section>

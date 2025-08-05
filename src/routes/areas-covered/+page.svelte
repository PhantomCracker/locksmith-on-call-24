<script lang="ts">
    const cities = [
        'Blackpool',
        'Gloucester',
        'Preston',
        'Swindon',
        'Norwich',
        'Stoke-on-Trent',
        'Colchester',
        'Ipswich',
        'Newcastle',
        'Oxford',
        'Leicester',
        'Birmingham',
        'Cambridge',
        'Leeds',
        'Wakefield',
        'Huddersfield',
        'Bradford',
        'Halifax',
        'Liverpool',
        'Warrington',
        'Wigan',
        'Chester',
        'Sheffield',
        'Doncaster',
        'Bristol',
        'Milton-Keynes',
        'Northampton',
        'Romford',
        'Ilford',
        'Chelmsford',
        'Southend-on-Sea',
        'Crewe',
        'Stevenage',
        'Hemel-Hempstead',
        'St-Albans',
        'Watford',
        'Reading'
    ];
</script>

<svelte:head>
  <title>Service Areas | Locksmith on Call</title>
  <meta name="description" content="Find all the areas where Locksmith on Call provides 24/7 emergency locksmith services. Local, trusted and fast." />
</svelte:head>

<section class="py-16 bg-background-white text-text-base">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold text-primary mb-4">
      Locksmith Service Areas
    </h1>
    <p class="text-gray-600 mb-8">
      We proudly serve the following cities and surrounding areas with fast 24/7 emergency locksmith services.
    </p>

    <div class="grid sm:grid-cols-2 gap-4 mt-8 text-left max-w-xl mx-auto">
      {#each cities as city}
        <a
          href={`/locksmith-in-${city.toLowerCase()}`}
          class="block px-4 py-3 bg-white border rounded hover:bg-primary hover:text-white transition"
        >
          🔑 Emergency Local Locksmith in <span class="font-bold text-accent">{city}</span>
        </a>
      {/each}
    </div>
  </div>
</section>

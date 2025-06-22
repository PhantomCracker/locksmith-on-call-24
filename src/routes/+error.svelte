<script lang="ts">
    export let error: Error & { status?: number };
    export let status: number;
</script>

<svelte:head>
    <title>{status === 404 ? 'Page Not Found' : 'An Error Occurred'} | Locksmith on Call</title>
    <meta name="robots" content="noindex" />
</svelte:head>

<section class="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 py-12 bg-[var(--color-background-white)] text-[var(--color-text-base)]">
    <h1 class="text-5xl font-bold text-[var(--color-primary)] mb-4">{status}</h1>
    <p class="text-xl font-semibold mb-4">
        {status === 404 ? 'Oops! Page not found.' : 'Something went wrong.'}
    </p>
    <p class="mb-6 opacity-80">
        {status === 404
        ? "The page you're looking for doesn't exist or has been moved."
        : error}
    </p>
    <a href="/" class="bg-[var(--color-primary)] text-white px-6 py-3 rounded hover:bg-blue-800 transition">
        🔙 Back to Home
    </a>
</section>

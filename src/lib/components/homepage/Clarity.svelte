<script lang="ts">
    import { onMount } from 'svelte';
    let Clarity: typeof import('@microsoft/clarity').default;

    onMount(async () => {
        if (import.meta.env.PROD && typeof window !== 'undefined') {
            Clarity = (await import('@microsoft/clarity')).default;
            Clarity.init('scd38111k1');
        }
    });
</script>

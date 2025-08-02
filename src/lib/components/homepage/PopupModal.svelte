<script lang="ts">
  import { onMount } from 'svelte';

  let showModal = false;

  onMount(() => {
    const shown = sessionStorage.getItem('modalShown');
    if (!shown) {
      setTimeout(() => {
        showModal = true;
        sessionStorage.setItem('modalShown', 'true');
      }, 15000);
    }
  });

  function closeModal() {
    showModal = false;
  }
</script>

{#if showModal}
  <div class="modal-overlay">
    <div class="modal-box">
      <h2 class="modal-title">🔐 Emergency locksmith needed?</h2>
      <p class="modal-text">We’re available 24/7 — average arrival in under 30 minutes.</p>

      <div class="modal-buttons">
        <a href="tel:03307890914" class="button-call" on:click={(e) => {
          e.preventDefault();
          gtag_report_conversion('tel:03307890914');
        }}>📞 Call Now</a>
        <a
          href="https://wa.me/447760595941?text=Hello%2C%20I%20need%20urgent%20locksmith%20assistance.%20Can%20you%20help%20me%20right%20now%3F"
          class="button-chat"
          target="_blank"
        >💬 Chat on WhatsApp</a>
      </div>

      <button class="modal-close" on:click={closeModal}>✖ Close</button>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    padding: 1rem;
  }

  .modal-box {
    background: var(--color-background-white, #F9F9F9);
    color: var(--color-text-base, #2C2C2C);
    max-width: 420px;
    width: 100%;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
    text-align: center;
    position: relative;
  }

  .modal-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary, #004AAD);
    margin-bottom: 0.5rem;
  }

  .modal-text {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .modal-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .button-call {
    background: var(--color-accent, #FF6B00);
    color: white;
    font-weight: bold;
    padding: 0.75rem;
    border-radius: 0.5rem;
    text-decoration: none;
    display: block;
    transition: background 0.2s;
  }

  .button-call:hover {
    background: #e65a00;
  }

  .button-chat {
    background: #25D366;
    color: white;
    font-weight: bold;
    padding: 0.75rem;
    border-radius: 0.5rem;
    text-decoration: none;
    display: block;
    transition: background 0.2s;
  }

  .button-chat:hover {
    background: #1da850;
  }

  .modal-close {
    background: none;
    border: none;
    color: #aaa;
    font-size: 1rem;
    cursor: pointer;
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    transition: color 0.2s;
  }

  .modal-close:hover {
    color: var(--color-text-base, #2C2C2C);
  }

  @media (min-width: 480px) {
    .modal-buttons {
      flex-direction: row;
      justify-content: center;
    }

    .button-call,
    .button-chat {
      width: 48%;
    }
  }
</style>

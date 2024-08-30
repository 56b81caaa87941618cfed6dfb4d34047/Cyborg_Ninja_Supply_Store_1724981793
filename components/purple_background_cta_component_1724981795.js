<!-- 
INSTRUCTION: Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
INSTRUCTION: It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
-->

<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden bg-gradient-to-br from-pink-500 to-purple-700 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg border border-pink-300 border-opacity-20">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-pink-600 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-60"></div>
          <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-[60px] bg-purple-500"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" class="#A855F7" />
                <stop offset="100%" class="6366F1" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="flex">
            <div id="content-subtitle-text" class="flex-1 font-medium text-lg bg-clip-text pb-3 text-transparent bg-gradient-to-r from-pink-200 to-purple-200">
              Embrace the Cosmic Warrior Within
            </div>
          </div>
          <div class="flex" id="content-title-container">
            <h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 text-4xl font-bold bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100">
              Transcend Reality, Become Legend
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p id="content-body" class="flex-1 text-lg mb-8 text-pink-50">
              Harness the power of celestial energies and cutting-edge tech. From stardust-infused blades to quantum stealth devices, we offer the ultimate arsenal for the cosmic cyber-warrior.
            </p>
          </div>
          <a id="content-cta-button" href="#0" class="btn transition duration-300 ease-in-out group text-purple-900 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 hover:from-pink-500 hover:via-purple-500 hover:to-pink-500 rounded-full px-6 py-3 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-70">
            Ascend Now
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-300 ease-in-out ml-2 text-purple-700">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>

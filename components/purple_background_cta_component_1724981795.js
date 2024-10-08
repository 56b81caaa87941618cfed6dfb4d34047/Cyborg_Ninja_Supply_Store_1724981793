<template>
  <section id="cta-section-container" style="min-height: 390px">
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
            <p class="text-lg text-yellow-300 mb-4">Ahoy, ye scurvy dogs! Hoist the Jolly Roger!</p>
          </div>
          <div class="flex" id="content-title-container">
            <h2 class="h2 font-bold text-4xl md:text-5xl text-white mb-4">
              Swashbucklin' Adventures on the High Seas
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p class="text-xl text-yellow-100 mb-8">
              From plunderin' booty to navigatin' treacherous waters, we've got the finest gear for every seafarin' situation. Whether ye be a captain or a lowly deck swab, we've got yer back, matey!
            </p>
            <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Cyborg_Ninja_Supply_Store_1724981793/main/images/ae7810a9fc3a4375adfcd8e63dec1d84.jpeg" alt="New Image" class="w-full h-auto mb-8 rounded-lg" />
            <div id="santa-email-form" class="mt-8 bg-blue-800 bg-opacity-20 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
              <h3 class="text-2xl font-bold text-yellow-300 mb-4">Send a Message to the Pirate Captain</h3>
              <form @submit.prevent="submitToSanta" class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-yellow-300">Yer Pirate Name</label>
                  <input type="text" id="name" v-model="santaForm.name" class="mt-1 block w-full rounded-md bg-blue-700 bg-opacity-20 border-transparent focus:border-yellow-500 focus:bg-blue-600 focus:ring-0 text-yellow-100" required>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-yellow-300">Yer Parrot's Signal</label>
                  <input type="email" id="email" v-model="santaForm.email" class="mt-1 block w-full rounded-md bg-blue-700 bg-opacity-20 border-transparent focus:border-yellow-500 focus:bg-blue-600 focus:ring-0 text-yellow-100" required>
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-yellow-300">Yer Message for the Cap'n</label>
                  <textarea id="message" v-model="santaForm.message" rows="4" class="mt-1 block w-full rounded-md bg-blue-700 bg-opacity-20 border-transparent focus:border-yellow-500 focus:bg-blue-600 focus:ring-0 text-yellow-100" required></textarea>
                </div>
                <button type="submit" class="w-full bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                  Send Yer Pirate Message!
                </button>
              </form>
            </div>
          </div>
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
      tab: null,
      santaForm: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    // Santa form submission method
    submitToSanta() {
      console.log('Sendin\' pirate message:', this.santaForm);
      // Add your form submission logic here
      // Reset form after submission
      this.santaForm = { name: '', email: '', message: '' };
    }
    // End of Santa form submission method
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
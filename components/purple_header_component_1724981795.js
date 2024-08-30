<template>
  <header class="w-full z-30" id="header-section-container">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-opacity-30 bg-blue-900 backdrop-filter backdrop-blur-lg">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site Branding -->
        <div id="site-branding" class="flex-1">
          <a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip">
            <img id="logo-image" class="max-w-none" src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Cyborg_Ninja_Supply_Store_1724981793/main/images/47d5e053875848cf91ef7130e51374c7.jpeg" width="38" height="38" alt="Stellar">
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav id="desktop-navigation" class="hidden md:flex md:grow">
          <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
            <li>
              <a
                id="Gear-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-blue-200 hover:text-white"
                href="Gear.html"
              >
                Booty and Plunder
              </a>
            </li>
            <li>
              <a
                id="Upgrades-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-blue-200 hover:text-white"
                href="Upgrades.html"
              >
                Ship Upgrades
              </a>
            </li>
            <li>
              <a
                id="Training-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-blue-200 hover:text-white"
                href="Training.html"
              >
                Swashbucklin' Training
              </a>
            </li>
            <li>
              <a
                id="Missions-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-blue-200 hover:text-white"
                href="Missions.html"
              >
                High Seas Missions
              </a>
            </li>
            <li>
              <a
                id="Support-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-blue-200 hover:text-white"
                href="Support.html"
              >
                Grog Support
              </a>
            </li>
          </ul>
        </nav>

        <!-- Desktop Sign In & Sign Up Links -->
        <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
          <li>
            <a
              id="sign-in-link"
              class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-blue-200 hover:text-white"
              href="signin.html"
            >
              Board Ship
            </a>
          </li>
          <li class="ml-6">
            <a
              id="sign-up-link"
              class="btn-sm transition duration-150 ease-in-out w-full group relative text-white hover:text-blue-200 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full px-4 py-2 shadow-lg"
              href="signup.html"
            >
              <span class="relative inline-flex items-center"> Join Pirate Crew <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-blue-200">-&gt;</span> </span>
            </a>
          </li>
        </ul>

        <!-- Mobile Menu -->
        <div class="md:hidden flex items-center ml-4">
          <button
            id="hamburger-button"
            class="hamburger"
            :class="{ active: expanded }"
            @click.stop="expanded = !expanded"
            aria-controls="mobile-nav"
            :aria-expanded="expanded"
          >
            <span class="sr-only">Menu</span>
            <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-blue-200 hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <rect y="2" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="16" width="20" height="2" rx="1" />
            </svg>
          </button>

          <nav
            id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            x-ref="mobileNav"
            :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'"
            @click.outside="expanded = false"
            @keydown.escape.window="expanded = false"
            x-cloak
          >
            <ul id="mobile-nav-list" class="border border-transparent rounded-lg px-4 py-1.5 bg-opacity-70 bg-blue-900 backdrop-filter backdrop-blur-lg">
              <li>
                <a id="mobile-Gear-link" class="flex font-medium text-sm py-1.5 text-blue-200 hover:text-white" href="Gear.html">Booty and Plunder</a>
              </li>
              <li>
                <a id="mobile-Upgrades-link" class="flex font-medium text-sm py-1.5 text-blue-200 hover:text-white" href="Upgrades.html">Ship Upgrades</a>
              </li>
              <li>
                <a id="mobile-Training-link" class="flex font-medium text-sm py-1.5 text-blue-200 hover:text-white" href="Training.html">Swashbucklin' Training</a>
              </li>
              <li>
                <a id="mobile-Missions-link" class="flex font-medium text-sm py-1.5 text-blue-200 hover:text-white" href="Missions.html">High Seas Missions</a>
              </li>
              <li>
                <a id="mobile-Support-link" class="flex font-medium text-sm py-1.5 text-blue-200 hover:text-white" href="Support.html">Grog Support</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PurpleHeaderComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
};
</script>
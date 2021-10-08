<template>
  <section class="container mx-auto text-center px-4">
    <header>
      <aside class="text-center flex justify-evenly py-4">
        <logo />
        <windi-css-logo />
      </aside>
      <h1 class="text-center text-2xl py-2">
        Welcome to the WindiCSS + Nuxt.js template
        <a
          href="https://github.com/king-11/Nuxt-template"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Repo"
        >
          <span
            class="iconify inline-block w-8 h-8"
            data-icon="carbon:logo-github"
          />
        </a>
      </h1>
    </header>
    <section>
      <h2 class="text-xl">Installed Packages</h2>
      <transition-group
        appear
        tag="ul"
        class="
          list-none
          grid
          my-8
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          container
          mx-auto
          items-center
        "
      >
        <li v-for="name in modules" :key="name" class="p-2 shadow-md my-2">
          {{ name }}
        </li>
      </transition-group>
    </section>
    <article>
      <div>
        <p class="py-2">
          Windi CSS is a next-generation utility-first CSS framework. Windi CSS
          is an on-demanded alternative to Tailwind, which provides faster load
          times, fully compatible with Tailwind v2.0 and with a bunch of
          additional cool features.
        </p>
        <address>
          <p>
            For more information on WindiCSS, check out the
            <a
              href="https://windicss.org/guide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>
          <p>
            If you have questions, please join the official
            <a
              href="https://chat.windicss.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/windicss/windicss/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a
            >.
          </p>
        </address>
        <blockquote>
          Thank you for developing with WindiCSS and I look forward to bringing
          more exciting features in the future.
          <em><small>&mdash; Voorjar</small></em>
        </blockquote>
      </div>
    </article>
    <address>
      <hr class="my-3" />
      <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
        Nuxt Documentation
      </a>
      <br />
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nuxt GitHub
      </a>
    </address>
    <nuxt-link to="/inspire">
      <i-c-code class="w-8 h-8 mx-auto" />
    </nuxt-link>
  </section>
</template>

<script>
import Logo from '@/components/Logo.vue'
import WindiCssLogo from '@/components/WindiCSS.vue'
import ICCode from '~icons/ic/outline-code'

export default {
  components: {
    Logo,
    WindiCssLogo,
    ICCode,
  },
  data() {
    return {
      modules: [
        'Nuxt WindiCSS',
        'Nuxt PWA',
        'Nuxt Robots',
        'Nuxt SiteMap',
        'Nuxt Content',
        'Nuxt Typescript',
        'Nuxt Composition API',
        'Nuxt Purge Icons',
        'Nuxt Axios',
        'ESLint',
        'Prettier',
        'Husky',
        'Sass',
      ],
    }
  },
}
</script>

<style lang="scss">
a {
  @apply text-cyan-600;
}
</style>

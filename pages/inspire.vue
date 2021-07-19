<template>
  <section>
    <figure class="flex flex-col items-center my-8">
      <img
        src="~/static/vite.svg"
        alt="ViteJS"
        class="mb-5"
        width="200"
        height="200"
      />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <nuxt-link to="/">
        <svg width="2em" height="2em" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor" />
        </svg>
      </nuxt-link>
    </figure>
    <transition appear>
      <article v-if="page" class="prose mx-auto text-left">
        <h1>{{ page.title }}</h1>
        <nuxt-content :document="page" />
      </article>
    </transition>
  </section>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  defineComponent,
  useAsync,
  useContext,
  Ref,
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { $content } = useContext()
    const page = useAsync(() =>
      $content('hello').fetch()
    ) as Ref<IContentDocument | null>
    return {
      page,
    }
  },
})
</script>

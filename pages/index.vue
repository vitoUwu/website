<script setup lang="ts">
const title = "vitoo";
const description =
  "Tenho 20 anos, sou estudante de Engenharia de Software e programo desde os meus 16 anos. Desenvolvo aplicações front-end, back-end, mobile, landing pages, e-commerce, blogs e APIs. Minhas principais tecnologias são Javascript, Typescript, React.js, Next.js, Fresh.js, Deno, PostgreSQL e MongoDB. Estou me aperfeiçoando em C#, Java, Vue.js e Nuxt.js. Tenho aproximadamente 1 ano de experiência profissional na área.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/cat.png",
  ogUrl: "https://vitoo.dev",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/cat.png",
  twitterCard: "summary",
});
</script>

<template>
  <div class="mx-10">
    <h1 class="text-xl font-bold">vitoo</h1>
    <div class="">
      <h2 class="inline items-center justify-between w-full text-zinc-400">
        Desenvolvedor Full Stack
        <span
          class="inline-block align-middle size-1 bg-emerald-500 rounded-full animate-pulse"
        />
        Brazil
      </h2>
    </div>
    <p class="my-10 text-pretty">
      Tenho 20 anos, sou estudante de Engenharia de Software e programo desde os
      meus 16 anos. Desenvolvo aplicações front-end, back-end, mobile, landing
      pages, e-commerce, blogs e APIs. Minhas principais tecnologias são
      Javascript, Typescript, React.js, Next.js, Fresh.js, Deno, PostgreSQL e
      MongoDB. Estou me aperfeiçoando em C#, Java, Vue.js e Nuxt.js. Tenho
      aproximadamente 1 ano de experiência profissional na área.
    </p>
    <Anchor target="_self" href="/projects" class=""> Projetos </Anchor>
    <Anchor target="_self" href="/works"> Experiências </Anchor>
    <hr class="w-full border-b-px border-zinc-700 my-3" />
    <Anchor href="https://github.com/vitoUwu">
      Github <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
    <Anchor href="https://linkedin.com/in/vitoo">
      LinkedIn <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
    <Anchor href="mailto:victorhugomeurerdelgrandi@gmail.com">
      Email <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
  </div>
</template>

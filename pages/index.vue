<script setup lang="ts">
const title = "vitoo";
const description =
  "Sou estudante de Engenharia de Software, comecei a programar com 16 anos e desde então sou apaixonado pela área de programação. Com as minhas habilidades, foco e disciplina, busco sempre vencer qualquer desafio. Estou sempre adquirindo conhecimento e aprimorando as minhas habilidades para alcançar meus objetivos, além de sempre estar atualizado sobre as tendências do mercado. Hoje tenho um grande conhecimento em HTML, CSS, Javascript, Node.js, Typescript, React.js, Next.js, Tailwind, MongoDB e MySQL, PostgreSQL. Também estou procurando aprender sobre Vue.js, Nuxt.js e C#. Já tive algumas experiências com Python e Java, porém nunca me aprofundei de fato.";

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
  <Spotify />
  <main class="mx-3 sm:mx-10 my-10 pb-20">
    <h1 class="text-xl font-bold">Victor "vitoo" Hugo M.</h1>
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
      Sou estudante de Engenharia de Software, comecei a programar com 16 anos e
      desde então sou apaixonado pela área de programação.<br /><br />Com as
      minhas habilidades, foco e disciplina, busco sempre vencer qualquer
      desafio. Estou sempre adquirindo conhecimento e aprimorando as minhas
      habilidades para alcançar meus objetivos, além de sempre estar atualizado
      sobre as tendências do mercado.<br /><br />
      Hoje tenho um grande conhecimento em HTML, CSS, Javascript, Node.js,
      Typescript, React.js, Next.js, Tailwind, MongoDB e MySQL, PostgreSQL.
      Também estou procurando aprender sobre Vue.js, Nuxt.js e C#. Já tive
      algumas experiências com Python e Java, porém nunca me aprofundei de fato.
    </p>
    <Anchor target="_self" href="/projects" class=""> Projetos </Anchor>
    <Anchor target="_self" href="/works"> Experiências </Anchor>
    <hr class="w-full border-b-px border-zinc-700 my-3" />
    <Anchor rel="noopener noreferrer" href="https://github.com/vitoUwu">
      Github <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
    <Anchor rel="noopener noreferrer" href="https://linkedin.com/in/vitoo">
      LinkedIn <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
    <Anchor
      rel="noopener noreferrer"
      href="mailto:victorhugomeurerdelgrandi@gmail.com"
    >
      Email <IconsArrowSquareOut #left-icon :size="16" />
    </Anchor>
  </main>
</template>

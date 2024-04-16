<template>
  <div class="flex flex-col items-center z-0">
    <div class="relative">
      <p>Projeto não encontrado</p>
      <span
        class="absolute text-emerald-600 left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2 text-7xl font-bold opacity-20 -z-[1]"
      >
        404
      </span>
    </div>
    <Anchor href="/projects" target="_self" class="mt-10">
      <IconsArrowLeft :size="12" /> voltar
    </Anchor>
  </div>
</template>

<template>
  <div class="w-full flex justify-center">
    <slot />
  </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style>
body {
  width: 100%;
  height: 100%;
}
</style>
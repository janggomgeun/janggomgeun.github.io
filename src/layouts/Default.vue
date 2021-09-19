<template>
  <div class="layout mt-4 mx-4 space-y-4">
    <header class="header">
      <div>
        <strong class="flex">
          <span>interface</span>
          <g-link class="text-6xl" to="/">{{
            $static.metadata.siteName
          }}</g-link>
        </strong>
      </div>
    </header>
    <main>
      <nav class="text-4xl">
        <div>
          <div class="rounded-lg p-4 bg-gray-900 text-white">
            <g-link to="/interests">interests, </g-link>
            <g-link to="/preferences">preferences, </g-link>
            <g-link to="/principles">principles, </g-link>
            <g-link to="/retrospectives">retrospectives, </g-link>
            <g-link to="/analysis">analysis, </g-link>
            <g-link to="/thoughts">thoughts, </g-link>
            <g-link to="/projects">projects, </g-link>
            <g-link to="/cheatsheets">cheatsheets, </g-link>
            <g-link to="/mechanisms">mechanisms</g-link>
          </div>
        </div>
      </nav>
      <div class="pt-4">
        <slot />
      </div>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>

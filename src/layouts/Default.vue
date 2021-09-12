<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/about/swot">SWOT</g-link>
        <g-link class="nav__link" to="/about/focus">Focus</g-link>
        <g-link class="nav__link" to="/about/preferences">Preferences</g-link>
        <g-link class="nav__link" to="/about/principles">Principles</g-link>
        <g-link class="nav__link" to="/about/retrospectives"
          >Retrospectives</g-link
        >
        <g-link class="nav__link" to="/projects">Projects</g-link>
        <g-link class="nav__link" to="/expertise/cheatsheets">Expertise</g-link>
        <g-link class="nav__link" to="/expertise/how_it_works"
          >How it works</g-link
        >
        <g-link class="nav__link" to="/expertise/what_is_it">What is it</g-link>
      </nav>
    </header>
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

<style></style>

<template>
	<main>
		<h1 class="font-semibold text-4xl">{{ site.title }}</h1>
		<p>{{ site.description }}</p>
	</main>
</template>

<style>
@import "~/lib/style.css";
</style>

<script setup>
import { site } from "./lib/constants"
</script>

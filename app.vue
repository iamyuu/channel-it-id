<!-- TODO: handle multiple url -->
<!-- TODO: find a better design approach for long topics -->

<template>
	<main>
		<section class="px-8 my-16 md:my-24 lg:my-32 lg:container lg:mx-auto">
			<h1 class="font-semibold text-4xl">{{ site.title }}</h1>
			<p class="mt-2 mb-8">{{ site.description }}</p>

			<a :href="`https://github.com/${SOURCE_REPO}/edit/main/readme.md`" rel="noopener" target="_blank" class="btn-primary btn-icon cursor">
				Tambah channel
				<span class="i-carbon:arrow-right" />
			</a>
		</section>

		<div class="bg-dark text-light">
			<div class="px-8 py-8 lg:py-16 lg:container lg:mx-auto">
				<section v-for="{ category, items } in data" :key="category" class="mb-16">
					<h2 class="font-bold text-light text-xl mb-8">
						{{ category }}
					</h2>

					<div class="grid grid-cols-auto-w-72 gap-6">
						<a v-for="item in items" :key="item" :href="item[2][0]" rel="noopener" target="_blank" class="card group">
							<h3 class="card-title group-hover:underline">
								{{ item[0] }}
							</h3>

							<div class="card-body">
								<span class="text-xl font-semibold">Topik</span>
								<p class="text-base mt-1 overflow-y-auto h-24">
									{{ item[1] ? item[1] : "-" }}
								</p>
							</div>

							<div class="card-action">
								<span class="btn-primary btn-icon group-hover:opacity-75">
									Kunjungi channel
									<span class="i-carbon:arrow-right" />
								</span>
							</div>
						</a>
					</div>
				</section>
			</div>
		</div>
	</main>
</template>

<style>
@import "~/lib/style.css";
</style>

<script setup>
import { site, SOURCE_REPO } from "./lib/constants";
import { useChannels } from "./lib/service";

const { data } = await useChannels();

useMeta({
	bodyAttrs: {
		class: "text-lg font-light",
	},
});
</script>

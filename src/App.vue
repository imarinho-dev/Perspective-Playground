<script>
export default {
	data() {
		return {
			perspective: 100,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
		};
	},
	computed: {
		box() {
			return {
				transform: `perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `,
			};
		},
	},
	methods: {
		reset() {
			this.perspective = 100;
			this.rotateX = 0;
			this.rotateY = 0;
			this.rotateZ = 0;
		},
		async copy() {
			let text = `transform:${this.box.transform};`;
			await navigator.clipboard.writeText(text);

			alert('CSS copied to clipboard!');
		},
	},
};
</script>

<template>
	<h2
		class="text-amber-600 text-center text-3xl md:text-5xl tracking-wider mb-1 md:m-5"
	>
		CSS3 Perspective Playground
	</h2>
	<p></p>
	<main
		class="flex flex-col-reverse md:flex-row justify-around items-center min-h-[420px] max-w-[768px] mx-auto my-auto text-sm"
	>
		<section class="w-full md:w-1/3 z-[2]">
			<div class="settings-container">
				<label
					class="block text-base font-semibold tracking-wide mb-2 text-slate-600"
					>Perspective: {{ perspective }}px;</label
				>
				<input
					class="block mb-2 w-full opacity-70 appearance-none cursor-pointer hover:opacity-100 transition-all duration-300 rounded-full bg-amber-400 h-1.5"
					type="range"
					min="0"
					max="999"
					v-model="perspective"
				/>

				<label
					class="block text-base font-semibold tracking-wide mb-2 text-slate-600"
					>RotateX: {{ rotateX }}deg;
				</label>
				<input
					class="block mb-2 w-full opacity-70 appearance-none cursor-pointer hover:opacity-100 transition-all duration-300 rounded-full bg-amber-400 h-1.5"
					type="range"
					min="-180"
					max="180"
					v-model="rotateX"
				/>

				<label
					class="block text-base font-semibold tracking-wide mb-2 text-slate-600"
					>RotateY: {{ rotateY }}deg;
				</label>
				<input
					class="block mb-2 w-full opacity-70 appearance-none cursor-pointer hover:opacity-100 transition-all duration-300 rounded-full bg-amber-400 h-1.5"
					type="range"
					min="-180"
					max="180"
					v-model="rotateY"
				/>

				<label
					class="block text-base font-semibold tracking-wide mb-2 text-slate-600"
					>RotateZ: {{ rotateZ }}deg;
				</label>
				<input
					class="block mb-2 w-full opacity-70 appearance-none cursor-pointer hover:opacity-100 transition-all duration-300 rounded-full bg-amber-400 h-1.5"
					type="range"
					min="-180"
					max="180"
					v-model="rotateZ"
				/>

				<div class="flex mt-5">
					<button
						class="bg-amber-600 text-white inline-block text-xl px-5 py-2 outline-none border-2 border-transparent rounded-md mr-auto shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:bg-transparent hover:text-amber-600 hover:border-amber-600 hover:border-2"
						type="button"
						@click.prevent="reset"
					>
						Reset
					</button>
					<button
						class="bg-amber-600 text-white inline-block text-xl px-5 py-2 outline-none border-2 border-transparent rounded-md shadow-md hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:bg-transparent hover:text-amber-600 hover:border-amber-600 hover:border-2"
						type="button"
						@click.prevent="copy"
					>
						Copy
					</button>
				</div>
			</div>
		</section>
		<section class="output mb-5 md:mb-0">
			<div class="p-[50px] border border-amber-600 rounded-">
				<div
					class="w-[150px] h-[150px] bg-amber-600 rounded"
					:style="box"
				></div>
			</div>
		</section>
	</main>
	<!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped></style>

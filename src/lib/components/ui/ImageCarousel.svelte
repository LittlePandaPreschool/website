<script lang="ts">
	import { onMount } from 'svelte';

	type Image = { default: string; small: string; medium: string };
	export let images: Image[];

	let numColumns = 4;
	let columns: Image[][] = [];

	function calculateColumns(cols: number) {
		const newColumns: Image[][] = Array.from({ length: cols }, () => []);
		images.forEach((image, index) => {
			newColumns[index % cols].push(image);
		});
		return newColumns;
	}

	// for SSR
	columns = calculateColumns(numColumns);

	$: if (images) {
		columns = calculateColumns(numColumns);
	}

	onMount(() => {
		const handleResize = () => {
			const newNumColumns = window.innerWidth < 768 ? 1 : 4;
			if (newNumColumns !== numColumns) {
				numColumns = newNumColumns;
				columns = calculateColumns(numColumns);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="carousel-container h-[1000px]">
	<div class="carousel-track" style="width: 100%;">
		{#each columns as column, i}
			<div
				class="carousel-column {i % 2 === 0 ? 'up' : 'down'}"
				style="flex-basis: {100 / numColumns}%"
			>
				{#each column as image, j}
					<div class="carousel-slide">
						<img
							src={image.medium}
							srcset={`${image.small} 640w, ${image.medium} 1280w`}
							alt="Gallery image {i * numColumns + j + 1}"
							class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110"
							loading="lazy"
						/>
					</div>
				{/each}
				{#each column as image, j}
					<div class="carousel-slide">
						<img
							src={image.medium}
							srcset={`${image.small} 640w, ${image.medium} 1280w`}
							alt="Gallery image {i * numColumns + j + 1}"
							class="carousel-image transition-all duration-300 transform hover:scale-105 hover:brightness-110"
							loading="lazy"
						/>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.carousel-container {
		overflow: hidden;
		width: 100%;
	}

	.carousel-track {
		display: flex;
		height: 100%;
		max-width: 100%;
	}

	.carousel-column {
		display: flex;
		flex-direction: column;
		height: 200%; /* Double height for seamless loop */
		flex-shrink: 0;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}

	.carousel-column {
		animation: scroll 90s linear infinite;
	}

	.carousel-column.down {
		animation-direction: reverse;
		transform: translateY(-50%);
	}

	.carousel-slide {
		flex: 0 0 auto;
		padding: 0.5rem 0;
	}

	.carousel-image {
		width: 100%;
		height: auto;
		border-radius: 0.5rem;
	}

	@media (max-width: 767px) {
		.carousel-image {
			height: 200px;
			object-fit: cover;
		}
	}

	@keyframes scroll {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}
</style>

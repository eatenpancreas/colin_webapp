<script lang="ts">

    import {onMount} from "svelte";
    import {api_get} from "$lib/api/php_interface";

    let imagesData: { file: string, name: string }[] = [];
    function viewImage() {
        api_get("images/view.php", {index: 0, count: 10}, (data) => {
            console.log(data)
            imagesData = data.images.map((image: any) => {
                return {file: `data:image/jpeg;base64,${image.data}`, name: image.name}
            })
        }, false)
    }

    onMount(() => {
        viewImage()
    });
    
    let clicked_image: string = "";
</script>

{#if imagesData.length <= 0}
    Nog niks
{:else }
    <div class="overflow-x-scroll max-w-full py-20 px-4 sm:px-12 lg:py-20">
        <div class="flex gap-8 w-max overflow-y-visible h-48 sm:h-72 lg:h-96">
            {#each imagesData as {file, name}}
                <button class="rounded hover:brightness-125 hover:scale-125 transition-all h-48 sm:h-72 lg:h-96" on:click={() => {
                    clicked_image = file
                }}>
                    <img class="shadow-xl shadow-amber-50/20 h-full" src={file} alt={name}/>
                </button>
            {/each}
        </div>
    </div>
{/if}

{#if clicked_image !== ""}
    <button class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center" on:click={() => {
        clicked_image = "";
    }}>
        <img class="max-h-full max-w-full" src={clicked_image} alt="img" />
    </button>
{/if}
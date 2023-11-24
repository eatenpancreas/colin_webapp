<script lang="ts">
    import Link from "$lib/components/styled/Link.svelte";

    export let links: {link: string, name: string}[] = [];
    let opened = false;
    $: opened_rotation = opened? "rotate-45 translate-y-1.5" : ""
    $: opened_rotation2 = opened? "-rotate-45 -translate-y-1.5" : ""
</script>



<header class="fixed z-20 left-0 right-0 text-white bg-primary-900 shadow-xl uppercase">
    <Link on_click={() => opened = false}>
        <img src="/favicon.png" alt="logo" class="relative top-0 left-0 w-16 m-1 z-50 rounded-full" />
    </Link>
    <div class="absolute sm:invisible visible inset-0 flex items-center justify-center" on:click={() => opened = !opened}>
        <div class="flex flex-col gap-1">
            <div class="w-10 h-0.5 bg-white rounded {opened_rotation} transition"></div>
            <div class="w-10 h-0.5 bg-white rounded"></div>
            <div class="w-10 h-0.5 bg-white rounded {opened_rotation2} transition"></div>
        </div>
    </div>
    
    <div class="grid invisible sm:visible absolute inset-0" style="grid-template-columns: repeat({links.length}, minmax(0, 1fr))">
        {#each links as link}
            <Link href={link.link} class_override="m-auto">{link.name}</Link>
        {/each}
    </div>
</header>
{#if opened}
<div class="capitalize fixed bg-primary-900 inset-0 h-72 bottom-96 z-10 sm:invisible 
visible opacity-80 pt-16 text-white flex flex-col">
    {#each links as link}
        <Link href={link.link} on_click={() => opened = false} class_override="m-auto">{link.name}</Link>
    {/each}
</div>
{/if}
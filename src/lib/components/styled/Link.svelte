<script lang="ts">
    export let href = '';
    $: href_inner = "/" + href;
    export let class_override = "underline text-blue-300 hover:cursor-pointer";
    export let on_click = (event: Event) => {}
</script>
<a href={href_inner} class={class_override} on:click={on_click}>
    <slot/>
</a>
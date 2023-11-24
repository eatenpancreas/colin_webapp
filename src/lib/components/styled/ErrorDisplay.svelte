<script lang="ts">
    export let error = "";
</script>

{#if error !== ""}
    <div class="bg-gradient-to-br from-red-500 to-red-700 py-6 px-20 my-3 w-full rounded-xl uppercase">{error}</div>
{/if}
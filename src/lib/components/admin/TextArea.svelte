<script>
    export let title = "";
    export let type = "text";
    export let value = "";
    export let padding_left = "7rem";
    export let required = false;
    export let id = ""
</script>
<div class="border border-white rounded relative w-full text-primary-900 bg-white">
    <label class="absolute flex h-full items-center pl-6" for={id}><span>{title}:</span></label>
    {#if required}
        <textarea value={value} style="padding-left: {padding_left}" class="h-52 bg-transparent p-6 w-full" name="user" id={id} required />
    {:else}
        <textarea value={value} style="padding-left: {padding_left}" class="h-52 bg-transparent p-6 w-full" name="user" id={id} />
    {/if}
</div>
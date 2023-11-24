<script>
    export let title = "";
    export let type = "text";
    export let value = "";
    export let padding_left = "7rem";
    export let required = false;
    export let id = ""
</script>
<div class="border border-white rounded relative w-full">
    <label class="absolute flex h-full items-center pl-6" for={id}><span>{title}:</span></label>
    {#if required}
    <input value={value} style="padding-left: {padding_left}" class="bg-transparent p-6 w-full" type={type} name="user" id={id} required/>
    {:else}
    <input value={value} style="padding-left: {padding_left}" class="bg-transparent p-6 w-full" type={type} name="user" id={id} />
    {/if}
</div>
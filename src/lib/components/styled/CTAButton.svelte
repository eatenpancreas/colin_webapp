<script lang="ts">
    export let click = (e: Event) => {}
    export let color = "bg-emerald-400 hover:bg-emerald-200";
    export let type: "button" | "submit" | "reset" | null | undefined = "button"
    export let disabled = false;
    $: final_color = disabled? "bg-gray-400" : color;
</script>

<button on:click={click}
        type={type}
        disabled={disabled}
        class="{final_color} transition-colors relative overflow-clip
text-primary-900 text-xl font-bold flex justify-center items-center py-6 px-20 my-3 w-full rounded-xl uppercase">
    <span class="absolute bg-white opacity-50 -top-3 right-3 bottom-3 -left-3 rounded-xl "></span>
    <span class="relative z-10"><slot/></span>
</button>
<script lang="ts">
    import {api_url} from "$lib/api/settings_stored";
    import type {Writable} from "svelte/store";
    import AppBounds from "$lib/components/general/AppBounds.svelte";
    import InputForm from "$lib/components/admin/InputForm.svelte";
    import CTAButton from "$lib/components/styled/CTAButton.svelte";
    import {get} from "svelte/store";
    
    function setStoredValue() {
        api_url.set(document.getElementById("database_url").value);
    }
</script>

<AppBounds>
    <div class="w-screen"></div>
    <InputForm padding_left="9rem" value={get(api_url)} type="text" title="Database Url" id="database_url"/>
    <CTAButton click={setStoredValue}>Aanpassen</CTAButton>
</AppBounds>
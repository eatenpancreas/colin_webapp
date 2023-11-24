<script lang="ts">
    import {form_api_post} from "$lib/api/php_interface";
    import InputForm from "$lib/components/admin/InputForm.svelte";
    import CTAButton from "$lib/components/styled/CTAButton.svelte";
    import AppBounds from "$lib/components/general/AppBounds.svelte";

    function postImage(event: Event) {
        event.preventDefault();

        form_api_post('images/add.php', (fd) => {
            let file: any = document.getElementById('file');
            fd.append('file', file.files[0]);
        }, (data) => {
            console.log(data);
        });
    }
</script>

<AppBounds>
    <div class="w-screen"></div>
    <InputForm type="file" title="Filename" id="file"/>
    <CTAButton click={postImage}>Uploaden</CTAButton>
</AppBounds>
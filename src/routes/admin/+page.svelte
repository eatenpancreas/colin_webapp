<script lang="ts">
    import {onMount} from "svelte";
    import {form_api_post} from "$lib/api/php_interface";
    import {session_id, user} from "$lib/api/settings_stored";
    import InputForm from "$lib/components/admin/InputForm.svelte";
    import AppBounds from "$lib/components/general/AppBounds.svelte";
    import CTAButton from "$lib/components/styled/CTAButton.svelte";
    import ErrorDisplay from "$lib/components/styled/ErrorDisplay.svelte";
    import Form from "$lib/components/styled/Form.svelte";

    let error = "";
    let logged_in = false;
    
    function login(e: Event) {
        e.preventDefault();
        
        form_api_post("auth/login.php", (fd) => {
            let pass: any = document.getElementById('pass');
            let user: any = document.getElementById('user');

            fd.append('user', user.value);
            fd.append('pass', pass.value);
        }, (data) => {
            user.set(data.user);
            session_id.set(data.session);
            console.log("OK:", data);
        }, (err) => {
            if (err.message.includes("NetworkError")) {
                error = "Kon geen connectie maken met de server";
            } else {
                error = err.message;
            }
        }, false)
    }
</script>

<Form>
<AppBounds>
    <div class="w-screen"></div>
    <ErrorDisplay error={error}/>
    <InputForm required={true} title="Username" id="user"/>
    <InputForm required={true} title="Password" id="pass"/>
    <CTAButton type="submit" click={login}>Inloggen</CTAButton>
    <CTAButton color="bg-amber-200 hover:bg-amber-100"
               click={() => window.location.href = "/admin/upload_raw"}>Uploaden</CTAButton>
    <CTAButton color="bg-amber-200 hover:bg-amber-100" 
               click={() => window.location.href = "/admin/settings"}>Settings</CTAButton>
</AppBounds>
</Form>
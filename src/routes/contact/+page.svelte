<script lang="ts">
import AppBounds from "$lib/components/general/AppBounds.svelte";
import InputForm from "$lib/components/admin/InputForm.svelte";
import CTAButton from "$lib/components/styled/CTAButton.svelte";
import TextArea from "$lib/components/admin/TextArea.svelte";
import ErrorDisplay from "$lib/components/styled/ErrorDisplay.svelte";
import Form from "$lib/components/styled/Form.svelte";
import {form_api_post} from "$lib/api/php_interface";
import {session_id, user} from "$lib/api/settings_stored";


    let error = "";
    let send_btn = "Versturen";
    let ok = false;
    function login(e: Event) {
        e.preventDefault();
    
        form_api_post("auth/mail.php", (fd) => {
            let email: any = document.getElementById('email');
            let message: any = document.getElementById('message');
            let subject: any = document.getElementById('subject');
            
            fd.append('from', email.value);
            fd.append('subject', subject.value);
            fd.append('message', message.value);
        }, (data) => {
            user.set(data.user);
            session_id.set(data.session);
            console.log("OK:", data);
            send_btn = data.message;
            ok = true;
            error = "";
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
    {#if !ok}
        <ErrorDisplay error={error}/>
        <InputForm required={true} type="email" title="Je Email" id="email"/>
        <InputForm padding_left="9rem" required={true} title="Onderwerp" id="subject"/>
        <TextArea required={true} title="Bericht" id="message"/>
    {/if}
    <CTAButton type="submit" disabled={ok} click={login}>{send_btn}</CTAButton>
</AppBounds>
</Form>
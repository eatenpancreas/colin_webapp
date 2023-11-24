<script>
    import "../app.css";
    import {onMount} from "svelte";
    import init from "./init";
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    onMount(init);
</script>

<div class="font-mont">
    <div class="fixed inset-0 -z-50 bg-gradient-to-br from-primary-900 to-primary-800 min-h-screen "></div>
    
    <NavBar links={[
        {link: "about", name: "over mij"},
        {link: "contact", name: "contact"},
        {link: "diensten", name: "diensten"},
    ]}/>
    
    <div class="min-h-screen flex flex-col justify-center items-center text-white pb-20">
        <slot />
    </div>
    <Footer/>

</div>

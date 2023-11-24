<script>
    import H2 from "$lib/components/styled/H2.svelte";
    import CTAButton from "$lib/components/styled/CTAButton.svelte";
    import AppBounds from "$lib/components/general/AppBounds.svelte";
    import Slideshow from "$lib/components/Slideshow.svelte";
    import Block from "$lib/components/Block.svelte";
    import H3 from "$lib/components/styled/H3.svelte";
    import AdobeStack from "$lib/components/AdobeStack.svelte";
    import YoutubePlayer from "$lib/components/YoutubePlayer.svelte";
</script>

<Slideshow/>

<AppBounds>
    <Block>
        <div style="flex: 1">
            <H3>Wie ben ik?</H3>
            <p class="pt-4">
                Hey! Ik ben Colin Heeringa, een enthousiaste ondernemer gespecialiseerd 
                in het maken van pakkende bedrijfsvideo's. Mijn passie ligt in het vastleggen van jouw unieke
                verhaal en dit te vertalen naar beeld.
            </p>
        </div>
        <div style="flex: 0.5">
            <img src="img/Portret_Website.png" alt="" class="w-full">
        </div>
    </Block>
    
    <YoutubePlayer id="ai2c7atDW8c"/>
    
    <Block><H3>Over mij</H3></Block>
    
    <AdobeStack/>

    <CTAButton click={() => window.location.href = "/contact/"}>Meer info</CTAButton>
    <CTAButton click={() => window.location.href = "/contact/"}>Neem contact met me op</CTAButton>
</AppBounds>
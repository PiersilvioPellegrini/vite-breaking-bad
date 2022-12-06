<script>
// import Componente from './components/Componente';
import TheHeader from './components/TheHeader.vue';
import TheSelect from './components/TheSelect.vue';
import TheMain from './components/TheMain.vue';
// importo file esterno con i dati
import { store } from "./store";

export default {
  components: { TheHeader,TheSelect,TheMain },
  data () {
    return {
      
      store
    };
  },
};

</script>

<template>
 <TheHeader></TheHeader>
 <TheSelect></TheSelect>
 <TheMain></TheMain>
</template>

<style lang="scss">

@use "./styles/general.scss";

</style>

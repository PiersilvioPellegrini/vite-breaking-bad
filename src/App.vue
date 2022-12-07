<script>
// import Componente from './components/Componente';
import TheHeader from './components/TheHeader.vue';
import TheSelect from './components/TheSelect.vue';
import TheMain from './components/TheMain.vue';

// importo file esterno con i dati
import { fetchCharacters, store } from "./store";

export default {
  components: { TheHeader,TheSelect,TheMain },
  data () {
    return {
      
      store
    };
  },
  methods: {
    Search (filtersEmitted) {
      this.store.Filters = filtersEmitted;
      fetchCharacters();

      console.log(filtersEmitted);
    }
  },
  }


</script>

<template>
 <TheHeader></TheHeader>
 <!-- sull'evento creato nell'elemento TheSelect richaimo la funzione creata in App.vue -->
 <TheSelect @search="Search"></TheSelect>
 <TheMain></TheMain>
</template>

<style lang="scss">

@use "./styles/general.scss";

</style>

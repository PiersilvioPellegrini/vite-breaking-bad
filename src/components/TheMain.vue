<template>
  <div class="container">
    <div class="Found">
      <h3>Found {{ store.paginationInfo.count }} Characters</h3>
    </div>
    <div class="row justify-content-around g-5">
      <div v-for="singleCharacter in store.charactersList" class="col-3">
        <!-- componente card singola= -->
        <SingleCharacter :character="singleCharacter"></SingleCharacter>
      </div>
    </div>
  </div>
</template>

<script>
// importazione componente singola card
import SingleCharacter from "./TheSingleCharacter.vue";

// importazione del file degli array
import { store, fetchCharacters } from "../store";
export default {
  // componente esterno card singola
  components:{SingleCharacter},
  data() {
    return {
      ajaxError: "",
      store,
    };
  },
  created() {
    // richaimo la funzione dallo store
    fetchCharacters();
    
  },
};
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  padding: 30px 30px;
  margin-bottom: 80px;

  .Found {
    background-color: darkslategray;
    border-radius: 25px;
    padding: 15px 10px;
    margin-bottom: 20px;
    color: white;
  }
  .card {
    background-color: darkslategray;


    h5,
    p {
      color: whitesmoke;
    }
  }
}
</style>

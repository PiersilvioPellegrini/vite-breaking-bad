<template>
  <div class="container">
    <div class="Found">
      <h3>Found 62 Characters</h3>
    </div>
    <div class="row justify-content-around g-5">
      <div v-for="singleCharacter in store.charactersList" class="col-3">
        <div class="card">
          <img :src="singleCharacter.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ singleCharacter.name }}</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// importazione di axios
import axios from "axios";
// importazione del file degli array
import { store } from "../store";
export default {
  data() {
    return {
      ajaxError: "",
      store,
    };
  },
  created() {
    axios
      // sito dove prendo i dati
      .get("https://rickandmortyapi.com/api/character")
      // caso in cui la chiamata va a buon fine ed ottengo un codice 200
      .then((resp) => {
        // Resetto eventuali errori passati
        this.ajaxError = "";
        // verifica in console
        console.log("then invocato");
        // Assegno il valore alla variabile del data charactersList
        this.store.charactersList = resp.data.results;
      })
      // Caso in cui c'è un error nella chiamata ed il codice è diverso da 200
      .catch((error) => {
        // error contiene un istanza di AxiosError dalla quale posso estrarre varie
        // informazioni sull'errore avvenuto
        console.log(error);
        // Codice HTTP dell'errore
        console.log("Codice errore: ", error.response.status);
        this.ajaxError =
          "A causa di un errore, l'operazione non è andata a buon fine";
        // Impostiamo a false il loading per nascondere la schermata di caricamento
        this.store.loading = false;
      });
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

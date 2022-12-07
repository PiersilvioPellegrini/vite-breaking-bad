import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    // array che contiene i dati delle card
  charactersList: [],
  paginationInfo: {},
  Filters: null,

//   PER BONUS

  loading: false
});

export function fetchCharacters () {

  axios.get("https://rickandmortyapi.com/api/character", {
    // Query string nell'url finale
    params: {
      ...store.Filters
    }
  })
    // caso in cui la chiamata va a buon fine ed ottengo un codice 200
    .then((resp) => {
      

      console.log("then invocato");

      // Assegno il valore alla variabile del data charactersList
      store.charactersList = resp.data.results;
      store.paginationInfo = resp.data.info;

      console.log(store);


    })
    // Caso in cui c'è un error nella chiamata ed il codice è diverso da 200
    .catch((error) => {
      // error contiene un istanza di AxiosError dalla quale posso estrarre varie 
      // informazioni sull'errore avvenuto
      console.log(error);

      // Codice HTTP dell'errore
      console.log("Codice errore: ", error.response.status);

      // this.ajaxError = "A causa di un errore, l'operazione non è andata a buon fine";

      // Impostiamo a false il loading per nascondere la schermata di caricamento
      store.loading = false;
    });
}
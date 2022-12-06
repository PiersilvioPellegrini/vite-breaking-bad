import { reactive } from "vue";


export const store = reactive({
    // array che contiene i dati delle card
  charactersList: [],
  paginationInfo: {},
//   PER BONUS
  loading: false
});
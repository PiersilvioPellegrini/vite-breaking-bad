import { reactive } from "vue";


export const store = reactive({
    // array che contiene i dati delle card
  charactersList: [],
  paginationInfo: {},
  loading: false
});
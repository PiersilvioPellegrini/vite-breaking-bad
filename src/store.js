import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  charactersList: [],
  /**
   * @property {number}        count
   * @property {number}        pages
   * @property {string | null} next
   * @property {string | null} prev
   */
  paginationInfo: {},
  loading: false
});
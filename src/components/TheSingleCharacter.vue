<template>
    <div class="card">
          <img :src="character.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"> {{ character.name }} </h5>
            <!-- <p class="card-text"></p> -->
          </div>
        </div>
</template>

<script>
export default {
  name: "SingleCharacter",
  props: {
    /**
     * Oggetto che rappresenta un singolo personaggio
     *
     * @property {number} id
     * @property {string} name
     * @property {string} status
     * @property {string} species
     * @property {string} type
     * @property {string} gender
     * @property {object} origin
     * @property {object} location
     * @property {string} image
     * @property {string} episode
     * @property {array}  url
     * @property {string} created
     */
    character: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>


<style scoped lang="scss">

  .card {
    background-color: darkslategray;

    h5,
    p {
      color: whitesmoke;
    }
  }

</style>
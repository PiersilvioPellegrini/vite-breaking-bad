<template>

  <div class="container">
    <h3>Trova il tuo personaggio</h3>
    <form action="" class="mb-4" @submit.prevent="SearchClick">

<div class="row">
  <div class="col-sm-4">
    <div class="mb-3">
      <label>Nome</label>
      <input type="text" class="form-control" name="name" placeholder="Inserisci il nome desiderato" v-model="filters.name">
    </div>
  </div>
  
</div>

<div class="row">
  <div class="col-sm-4">
    <div class="mb-3">
      <label>Specie</label>
      <input type="text" class="form-control" name="species" placeholder="Inserisci la specie desiderata" v-model="filters.species">
    </div>
  </div>
  <div class="col-sm-4">
    <div class="mb-3">
      <label>Tipo</label>
      <input type="text" class="form-control" name="type" placeholder="Inserisci il tipo desiderato" v-model="filters.type">
    </div>
  </div>
  <div class="col-sm-4">
    <div class="mb-3">
      <label>Genere</label>
      <input type="text" class="form-control" name="gender" placeholder="Inserisci il genere desiderato" v-model="filters.gender">
    </div>
  </div>
</div>

<div class="d-flex gap-3 justify-content-center">
  <button  class="btn btn-info">Cerca</button>
</div>
</form>
  </div>
</template>

<script>
export default {

  data(){
    return{
      // filtri campi inseriti
      filters:{
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
      }
    };
  },
  methods:{

    SearchClick(){
      this.$emit("search",{...this.filters});
    }
  }


};
</script>

<style scoped lang="scss">
.container {
  margin-top: 50px;
  padding-left:20px;
  color: darkslategray;

  h3{
    color: darkslategray;
  }

  button{
    background-color: darkslategray;
    color:white;
    border: 1px solid white

    
  }

  .form-select{
    width: 200px;
    margin-bottom: 50px;
  }
}
</style>

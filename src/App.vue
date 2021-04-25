<template>
  <h1>Rick and Morty</h1>
  <h2>Character filters</h2>
  <ul class="app__list">
    <ListItem
            v-for="(option, index) in filteredCharacterList"
            v-bind:key="index"
            v-bind:item="option" />
  </ul>
  <div class="app__selectors">
    <div>
      <p>Default Label: </p>
      <input type="text" v-model="defaultOption.label">
      <Select
              v-bind:defaultOption="defaultOption"
              v-bind:options="availableStates"
              v-bind:disabled="selectedBoolean"
              @addToList="addToStateList" />
    </div>
    <div>
      <p>Default Label: </p>
      <input type="text" v-model="defaultCharacter.label">
      <Select
              v-bind:defaultOption="defaultCharacter"
              v-bind:options="filteredCharacterList"
              v-bind:small="true"
              @addToList="addToList" />
    </div>
  </div>
</template>

<script>
import Select from './components/Select.vue'
import { getAllCharacters } from "./core/services/OhJeezService";
import ListItem from "./components/ListItem";

export default  {
  name: 'App',
  components: {
    ListItem,
    Select
  },
  data() {
    return {
      availableOptions: [],
      selectedOptions: [],
      availableStates: [],
      defaultOption: {
        value: '0',
        default: true,
        label: 'Select State',
        selected: ''
      },
      defaultCharacter: {
        value: '0',
        default: true,
        label: 'Select Character',
        selected: ''
      },
      statesArray: [],
      selectedBoolean: false,
    }
  },
  methods: {
    addToList(index) {
      this.filteredCharacterList[index].selected = !this.filteredCharacterList[index].selected;
    },
    addToStateList(index) {
      this.availableStates[index].selected = !this.availableStates[index].selected;
    }
  },
  computed: {
    filteredCharacterList() {
      const statusArray = this.availableStates
              .filter(option => option.selected)
              .map(option => option.status);
      return this.availableOptions.filter(option => statusArray.indexOf(option.status) !== -1);
    }
  },
  created() {
    getAllCharacters().then(response => {
      console.log('response', response);
      this.availableOptions = response;
      this.availableStates = this.availableOptions
              .filter(item => {
                const includesState = this.statesArray.includes(item.status);
                if (includesState) {
                  return false;
                } else {
                  this.statesArray.push(item.status)
                  return true;
                }
              })
              .map(option => {
                return {
                  status: option.status,
                  label: option.status,
                  selected:  option.status === 'Alive'
                }
      });
    });
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app {
  &__selectors {
    display: flex;

    input {
      height: 35px;
      width: 192px;
      margin-bottom: 5px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    min-height: 260px;
    padding: 0;
  }
}
</style>

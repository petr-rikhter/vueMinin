const App = {
  data() {
    return {
      placeholderString: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    addNewNote(event) {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = null;
      }
    },
    toUpperCase(string) {
      return string.toUpperCase();
    },
    deleteSelectNote(indexOfNote) {
      this.notes.splice(indexOfNote, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value && value.length >= 10) {
        this.inputValue = "";
      }
    },
  },
};

Vue.createApp(App).mount("#app");

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
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote(event) {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = null;
      }
    },
    deleteSelectNote(indexOfNote) {
      this.notes.splice(indexOfNote, 1);
    },
  },
};

Vue.createApp(App).mount("#app");

const App = {
  data() {
    return {
      placeholderString: "Введите название заметки",
      title: "Список заметок",
      inputValue: "",
    };
  },
};

Vue.createApp(App).mount("#app");

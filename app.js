Vue.createApp({
  data: () => ({
    myHtml: "<h1>Vue3 app</h1>",
    title: "Я заголовок",
    person: {
      firstName: "Petr",
      lastName: "Rikhter",
      age: 26,
    },
    items: [1, 2, 3, 4, 5],
  }),
}).mount("#app");

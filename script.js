const RootComponent = {
  /*
   * Data properties
   * Donnée réactives que l'on va modifier ou saisir
   */
  data() {
    return {
      annualGross: 0, // Salaire annuel brut
      rate: 0.78, // Taux
    };
  },

  /*
   * Computed properties
   * Données réactives calculées
   */
  computed: {
    /*
     * Propriété caculée du salaire annuel net
     * Elle sera recalculée à chaque fois que annualGross ou rate change
     * Dépendances: annualGross et rate
     */
    annualNet() {
      return this.annualGross * this.rate;
    },
    /*
     * Propriété calculée du salaire mensuel brut
     * Dépendances: annualGross
     */
    monthlyGross() {
      return this.annualGross / 12;
    },
    /*
     * Propriété calculée du salaire mensuel net
     * Dépendances: annualNet
     */
    monthlyNet() {
      return this.annualNet / 12;
    },
  },

  /*
   * Méthodes
   */
  methods: {
    /*
     * Edition de la data property annualGross
     */
    editAnnualGross(e) {
      this.annualGross = e.target.value;
    },

    /*
     * Changement du taux lorsque la case cadre est cochée ou décochée
     */
    onChangeCadre(e) {
      if (e.target.checked === true) {
        this.rate = 0.75;
      } else {
        this.rate = 0.78;
      }
    },
  },
};

Vue.createApp(RootComponent).mount("#root");

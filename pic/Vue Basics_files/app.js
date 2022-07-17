// function for random number generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      painChakra: 100,
      narutoChakra: 100,
      hits: 0,
    };
  },
  computed: {
    activateSageMode() {
      return {
        this.hits % 3 !== 0
      }
      // backgroundColor: this.narutoChakra > 50 ? 'green' : 'red'
    },
    painChakraBar() {
      return {
        width: this.painChakra + "%",
      };
    },
    narutoChakraBar() {
      return {
        width: this.narutoChakra + "%",
        // backgroundColor: this.narutoChakra > 50 ? 'green' : 'red'
      };
    },
  },
  methods: {
    attackPain() {
      this.hits++;
      const attackValue = randomNumber(10, 15);
      this.painChakra -= attackValue;
      this.attackNaruto();

      console.log(`Pain attacked Naruto for ${attackValue}`);
    },
    attackNaruto() {
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 5;
      const attackValue = randomNumber(5, 10);
      this.narutoChakra -= attackValue;
    },
    specialAttackPain() {
      this.hits++;
      const attackValue = randomNumber(20, 25);
      this.painChakra -= attackValue;
      this.attackNaruto();
      console.log(`Pain attacked Naruto for ${attackValue}`);
    },
  },
});

app.mount("#game");

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
    painChakraBar() {
      return {
        width: this.painChakra + "%",
    
      };
      console.log(this.painChakra + "naruto hit");
    },
    narutoChakraBar() {
      return {
        width: this.narutoChakra + "%",
        // backgroundColor: this.narutoChakra > 50 ? 'green' : 'red'
      };
      console.log(this.narutoChakra + "pain hit");
    },
    activateSageMode() {
      return;
      // backgroundColor: this.narutoChakra > 50 ? 'green' : 'red'

      this.hits % 2 !== 0 ? "disabled" : "";
    },
  },
  methods: {
    randomPainAttacks() {
      console.log("pain hit");

      //   this.hits += 4;

      // an array of methods to be called
      const painAttacks = [
        () => {
          this.narutoChakra -= randomNumber(1, 3);
          //   this.narutoChakra -= randomNumber(20, 30);
        },
      ];

      //radom of painAttacks array
      const randomPainAttack =
        painAttacks[Math.floor(Math.random() * painAttacks.length)];
      randomPainAttack();

      // logged to console
      console.log(
        this.narutoChakra + " <- chakra levels " + this.hits + " pain hit"
      );

      console.log("Pain  random attack");
    },
    attackPain() {
      this.hits++;
      const attackValue = randomNumber(10, 15);
      this.painChakra -= attackValue;
      this.randomPainAttacks();
      console.log("u pressed to attack" + this.hits);
    },
    attackNaruto() {
      this.hits++;
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 5;
      const attackValue = randomNumber(5, 10);
      this.narutoChakra -= attackValue;
    },
    specialAttackPain() {
      this.hits++;
      const attackValue = randomNumber(20, 25);
      this.painChakra -= attackValue;
      this.randomPainAttacks();

      console.log(`Pain attacked Naruto for ${attackValue}`);
    },
    specialAttackNaruto() {
      this.hits++;
      const attackValue = randomNumber(40, 50);
      this.narutoChakra -= attackValue;
      console.log(`Naruto attacked Pain for ${attackValue} Big  hit Rampage`);
      this.randomPainAttacks();
    },
  },
});
app.mount("#game");

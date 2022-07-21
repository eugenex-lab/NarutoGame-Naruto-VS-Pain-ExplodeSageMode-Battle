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
      narutoChakraBarAt: 0,
      narutoChakraBarAt60: 0,
      battleHitRound: 0,
      winner: null,
      showControl: true,
      show: true,
      showFinishing: true,
      showFinishingScreen: true,
      messageLogs: []
    };
  },
  watch: {
    narutoChakra(newValue) {
      if (newValue <= 0 && this.painChakra <= 0) {
        //  alert("Naruto is dead");

        this.winner = "draw";
        this.show = false;
        this.showFinishing = true;

        // hide class id controls
      } else if (newValue <= 0) {
        // alert("Pain is dead");
        this.winner = "pain";
        this.show = false;
        this.showFinishing = true;
      } else {
        this.show = true;
      }
    },
    painChakra(newValue) {
      if (newValue <= 0 && this.narutoChakra <= 0) {
        //
        // alert("Naruto is dead");
        this.winner = "draw";
        this.showFinishing = true;
        this.show = false;
      } else if (newValue <= 0) {
        // alert("Pain is dead");
        this.winner = "naruto";
        this.showFinishing = true;
        this.show = false;
      } else {
        this.show = true;
      }
    },
    // watch for changes in narutoChakraBarAt and painChakraBarAt 1 and less than 0
  },
  computed: {
    fininsh() {
      if (this.narutoChakra <= 0 || this.painChakra <= 0) {
        return true;
      } else if (this.narutoChakra <= 0 && this.painChakra <= 0) {
        return true;
      } else {
        return false;
      }
    },

    //final screen

    showFinishingScreen() {
      if (this.narutoChakra <= 0 || this.painChakra <= 0) {
        this.showFinishing = true;
        return true;
      } else {
        this.showFinishing = false;
      }
    },

    // computed property for narutoChakraBarAt

    showControl() {
      if (this.narutoChakra <= 0 || this.painChakra <= 0) {
        alert("Naruto or pain is dead");
        this.showControl = false;
        this.show = false;

        // set to display none

        return false;
      } else {
        this.showControl = true;
        this.show = true;
      }
    },
    painChakraBar() {
      console.log(
        " Health Bar Pain " +
          this.painChakra +
          " HealthBar Naruto: " +
          this.narutoChakra +
          " health bar"
      );
      if (this.painChakra <= 0) {
        width: 0 + "%";
        // change the background color of the health bar to white

        return {
          backgroundColor: "white",

          // visibility: "hidden",
        };
      } else if (this.painChakra >= 1 && this.painChakra <= 40) {
        return {
          width: this.painChakra + "%",

          // set background color to dark red
          backgroundColor: "#470b04",
        };
      } else if (this.painChakra >= 41 && this.painChakra <= 60) {
        // if narutoChakra is less than 60 then width is 60
        return {
          width: this.painChakra + "%",
          // set background color to dark orange
          backgroundColor: "#6a1106",
        };
      } else if (this.painChakra >= 61 && this.painChakra <= 80) {
        // if narutoChakra is less than 80 then width is 80
        return {
          width: this.painChakra + "%",
          // set background color to dark yellow
          backgroundColor: "#b11c0a",
        };
      } else {
        return {
          width: this.painChakra + "%",
        };
      }
      return {
        width: this.painChakra + "%",
      };
    },
    narutoChakraBar() {
      // if narutoChakra is less than 0 then width is 0
      if (this.narutoChakra <= 0) {
        width: 0 + "%";
        // change the background color of the health bar to white

        // remove the hidden class from the controls di

        return {
          backgroundColor: "white",
        };
      } else if (this.narutoChakra >= 1 && this.narutoChakra <= 40) {
        return {
          width: this.narutoChakra + "%",

          // set background color to dark red
          backgroundColor: "darkred",
        };
      } else if (this.narutoChakra >= 41 && this.narutoChakra <= 60) {
        // if narutoChakra is less than 60 then width is 60
        return {
          width: this.narutoChakra + "%",
          // set background color to dark orange
          backgroundColor: "darkorange",
        };
      } else if (this.narutoChakra >= 61 && this.narutoChakra <= 80) {
        // if narutoChakra is less than 80 then width is 80
        return {
          width: this.narutoChakra + "%",
          // set background color to dark yellow
          backgroundColor: "lightgreen",
        };
      } else if (this.narutoChakra > 99) {
        console.log("Naruto is too strong-->> " + this.narutoChakra);
        this.narutoChakra = 100;

        //   this.narutoChakra can't be more than 100

        return {
          width: this.narutoChakra + "%",
          // set background color to dark yellow
          backgroundColor: "darkgreen",
        };
      }

      return {
        // width: this.narutoChakraBarWidth + "%",
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
    startGame() {
      this.painChakra = 100;
      this.narutoChakra = 100;
      this.hits = 0;
      this.winner = null;
      this.battleHitRound = 0;
      this.messageLogs = [];
      console.log("Start Game");
    },
    randomPainAttacks() {
      this.battleHitRound++;

      console.log("pain special attack }}}}}} hit");

      //   this.hits += 4;

      // an array of methods to be called
      const painAttacks = [
        () => {
          this.narutoChakra -= randomNumber(90, 100);
          //   this.narutoChakra -= randomNumber(20, 30);
        },
      ];

      //radom of painAttacks array
      const randomPainAttack =
        painAttacks[Math.floor(Math.random() * painAttacks.length)];
      this.randomPainAttack();

      // logged to console
      console.log(
        this.narutoChakra + " <- chakra levels " + this.hits + " pain hit"
      );

      console.log("Pain  random attack");
    },

    attackPainRansengan() {
      this.battleHitRound++;

      this.hits++;
      const attackValue = randomNumber(3, 6);
      this.painChakra -= attackValue;
      this.newMessageLog('naruto', 'attack', attackValue);

      // this.randomPainAttacks();

      //delay the pain attack

      this.attackNarutolvl1();

      console.log("u pressed to attack" + this.hits + " impact");
    },
    attackNarutolvl1() {
      this.hits++;
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 5;
      const attackValue = randomNumber(5, 8);
      this.narutoChakra -= attackValue;
      this.newMessageLog('pain', 'attack', attackValue);

      console.log(
        "Pain attacks with " + this.attackValue + " hits --> " + attackValue
      );
    },
    specialAttackPainSageMode() {
      this.battleHitRound++;

      this.hits++;
      const attackValue = randomNumber(15, 20);

      this.painChakra -= attackValue;
      this.newMessageLog('naruto', 'attack', attackValue);

      this.attackNarutolvl1();
      this.attackNarutolvl1();
      this.attackNarutolvl1();
      this.attackNarutolvl1();

      

      console.log("$$$$$$attack VALUE" + attackValue);

      // this.attackNarutolvl1();
      // this.randomPainAttacks();
      // console.log(`Pain attacked Naruto for ${attackValue}`);
    },
    specialAttackNarutolvl2() {
      this.hits++;
      const attackValue = randomNumber(20, 25);
      this.narutoChakra -= attackValue;
      this.newMessageLog('pain', 'attack', attackValue);
    },

    specialHealingMode() {
      this.battleHitRound++;

      this.hits++;
      const healValue = randomNumber(15, 30);
      this.narutoChakra += healValue;
      // console.log("Pain healed for " + healValue);
      this.newMessageLog('naruto', 'heal', healValue);

      this.specialAttackNarutolvl1();

      
    },
    specialTailBeastBomb() {
      this.battleHitRound++;
      this.hits++;
      const attackValue = randomNumber(1, 50);
      this.painChakra -= attackValue;
      this.newMessageLog('naruto', 'attack', attackValue);
      console.log("Pain attacked for " + attackValue);

      // this.specialAttackNarutolvl2();
    },
    specialRasenshuriken() {
      this.battleHitRound++;

      this.hits++;
      const attackValue = randomNumber(20, 40);
      this.painChakra -= attackValue;
      console.log("Pain attacked for " + attackValue);
      this.newMessageLog("naruto", "attack", attackValue);

      // this.specialAttackNarutolvl3();
    },
    specialAttackNarutolvl3() {
      this.hits++;
      const attackValue = randomNumber(0, 10);
      this.narutoChakra -= attackValue;
      this.newMessageLog('pain', 'attack', attackValue);
    },
    specialSexyjutsu() {
      this.battleHitRound++;

      this.hits++;
      const attackValue = randomNumber(0, 20);
      this.painChakra -= attackValue;
      this.narutoChakra += 10;
      console.log("Pain attacked for " + attackValue);
      this.newMessageLog('naruto', 'attack', attackValue);
      this.specialAttackNarutolvl3();
  
    },
    surrender() {
      this.narutoChakra = 0;
      this.hits = 0;
    },
    newMessageLog(who, what, value) {
      this.messageLogs.unshift({
        actionPlayer: who,
        actionType: what,
        actionValue: value,
      });
      console.log("$$$$$$$" + this.messageLogs);
      console.log("$$$$$$$" + "new message log");
    },
  },
});
app.mount("#game");

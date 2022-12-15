// const parent1 = {
//     mom_name: "Vira Sladkova",
//     mother: ()=> {
//         console.log(this)
//       return `${this.mom_name} is my mother.`;
//     },
// };
// const parent2 = {
//     mom_name: "Vira Sladkova",
//     mother: function () {
//         console.log(this)
//       return `${this.mom_name} is my mother.`;
//     },
// };
//     console.log(this)
//     console.log(parent1.mother())
//     console.log(parent2.mother())

    let animals1 = {
        domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
        printdomesticAnimals: function () {
            console.log("1 "+this)
          setTimeout(() =>{
            console.log("2 "+this)
            console.log("1 - "+this.domesticAnimals.join("-"))
          }, 3000);
        },
      };
      let animals2 = {
        domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
        printdomesticAnimals: function () {
            console.log("2 - "+this.domesticAnimals.join("-"))
        },
      };
      animals1.printdomesticAnimals();
      animals2.printdomesticAnimals();

    
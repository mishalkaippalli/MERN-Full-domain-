const person = { name: "Alice" };

function greet(city, state) {
  console.log(`hello its ${this.name} from ${city} in ${state}`);
}

greet.call(person, "kochi", "kerala");

greet.apply(person, ["kochi", "kerala"]);
const binded = greet.bind(person, "kedapl", "kerala")
binded()
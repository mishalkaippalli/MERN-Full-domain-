const students = [
{ id: 1, name: 'Alice', score: 85, class: 'A' },
{ id: 2, name: 'Bob', score: 92, class: 'B' },
{ id: 3, name: 'Charlie', score: 78, class: 'A' },
{ id: 4, name: 'David', score: 95, class: 'C' },
{ id: 5, name: 'Eva', score: 89, class: 'A' },
{ id: 6, name: 'Freddy', score: 90, class: 'C' },
];

// find the sum of average score in class 
// “A” and “B”. should be a function and should work on changing the “A” or  “B”

students.filter((s) => s.class === "A").reduce((acc, curr, index, array) => {
    acc+=curr.score;
    if(index === array.length - 1){
      return acc/array.length
    }
    return acc
}, 0)
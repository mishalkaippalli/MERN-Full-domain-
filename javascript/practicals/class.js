let obj =  { id: 1, name: 'Alice', score: 85, studentclass: 'A' };

// make the id private and change the id

//using class

class createStudents{
    #id;
    constructor(id, name, score, studentclass){
        this.#id = id,
        this.name = name,
        this.score = score,
        this.studentClass = studentclass
    }
    getId(){
        return this.#id
    };
    setId(newid){
      this.#id = newid
    }
}

let student = new createStudents(1, "Alice", 85, "A");

// ✅ Read id
console.log(student.getId()); // 1

// ✅ Change id
student.setId(99);
console.log(student.getId()); // 99

// ❌ Cannot access directly
// console.log(student.#id); // SyntaxError: Private field '#id' must be declared

//function based;
// function createStudent(id, name, score, studentClass){
//     let privateId = id;

//     return{
//         name,
//         score, 
//         studentClass,

//         getId(){
//             return privateId
//         },

//        setid(newid){
//         privateId = newid
//        }
//     }
// }
// let s = createStudent(1, 'alice', 85, 'A');
// console.log(s)
// s.setid(333)
// console.log(s.getId())

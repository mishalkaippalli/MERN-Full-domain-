function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: "Mishal" }); // success
      } else {
        reject(new Error("User not found")); // failure
      }
    }, 2000);
  });
}
fetchUser(1)
  .then((user) => {
    console.log("Got user:", user.name); // Got user: Mishal
  })
  .catch((err) => {
    console.log("Error:", err.message);
  })
  .finally(() => {
    console.log("Always runs — success or failure");
  });

//using async await with try catch

function fetchUser2(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(id === 1){
        resolve({id: 1, name: "Mishal"})
      } else{
        reject(new Error("id not found"))
      }
    },1000)
  })
}
async function getUser(id){
  try{
      const user = await fetchUser2(id);
      console.log(user.name)
  } catch(err){
    console.log("error", err.message)
  }finally{
    console.log("finally done")
  }
  
}
getUser(11)
function chips() {
  console.log("chips");
}

function pizza(){
  setTimeout(()=>{
    console.log("async:pizza")
  },0)
}

function main(){
  chips()
  pizza()
  chips()
  chips()
  chips()
}

main();



//output
// chips
// chips
// chips
// chips
// async:pizza

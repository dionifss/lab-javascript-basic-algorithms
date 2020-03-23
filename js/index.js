let driver = "Dioni";
console.log("The driver’s name is "+ driver)
let hacker2 ="Nate"
console.log(`The navigator’s name is ${hacker2}`)
if( driver.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${driver.length} characters.`)
}
else if ( driver.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}
for (let i = 0; i < driver.length; i++){
  console.log(driver[i].toUpperCase())
}
console.log("\n");
for (let i = driver.length - 1; i >= 0; i--){
  console.log(driver[i].toUpperCase())
}

let randomParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur luctus ante vitae tempus. Nulla lacinia libero sed quam pulvinar, eu rutrum augue auctor. Integer rhoncus in ante eget pellentesque. Nulla facilisi. Duis vulputate metus quis augue luctus faucibus. Maecenas maximus volutpat finibus. Etiam tristique libero id velit convallis dictum. Ut feugiat mauris urna, ac dapibus urna pretium a. Fusce maximus tincidunt dolor vel tempor. Phasellus bibendum dignissim dolor efficitur condimentum. Donec molestie ullamcorper sagittis. Nulla facilisi. Fusce id pharetra magna, ac ultricies ipsum. Proin feugiat varius felis a tristique. In finibus condimentum massa, a convallis lacus eleifend a.
Duis at libero lectus. Mauris id cursus arcu, ac sollicitudin odio. Mauris vestibulum leo eget molestie vestibulum. Suspendisse posuere, ante vitae maximus ultricies, mauris mi molestie risus, sed finibus erat libero sit amet ex. Aliquam arcu nulla, viverra eu commodo eget, placerat quis tortor. Integer rhoncus finibus finibus. Aenean feugiat nisl ac efficitur interdum. Vestibulum eu euismod arcu. Aenean porta ultrices nibh, luctus maximus magna pharetra ut. Maecenas eu nisi at ex lacinia mattis a nec tellus. Vestibulum egestas mollis metus vitae porta. Aenean a risus nunc. Fusce euismod accumsan scelerisque.
Curabitur congue tellus sit amet ex volutpat, quis molestie nisl pellentesque. Curabitur sed augue quis purus ornare accumsan vitae faucibus quam. Nam finibus posuere varius. Aenean lobortis interdum justo ac tempor. Cras porttitor vitae risus id facilisis. Aliquam vitae orci imperdiet, sagittis lorem sed, malesuada mi. Nulla ligula lacus, pretium in posuere ut, vestibulum at nibh. Proin eget elit at dui varius tristique eu ac ex. Vestibulum commodo nisl augue, in aliquet lectus suscipit in. Morbi ultricies semper aliquam. Phasellus congue placerat egestas. Mauris consectetur, nisl sit amet vulputate laoreet, velit justo eleifend tortor, malesuada cursus tellus elit eget nunc.`
let wordCount = randomParagraph.split(" ");
console.log(wordCount.length);

let counting = 0
for (let i= 0; i<= wordCount.length;i++ ){
  if (wordCount[i]=== "et"){
    counting++
  }
}
console.log(counting)

let phraseToCheck= "Amor, Roma"
let amo= phraseToCheck.slice(0,4);
let roma=phraseToCheck.slice(6,10)
console.log(amo)
console.log(roma)
let phraseToCheck2= amo + roma
console.log(phraseToCheck2)
for(let i=0; i<=phraseToCheck2.length;i++){
  if(phraseToCheck2[i] === phraseToCheck2[phraseToCheck2.length - i]){
    console.log("palindrom")
  }
}
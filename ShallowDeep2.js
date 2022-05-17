let words = ["car", "mouse", "phone", { a: "charger", b: "sim" }];

// DEEp copying..
// similar for objects
let texts = JSON.parse(JSON.stringify(words));

texts[1] = "swimming";
texts[3]["a"] = "protocol";
console.log(words, "Words");
console.log(texts, "texts");



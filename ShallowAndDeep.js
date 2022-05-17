let words = ["car", "mouse", "phone", { a: "charger", b: "sim" }];

// all shalow copy methods
/* let texts = [...words]; */
/* let texts = Array.from(words); */
let texts = words.slice(0);

texts[1] = "swimming";
texts[3]["a"] = "protocol";
console.log(words, "Words");
console.log(texts, "texts");



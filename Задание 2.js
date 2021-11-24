const jsonStr = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const data = JSON.parse(jsonStr);
const list = data.list;

let arr = [];
let i=0
for (i=0; i<Object.keys(list).length; i++) {
  arr.push(`{name: ${list[i].name}, age: ${Number(list[i].age)}, prof: ${list[i].prof}}`)
}


  console.log(`{list:[${arr}]}`)
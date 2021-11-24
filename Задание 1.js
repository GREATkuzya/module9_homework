const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let xmlDOM = parser.parseFromString(xmlString, "text/xml");
let students=xmlDOM.querySelectorAll("student");
 
let list =[];

students.forEach((student)=>{
     list.push(`{name:"${student.querySelector('first').textContent} ${student.querySelector('second').textContent}",age:${student.querySelector('age').textContent},prof:"${student.querySelector('prof').textContent}", lang:${student.querySelector("name").getAttribute("lang")} }`)})

console.log(`list:`, list);
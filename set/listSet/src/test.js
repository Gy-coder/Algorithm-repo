let set1 = new LinkedSet()
for(let i=1;i<=5;i++)
  set1.addElement(i)

set1.printSet()

let set2 = new LinkedSet()
for(let i=0;i<10;i++)
  set2.addElement(i)

set2.printSet()

console.log(set1.isSubsetOf(set2));


let set3 = new LinkedSet()

set3.printSet()

console.log(set3.isSubsetOf(set1));

console.log(set1.isSubsetOf(set3));
Software Design Principles
SOLID (OOD)

- Single Responsibility
  A class should only have a single responsibility, ...
- Open/Close
  Software should be open for extension, close for modification
- Liskov Substitution
  Objects should be replaceable by their subtypes without changing correctness of the program
- Interface Seperation
  Many client-specific interfaces are better than one general-purpose interface
- Dependency Inversion
  High-level modules should not depend on low-level modules but should depend on abstractions
  Abstractions should not depend on details. Details should depend on abstractions

FE ----------------- BE
creds -------------> DB
<-token, expiration date-
cookie

CSRF attack

GET www.dong.peng/\*\*
POST www.dong.peng/money (alice, 1000, token)

GET www.bob.com/\*\*
POST www.dong.peng/money (bob, 100000000000000000000, token)

                 write      search   sort

array O(1)/O(n) O(n) yes
object/hashmap O(1) O(1) no

class Store {
constructor() {
this.inventory = {
food: {
cookie: new Food('cookie', 0),
bread: new Food('bread', 0),
candy: {
amount,
}
},
drink,
toy,
};
}

display() {
Object.keys(this.inventory).sort(sortFunction).show(); // O(m)
}

sell(items) {
Object.keys(items).forEach(soldItem => {
const category = this.inventory[soldItem.category];
category[soldItem].amount -= soldItem.amout;
// O(1)

      // const itemStock = category.find(storeItem => storeItem.name === soldItem.name);
      // O(n)
      // itemStock.amount -= soldItem.amount;
    });

}
restock() {

}
}

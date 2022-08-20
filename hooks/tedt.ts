class Animal {
  sound = (type: any) => {
    type.make();
  }
}
class Cats {
  make(payload: any) {
    return {
      sound: 'meow'
    }
  }
}
class Dog {
  make() {
    console.log('ffdg');
  }
}

const cat = new Animal().sound(new Cats());
const dog = new Animal().sound(new Dog());

console.log(cat)
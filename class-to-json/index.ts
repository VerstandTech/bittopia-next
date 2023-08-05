class JsonParser {
  getJson() {
    let obj: any = {}
    Reflect.ownKeys(this).map(key => {
      if (Reflect.get(this, key) instanceof JsonParser) {
        obj[key] = (Reflect.get(this, key) as JsonParser).getJson()
      } else {
        obj[key] = Reflect.get(this, key)
      }
    })

    return obj
  }
}


class Animal extends JsonParser {
  name: string
  age: number
  something: string

  constructor () {
    super()
    this.age = 12
    this.name = 'lion'
    this.something = 'other thing'

  }
}

class Man extends JsonParser {
  animal: Animal
  name: string
  age: number 

  constructor () {
    super()
    this.animal = new Animal()
    this.name = 'John'
    this.age = 38
  }
}

const animal = new Animal()


console.log(animal.getJson())


const man = new Man()

console.log(man.getJson())

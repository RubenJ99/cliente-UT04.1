//CREACION DE OBJETOS PARA TESTING
function Student(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

function Laptop(brand, model, processor) {
  this.brand = brand;
  this.model = model;
  this.processor = processor;
}
//TESTING DE LA APLICACION
(function () {
  try {
    let regularList = new List(10);
    let student1 = new Student("Ruben", 22, 176);
    let student2 = new Student("Andrea", 20, 164);
    let student3 = new Student("Miguel", 25, 186);

    console.log("--- COMIENZA EL TESTEO DE LIST ---");
    console.log("isEmpty -> Expected: true / Got: " + regularList.isEmpty());
    console.log("isFull -> Expected: flase / Got: " + regularList.isFull());
    console.log("size -> Expected: 0 / Got: " + regularList.size());
    console.log(">>(Añado 3 estudiantes usando Add)<<");
    regularList.add(student1);
    regularList.add(student2);
    console.log("size -> Expected: 3 / Got: " + regularList.add(student3));
    console.log(">>(Añado 1 estudiantes usando AddAt pos = 3 <<");
    console.log("size -> Expected: 4 / Got: " + regularList.addAt(student1, 3));
    console.log(
      "get(pos=3) -> Expected: student1(Ruben) / Got: " + regularList.get(3)
    );
    console.log(
      "toString -> Expected: 4 obj / Got: \n" + regularList.toString()
    );
    console.log(
      "indexOf(student2) -> Expected: 1 / Got: " + regularList.indexOf(student2)
    );
    console.log(
      "lastIndexOf(student1) -> Expected: 3 / Got: " +
        regularList.lastIndexOf(student1)
    );
    console.log("capacity -> Expected: 10 / Got: " + regularList.maxCapacity());
    console.log(">>(Borro los datos usando clear)<<");
    regularList.clear();
    console.log("nueva size -> Expected: 0 / Got: " + regularList.size());
    console.log(">>(Añado 3 estudiantes usando Add)<<");
    regularList.add(student3);
    regularList.add(student2);
    regularList.add(student1);
    console.log(
      "firstElement -> Expected: Student3(Miguel) / Got: " +
        regularList.firstElement()
    );
    console.log(
      "lastElement -> Expected: Student1(Ruben) / Got: " +
        regularList.lastElement()
    );
    console.log(
      "remove(indx = 0) -> Expected: Student3(Miguel) / Got: " +
        regularList.remove(0)
    );
    console.log(
      "removeElement(Student2) -> Expected: Student2(Andrea) / Got: " +
        regularList.removeElement(student2)
    );
    console.log(
      "set(student2/indx=0) -> Expected: Student1(Ruben) / Got: " +
        regularList.set(student1, 0)
    );
  } catch (error) {
    console.log(error.toString());
  }

  console.log(" >> PROBANDO ERRORES <<");
})();

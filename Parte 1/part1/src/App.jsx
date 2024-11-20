const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </div>
  );
};

/* function App() o */
const App = () => {
  const name = "Frida";
  const age = 6;
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  //Un objeto
  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];

  //uhn areglo
  const closeFriends = ["Peter", "Maya"];
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Andy" age={30 + 5} />
      <Hello name={name} age={age} />
      <p> it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <h3>Intento de renderizar un objeto</h3>
      <p>{/*friends[0]*/}</p>
      {/* Esto da un error ya que a react no se le puede pasar objetos como childs si no que se le pasan valores primitivos
      tales como numeros o strigs
      
      Error: Objects are not valid as a React child (found: object with keys {name, age}). If you meant to render a collection of children,
      use an array instead.*/}
      <p>
        Una forma correcta de mostrar el contenido del objeto es accediendo a
        sus propiedades{" "}
      </p>
      <p>
        {" "}
        Hola {friends[0].name} tienes {friends[0].age} años de edad
      </p>

      <p> Hola {friends[1].name}</p>
      <br />
      <p>Usando un arreglo</p>
      <p>{closeFriends}</p>
      <p>
        El nombre de mis amigos es {closeFriends[0]} y {closeFriends[1]}
      </p>
    </div>
  );
};

export default App;

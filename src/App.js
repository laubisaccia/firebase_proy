import "./App.css";
import { useEffect, useState } from "react";
import { firestore } from "./firebase";

function App() {
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    titulo: " ",
    descripcion: " ",
    id: "",
  });

  useEffect(() => {
    firestore
      .collection("tweets")
      .get()
      .then((snapshot) => {
        let result = [];
        snapshot.forEach((doc) => {
          console.log(doc.data());
          const newTweet = { ...doc.data(), id: doc.id };
          result.push(newTweet);
        });
        setTweets(result);
      });
    console.log("probando");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const enviarTweet = firestore.collection("tweets").add(tweet);

    console.log(enviarTweet);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newTweet = {
      ...tweet,
      [name]: value,
    };
    setTweet(newTweet);
  };

  const handleDelete = (id) => {
    console.log("testing id", id);
  };
  console.log("1", tweets);
  return (
    <div className="App">
      <form>
        <textarea
          rows="10"
          cols="23"
          onChange={handleChange}
          name="descripcion"
        ></textarea>
        <div>
          <input name="titulo" onChange={handleChange}></input>
          <button onClick={handleSubmit}>SEND</button>
        </div>
      </form>

      {tweets.map((value) => {
        return (
          <>
            <h2>{value.titulo}</h2>
            <p>{value.descripcion}</p>
            <button onClick={() => handleDelete(value.id)}>X</button>
          </>
        );
      })}
    </div>
  );
}

export default App;

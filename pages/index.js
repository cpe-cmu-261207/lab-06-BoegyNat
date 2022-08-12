import axios from "axios";
import { useState } from "react";
import UserCard from "../components/UserCard";

export default function Home() {
  const [todoInput, setTodoInput] = useState(1);
  const [todoUser, setUser] = useState([]);
  const genUsers = async () => {
    let n = todoInput;
    if (n > 0) {
      const People = [];
      for (let i = 0; i < n; i++) {
        const resp = await axios.get(`https://randomuser.me/api/`);
        People[i] = {
          name:
            resp.data.results[0].name.first +
            " " +
            resp.data.results[0].name.last,
          pic: resp.data.results[0].picture.large,
          email: resp.data.results[0].email,
          adress:
            resp.data.results[0].location.city +
            " " +
            resp.data.results[0].location.state +
            " " +
            resp.data.results[0].location.country +
            " " +
            resp.data.results[0].location.postcode,
        };
      }
      setUser(People);
      console.log(People);
    } else {
      alert("Invalid number of user");
      return;
    }
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setTodoInput(event.target.value);
          }}
          value={todoInput}
        />
        <button
          class="btn btn-dark"
          onClick={() => {
            genUsers();
          }}
        >
          Generate
        </button>
      </div>

      {todoUser.map((x) => (
        <UserCard
          key={x.name}
          name={x.name}
          pic={x.pic}
          email={x.email}
          adress={x.adress}
        />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Nat Ucharattana 640610632
      </p>
    </div>
  );
}

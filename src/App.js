import * as React from "react";
import "./styles.css";
const compartment = 3;
export function App() {
  const [form, setForm] = React.useState({});

  React.useEffect(() => {
    if (compartment) {
      let newState = {};
      for (let i = 1; i <= compartment; i++) {
        newState = {
          ...newState,
          [i]: {
            name: "",
            lastname: ""
          }
        };
      }
      setForm(newState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compartment]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const index = name.split("-")[0];
    const nameSplited = name.split("-")[1];
    let values = {};
    if (nameSplited === "name") {
      for (let i = 1; i <= compartment; i++) {
        values = {
          ...values,
          [i]: {
            [nameSplited]: value
          }
        };
        setForm(values);
      }
    }
    setForm((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        [nameSplited]: value
      }
    }));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {Object.keys(form).map((id) => (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "18px"
            }}
          >
            <input
              name={`${id}-name`}
              onChange={(e) => handleChange(e)}
              value={form[id].name}
            />
            <input
              name={`${id}-lastname`}
              onChange={(e) => handleChange(e)}
              value={form[id].lastname}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

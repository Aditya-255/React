import React, { Component } from "react";

class MultiplePart2 extends Component {
  constructor() {
    super();
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { t1, t2, t3, t4, t5 ,t6 ,t7 ,t8 ,t9 } = this.state;

    return (
      <div className="flex flex-col gap-3 p-4">

        <input
          type="text"
          name="t1"
          value={t1}
          placeholder="Enter value 1"
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="t2"
          value={t2}
          placeholder="Enter value 2"
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="t3"
          value={t3}
          placeholder="Enter value 3"
          onChange={this.handleChange}
        />

        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={t4 === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>

          <label className="ml-4">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={t4 === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
        </div>

        <select
          name="city"
          value={t5}
          onChange={this.handleChange}
        >
          <option value="">-- Select City --</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Vadodara">Vadodara</option>
          <option value="Jamnagar">Jamnagar</option>
        </select>

        <div className="mt-4">
          <p><strong>Gender:</strong> {t4}</p>
          <p><strong>City:</strong> {t5}</p>
        </div>
      </div>
    );
  }
}

export default MultiplePart2;

import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

const initialState = {
  boxId: "",
  boxOwner: "",
  boxSize: "",
};

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="owner">Box Owner:</label>
        <input
          type="text"
          name="boxOwner"
          id="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />
        <label htmlFor="size">Box Size:</label>
        <select
          name="boxSize"
          id="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;

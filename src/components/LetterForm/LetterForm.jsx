import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  mailboxId: "",
  recipient: "",
  message: "",
};

const LetterForm = ({ mailboxes, letters, addLetter }) => {
  const navigate = useNavigate();

  const [letterData, setLetterData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    addLetter(letterData);
    setLetterData(initialState);
    console.log('letterData:', letterData)
    navigate(`/mailboxes/${letterData.mailboxId}`);
  };

  const handleChange = ({ target }) => {
    setLetterData({ ...letterData, [target.name]: target.value });
  };

  return (
    <>
      <h2>Send a Letter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a Mailbox:</label>
        <select name="mailboxId" id="mailboxId" value={letterData.mailboxId} onChange={handleChange}>
                <option value="" disabled>Select a Mailbox</option>
            {mailboxes.map((mailbox) => (
                <option key={mailbox.mailboxId} value={mailbox.mailboxId}>Mailbox {mailbox.mailboxId}</option>
            ))}
        </select>

        <label htmlFor="recipient">Recipient:</label>
        <input type="text" name="recipient" id="recipient" value={letterData.recipient} onChange={handleChange} />

        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" rows={5} cols={40} value={letterData.message} onChange={handleChange} ></textarea>

        <button type='submit'>Send Letter</button>      
      </form>
    </>
  );
};

export default LetterForm;

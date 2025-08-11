import React from "react";
import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailbox List</h2>
      <ul>
        {/* {mailboxes.map((currentBox) => (
          <li key={currentBox._id}>
            <Link to={`/mailbox/${currentBox._id}`}>{currentBox._id}</Link>
          </li>
        ))} */}
      </ul>
    </>
  );
};

export default MailboxList;

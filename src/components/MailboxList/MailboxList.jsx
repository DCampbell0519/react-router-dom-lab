import React from "react";
import { Link } from "react-router";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailbox List</h2>
      <ul>
        {mailboxes.map((currentBox) => (
          <li key={currentBox.mailboxId}>
            <div className="mail-box">
              <Link to={`/mailboxes/${currentBox.mailboxId}`}>
                Mailbox {currentBox.mailboxId}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;

import React from "react";
import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  console.log("URL Params:", mailboxId);
  console.log({ mailboxes });

  const selectedBox = mailboxes.find((mailbox) => {
    return mailbox.mailboxId === Number(mailboxId);
  });

  if (!selectedBox) {
    return <h2>Mailbox not found</h2>;
  }

  return (
    <>
      <div className="mail-box">
        <h2>Mailbox {selectedBox.mailboxId}</h2>
        <h3>Details:</h3>
        <dl>
          <dt>Box Holder: {selectedBox.boxOwner}</dt>
          <dt>Box Size: {selectedBox.boxSize}</dt>
          <dt>Box ID: {selectedBox.mailboxId}</dt>
        </dl>
      </div>
    </>
  );
};

export default MailboxDetails;

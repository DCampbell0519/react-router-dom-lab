import React from "react";
import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  console.log("URL Params:", mailboxId);
  console.log({ mailboxes });
  console.log('Letters:', letters)

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
      <div className='letter-display'>
        <h2>Letters:</h2>
        {letters.map((letter) => (
          <div style={{ border: '3px solid black', margin: '20px', width: '60%' }}key={letter.mailboxId}>
            <p>{letter.recipient}</p>
            <p>{letter.message}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MailboxDetails;

import React from 'react'
import { useParams } from 'react-router'

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();
    console.log('URL Params:', mailboxId)
    console.log(props)

    const selectedBox = props.mailboxes.find(mailbox => {
        return mailbox._id === Number(mailboxId)
    })

  return (
    <>
        <div className='mail-box'>
            <h2>Mailbox {selectedBox._id}</h2>
            <dl>
                <dt>Box Holder:</dt>
                <dd>{selectedBox.boxOwner}</dd>
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxSize}</dd>
            </dl>
        </div>
    </>
  )
}

export default MailboxDetails
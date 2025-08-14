import { useState } from 'react'
import { Route, Routes } from 'react-router'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import LetterForm from './components/LetterForm/LetterForm.jsx'
import './App.css'

function App() {

  const [mailboxes, setMailboxes] = useState([])
  const addBox = (newMailbox) => {
    newMailbox.mailboxId = mailboxes.length + 1;
    setMailboxes([ ...mailboxes, newMailbox ])
    // console.log(newMailbox)
  }

  const [letters, setLetters] = useState([])
  const addLetter = (newLetter) => {
    setLetters([ ...letters, newLetter ]);
  };

    return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}></Route>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}></Route>
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}></Route>
        <Route path='/new-letter' element={<LetterForm mailboxes={mailboxes} addLetter={addLetter}/>}></Route>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>}></Route>
        <Route path='*' element={<h2>404 This Mailbox does not exist</h2>}></Route>
      </Routes>
    </>
  )
}

export default App

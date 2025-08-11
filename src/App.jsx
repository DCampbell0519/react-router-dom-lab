import { useState } from 'react'
import { Route, Routes } from 'react-router'
import MailboxDetails from './components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from './components/MailboxForm/MailboxForm.jsx'
import MailboxList from './components/MailboxList/MailboxList.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import './App.css'

function App() {

  const [mailboxes, setMailboxes] = useState([])
  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([ ...mailboxes, newMailbox ])
  }

  return (
    <>
      <h1>Mailbox</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}></Route>
        <Route path='/mailboxes' element={<MailboxList />}></Route>
        <Route path='/new-mailbox' element={<MailboxForm />}></Route>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />}></Route>
      </Routes>
    </>
  )
}

export default App

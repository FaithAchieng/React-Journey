import Student from'./Student';
function App() {
  return(
    <>
    <Student name="Spongebob" age={30}
    isStudent={true} />
    <Student name="Patrick" age={42} isStudent={false} />
    <Student />
    </>
  );
  
}

export default App

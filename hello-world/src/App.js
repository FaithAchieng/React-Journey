import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from'./components/welcome'
import Hello from'./components/Hello'
import Message from'./components/Message'
import Counter from'./components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponet from './components/ParentComponet';
import UserGreeting from './components/UserGreeting';
function App() {
  return (
    <div className="App">
      < UserGreeting />
      {/* <ParentComponet /> */}
      {/* <EventBind /> */}
     {/*} <ClassClick />
      <FunctionClick />*/}
      {/*<Counter />*/}
     {/* <Message /> */}
     {/*} <Greet name='Bruce' heroName='Batman' >
       <p>This is children props</p>
      </Greet>
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder woman' />
       <Welcome name='Bruce' heroName='Batman' /> 
       <Welcome name='Clark' heroName='Superman'/> 
       <Welcome name='Diana' heroName='Wonder woman'/> 
      {/*<Hello />*/}
    </div>
  );
}

export default App;

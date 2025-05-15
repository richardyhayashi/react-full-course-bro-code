import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Richard"/>
    </>
  );
}

export default App;

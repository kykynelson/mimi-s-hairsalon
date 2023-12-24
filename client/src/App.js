import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/bacon')
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  }, []);
  return (
    <div>
      <header>

        <p>
          Hello World!
        </p>

      </header>
    </div>
  );
}

export default App;

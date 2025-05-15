import List from "./components/List";

function App() {
  const fruits = [
    { id: 1, name: 'Apple', calories: 95 },
    { id: 2, name: 'Orange', calories: 45 },
    { id: 3, name: 'Banana', calories: 105 },
    { id: 4, name: 'Coconut', calories: 159 },
    { id: 5, name: 'Pineapple', calories: 37 },
  ];
  const vegtables = [
    { id: 6, name: 'Potatoes', calories: 110 },
    { id: 7, name: 'Celery', calories: 15 },
    { id: 8, name: 'Carrots', calories: 25 },
    { id: 9, name: 'Corn', calories: 63 },
    { id: 10, name: 'Broccoli', calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List itemList={fruits} category="Fruits" />}
      {vegtables.length > 0 && (
        <List itemList={vegtables} category="Vegtables" />
      )}
    </>
  );
}

export default App;

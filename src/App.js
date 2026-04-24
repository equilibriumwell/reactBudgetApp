// biome-ignore assist/source/organizeImports: <explanation>
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import "./App.css";
// import ButtonSaveOrCancel from "./components/ButtonSaveOrCancel";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
// import EntryLine from "./components/EntryLine";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import React from "react";
import ModelEdit from "./components/ModelEdit";
// import EntryLine from "./components/EntryLine";
// import setIsOpen from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = React.useState("");
  const [value, setValue] = React.useState("");
  const [isExpense, setIsExpense] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const [entryId, setEntryId] = React.useState(null);
  const [totalIncome, setTotalIncome] = React.useState(0);
  const [totalExpenses, setTotalExpenses] = React.useState(0);
  const [totalBalance, setTotalBalance] = React.useState(0);

  useEffect(() => {
    // Only run the update logic if the modal just CLOSED and we have an ID
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);

      if (index !== -1) {
        const newEntries = [...entries];
        // Create a fresh object to avoid direct mutation
        newEntries[index] = {
          ...newEntries[index],
          description,
          value,
          isExpense
        };
        setEntries(newEntries);

        // OPTIONAL: Reset fields so the "Add New" form is clean again
        // resetEntry();
      }
    }
    // Include all dependencies so the linter is happy and data is fresh
  }, [isOpen, entryId, description, value, isExpense, entries]);

  // Helper to clear form
  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
    setEntryId(null);
  };

  useEffect(() => {
    let income = 0;
    let expense = 0;

    entries.forEach((entry) => {
      if (entry.isExpense) {
        expense += entry.value;
      } else {
        income += entry.value;
      }
      setTotalBalance(income - expense);
      setTotalExpenses(expense);
      setTotalIncome(income);
    });

    // To make these useful, you'd usually update state here:
    // setTotalIncome(income);
    // setTotalExpenses(expense);
  }, [entries]);
  // useEffect(() => {
  //   let totalIncome = 0;
  //   let totalExpenses = 0;
  //   entries.map((entry) =>
  //     if(entry.isExpense) {
  //       return (totalExpenses += entry.value);
  //     } else {
  //       return (totalIncome += entry.value);
  //     }
  //   );
  // }, [entries]);

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);

    setEntries(result);
  };
  function editEntry(id) {
    // 1. Find the specific entry by ID
    const entry = entries.find((e) => e.id === id);

    if (entry) {
      // 2. Load its data into the state so the inputs aren't blank
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);

      // 3. Open the modal
      setIsOpen(true);
    }
  }
  // function editEntry(id, description, value, isExpense) {
  //   if (id) {
  //     const result = entries.map((entry) => {
  //       if (entry.id === id) {
  //         return { ...entry, description, value, isExpense };
  //       }
  //       return entry;
  //     });
  //     setEntries(result);
  //     setIsOpen(true);
  //   }
  // }

  function addEntry() {
    const result = [
      ...entries,
      {
        id: entries.length + 1,
        description: description,
        value: value,
        isExpense: isExpense,
      },
    ];

    setEntries(result);
    // resetEntry();
  }
  return (
    <Container>
      <MainHeader />
      <DisplayBalance title="Your Balance" value={Number(totalBalance).toFixed(2)} size="small" />
      <DisplayBalances totalIncome={Number(totalIncome)} totalExpenses={Number(totalExpenses)} />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} setIsOpen={setIsOpen} editEntry={editEntry} />
      <MainHeader title="Add New Transaction" type="h3" />

      <NewEntryForm addEntry={addEntry} description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense} />
      <ModelEdit isOpen={isOpen} setIsOpen={setIsOpen} addEntry={addEntry} description={description} setDescription={setDescription} value={value} setValue={setValue} isExpense={isExpense} setIsExpense={setIsExpense} />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work Income",
    value: 1000.0,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water Bill",
    value: 100.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 300.0,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power Bill",
    value: 150.0,
    isExpense: true,
  }
];
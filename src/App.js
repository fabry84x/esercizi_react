import { useMemo } from "react";
import { FilteredList } from "./FilteredList"

export function App() {
  function getValues() {
    const persons = [
      {
        id: 1,
        name: 'Giacomo',
        age: 21,
      },
      {
        id: 2,
        name: 'Giovanni',
        age: 15,
      },
      {
        id: 3,
        name: 'Paola',
        age: 26,
      },
      {
        id: 4,
        name: 'Roberta',
        age: 29,
      },
      {
        id: 5,
        name: 'Giorgio',
        age: 24,
      }
    ];

    return persons.filter(person => person.age > 18).map(filteredArray => (
      <li>
        {filteredArray.name}
      </li>
    ))
  }

  const data = useMemo(() => getValues(), []) 

  return (
    <div>
      <FilteredList values={data} />
    </div>
  )
}
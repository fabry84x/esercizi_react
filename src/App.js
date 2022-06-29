import { CarDetails } from "./CarDetails"


export function App() {
  
  const defaultCar = {
    model: 'fiat',
    year: 2022,
    color: 'red'
  }

  return (
    <div>
      <CarDetails initialData={defaultCar} />
    </div>
  )
}

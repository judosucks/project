import {useSelector, useDispatch} from "react-redux"

function CarList() {

        
    const cars = useSelector((state) => {
        return state.cars.data
    })
    console.log(cars, 'cars')
    const handleCarDelete=()=>{}

    const renderedCars = cars.map((car) => {
        return (
            <div className="panel" key={car.id}>
                <p>
                    {car.name}
                    - NT${car.cost}
                </p>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        )
    })
    return (
        <div className="car-list">{renderedCars}<hr/></div>
    )

}
export default CarList
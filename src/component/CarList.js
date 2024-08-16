import {useSelector, useDispatch} from "react-redux"
import {removeCar} from "../store"
function CarList() {

    const dispatch = useDispatch()
    const cars = useSelector(({cars:{data,searchTerm}}) => {
        return data.filter((car)=>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })
    console.log(cars, 'cars')
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }

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
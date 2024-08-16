import { useSelector ,useDispatch} from "react-redux"
import { changeCost, changeName ,addCar} from "../store"

function CarForm() {

    const dispatch = useDispatch()

 const {name,cost} = useSelector((state)=>{
    console.log(state,'state from selector')
    return {
        name:state.form.name,
        cost:state.form.cost
    }
 })
 const handleSubmit =(event)=>{
event.preventDefault()

dispatch(addCar({
    name,
    cost
}))

 }
 const handleNameChange =(event)=>{
      dispatch(changeName(event.target.value))
 }
const handleCostChange=(event)=>{
      dispatch(changeCost(parseInt(event.target.value)||0)) //parse input to number only
}
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input 
                        className="input is-expanded" 
                        value={name} 
                        onChange={handleNameChange}/>
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input 
                        className="input is-expanded" 
                        value={cost||''} 
                        onChange={handleCostChange}
                        type="number"/>
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>

        </div>
    )

}
export default CarForm
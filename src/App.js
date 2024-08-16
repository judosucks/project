import CarValue from "./component/CarValue"
import CarList from "./component/CarList"
import CarSearch from "./component/CarSearch"
import CarForm from "./component/CarForm"
function App(){
    return(
        <div>
            <CarList/>
            <CarValue/>
            <CarForm/>
            <CarSearch/>
        </div>
    )
}
export default App
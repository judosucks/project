import { useSelector } from "react-redux"

function CarValue(){
    const totalValue = useSelector(({form:{name,cost}})=>{
        console.log('forms',name,'cost',cost)
    })
    const totalCost = useSelector(({cars:{data,searchTerm}})=>{ 
        return data.filter((car)=>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).reduce((acc,car)=> acc + car.cost,0)
    
  })

  console.log(totalValue)
    return (<div className="relative">
        <div className="absolute right-10">
        總金額 NT${totalCost}</div></div>)

}
export default CarValue
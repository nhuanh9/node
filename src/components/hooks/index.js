import React, {useState} from "react";

const carList = ['Audi', 'MG', 'Honda', 'BMW'];
const colorList = ['blue', 'red', 'green', 'black'];
export default function HooksExercise() {
    const [selectedCar, setSelectedCar] = useState({car: carList[0], color: colorList[0]});
    return (
        <div>
            <h1>{selectedCar.car} màu {selectedCar.color}</h1>
            <select onChange={(e)=> {
                setSelectedCar({...selectedCar, car: e.target.value})
            }}>
                {carList.map((car, index) => (
                    <option key={index} value={car}>{car}</option>
                ))}
            </select>
            <select  onChange={(e)=> {
                setSelectedCar({...selectedCar, color: e.target.value})
            }}>
                {colorList.map(color => (
                    <option value={color}>{color}</option>
                ))}
            </select>
        </div>
    )
}

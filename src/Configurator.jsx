import React, { useState, useEffect } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Images } from "./Images";
import './Configurator.css';

const kasety = [
    { name: 'Pełna', index: 0 },
    { name: 'półkaseta', index: 1 },
];
const model1 = [
    { name: 'Moderno', index: 0 },
    { name: 'Presto', index: 1 },
];

const model2 = [
    { name: 'Agadio', index: 2 },
    { name: 'Tremolo', index: 3 },
]

const tkaniny = [
    { name: 'Wełna', index: 0 },
    { name: 'Welur', index: 1 },
]

export default function Configurator() {

    const [image, setImage] = useState(Images[0])

    useEffect(() => { }, [image])

    const [indexes, setIndexes] = useState({
        kaseta: 0,
        model: null,
        tkanina: 0
    });
    const [kaseta, setKaseta] = useState(null);
    const [models1, setModels1] = useState(null);
    const [models2, setModels2] = useState(null);
    const [tkanina, setTkanina] = useState(null);


    const handleKaseta = (e) => {
        setKaseta(e.value);
        setIndexes({ ...indexes, kaseta: e.value.index })
    }

    const handleModel = (e) => {
        e.value.index < 2 ? setModels1(e.value) : setModels2(e.value)
        setIndexes({ ...indexes, model: e.value.index })
        if (tkanina !== null) {
            setNewImage(e.value.index)
        }
    }

    const handleTkanina = (e) => {
        setTkanina(e.value)
        setIndexes({ ...indexes, tkanina: e.value.index })
        setNewImage()
    }

    const setNewImage = (index = null) => {

        if (indexes.model !== null && index === null) {
            setImage(Images[indexes.model + 1])
        } else {
            setImage(Images[index + 1])
        }
    }

    return (
        <div className="container">
            <div className="buttons">
                <div className="select-row">
                    <h3>Kaseta</h3>
                    <div className="card flex justify-content-center">
                        <Dropdown value={kaseta} onChange={(e) => handleKaseta(e)} options={kasety} optionLabel="name"
                            className="w-full md:w-14rem" placeholder="wybierz kasetę" />
                    </div>
                </div>
                <div className="select-row">
                    <h3>Model</h3>
                    {indexes.kaseta === 0 ?
                        <div className="card flex justify-content-center">
                            <Dropdown value={models1} onChange={(e) => handleModel(e)} options={model1} optionLabel="name"
                                className="w-full md:w-14rem" placeholder="Wybierz model" />
                        </div>
                        :
                        <div className="card flex justify-content-center">
                            <Dropdown value={models2} onChange={(e) => handleModel(e)} options={model2} optionLabel="name"
                                className="w-full md:w-14rem" placeholder="Wybierz model" />
                        </div>
                    }
                </div>
                <div className="select-row">
                    <h3>Tkanina</h3>
                    <div className="card flex justify-content-center">
                        <Dropdown value={tkanina} onChange={(e) => handleTkanina(e)} options={tkaniny} optionLabel="name"
                            className="w-full md:w-14rem" placeholder="Wybierz tkaninę" disabled={models2 === null && models1 === null ? true : false} />
                    </div>
                </div>
            </div>
            <div className="picture">
                <img src={'.' + image} alt="obraz produktu" />
            </div>
        </div>
    )
}
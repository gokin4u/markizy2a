import React, { useState, useEffect } from "react";
import './Configurator.css';
import { category, models, colors, fabric, dimensions } from "./Products";
import NProgress from 'nprogress';
import Type from './imgs/type.png'
import Model from './imgs/model.png'
import Color from './imgs/color.png'
import Fabric from './imgs/fabric.png'
import Ruler from './imgs/ruler.png'
import { LoadingSpinner } from "./LoadingSpinner";

export default function Configurator() {

    const [selectedCategory, setCategory] = useState(1)
    const [selectedModel, setModel] = useState(1)
    const [selectedColor, setColor] = useState(1)
    const [selectedFabric, setFabric] = useState(1)
    //tutaj ustawiamy domyslne foto jakby nie wskoczylo inne
    const [image, setImage] = useState('./default.jpg')
    const [imageLoading, setImageLoading] = useState(true)

    const renderCategories = (categories) => {

        return categories.map((cat) => {
            const classes = selectedCategory === cat.id ? 'category-btn selected' : 'category-btn'
            return (

                <div key={cat.id} onClick={() => setCategory(cat.id)} className={classes}>
                    {cat.name}
                </div>
            )
        });
    };

    const renderModel = (models) => {
        const selected = models.filter(item => item.categoryId === selectedCategory)

        return selected.map(model => {
            const classes = model.id === selectedModel ? 'model-ico selected' : 'model-ico'
            return (
                <div key={model.id} onClick={() => setModel(model.id)} className={classes}
                    style={{
                        backgroundImage: `url(${model.bgImg})`
                    }}>
                    {model.name}
                </div >
            )
        })
    }

    const renderColors = (colors) => {
        const model = models.find(product => product.id === selectedModel)
        const modelColors = colors.filter(color => model.colorsIds.includes(color.id))

        return modelColors.map(color => {
            const classes = color.id === selectedColor ? 'color-ico selected' : 'color-ico'
            return (
                <div key={color.id} onClick={() => setColor(color.id)} className={classes}
                    style={{
                        background: color.code, color: color.font
                    }}>
                    {color.name}
                </div >
            )
        })

    }

    const renderFabric = (currentFabric) => {

        const model = models.find(product => product.id === selectedModel)
        const modelFabrics = currentFabric.filter(fab => model.fabrics.includes(fab.id))

        return modelFabrics.map((fab) => {
            const classes = selectedFabric === fab.id ? 'fabric-btn selected' : 'fabric-btn'
            return (
                <div key={fab.id} onClick={() => setFabric(fab.id)} className={classes} style={{
                    backgroundImage: `url(${fab.bgImg})`
                }}>
                    {fab.name}
                </div>
            )
        });
    }
    const renderWidthRadio = (values) => {
        const model = models.find(product => product.id === selectedModel)
        const modelHeights = values.find(value => value.productId === model.id)

        return (
            <form>
                {modelHeights.width.map(width => (
                    <div key={width}>
                        <input type="radio" id={width} name="width" value={width} />
                        <label htmlFor="width">{width + ' cm'}</label><br />
                    </div >
                ))}

            </form>
        );
    }

    const renderRangeRadio = (values) => {
        const model = models.find(product => product.id === selectedModel)
        const modelHeights = values.find(value => value.productId === model.id)

        return (
            <form>
                {modelHeights.range.map(rng => (
                    <div key={rng}>
                        <input type="radio" id={rng} name="range" value={rng} />
                        <label htmlFor="range">{rng + ' cm'}</label><br />
                    </div >
                ))}

            </form>
        );
    }

    const handleImageChange = (modelId, colorId = null, fabricId = null) => {
        setImageLoading(true)
        const { name, colorsIds } = models.find(model => model.id === modelId)
        let color = colorId || selectedColor

        if (colorsIds.indexOf(color) === -1) {
            color = colorsIds[0]
        }
        const fabric = fabricId || selectedFabric
        const newImgUrl = name + '-' + color + '-' + fabric + '.jpg'
        console.log(newImgUrl + '  ...zdjecie o takiej nazwie jest potrzebne jesli sie nie wyswietla')

        setImage('./' + newImgUrl)
        setTimeout(() => setImageLoading(false), 200)
    }

    // zmiana zdjecia przy wykryciu zmiany inncyh parametrow
    useEffect(() => {
        NProgress.set(0.0);
        handleImageChange(selectedModel)
        NProgress.set(1.0)
    }, [selectedModel, selectedColor, selectedFabric])

    // renderowany na froncie html
    return (
        <div className="container">
            <div className="buttons">
                <div className="select-row">
                    <div className="title">
                        <img src={Type} alt="Kaseta" />
                        <h3>Kaseta</h3>
                    </div>

                    <div className="categories">
                        {renderCategories(category)}
                    </div>

                </div>
                <div className="select-row">
                    <div className="title">
                        <img src={Model} alt="Model" />
                        <h3>Model</h3>
                    </div>
                    <div className="models">
                        {renderModel(models)}
                    </div>
                </div>
                <div className="select-row">
                    <div className="title">
                        <img src={Color} alt="Kolor konstrukcji" />
                        <h3>Kolor konstrukcji</h3>
                    </div>
                    <div className="colors-palet">
                        {renderColors(colors)}
                    </div>

                </div>
                <div className="select-row">
                    <div className="title">
                        <img src={Fabric} alt="Tkaniny" />
                        <h3>Tkanina</h3>
                    </div>
                    <div className="categories">
                        {renderFabric(fabric)}
                    </div>
                </div>
                <div className="select-row">
                    <div className="title">
                        <img src={Ruler} alt="Wymiary" />
                        <h3>Wymiary</h3>
                    </div>
                    <div className="dimensions">
                        <div className="width">
                            <h4>Szerokość</h4>
                            {renderWidthRadio(dimensions)}
                        </div>
                        <div className="range">
                            <h4>Wysięg</h4>
                            {renderRangeRadio(dimensions)}
                        </div>

                    </div>
                </div>
            </div>
            <div className="picture">
                {imageLoading ? <LoadingSpinner /> : <img src={image} alt="markiza" />}
                <p className="selected-model-desc">{models[selectedModel - 1].desc}</p>
            </div>
        </div>
    )
}
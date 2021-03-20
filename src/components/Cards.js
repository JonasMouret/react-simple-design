import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check the new product</h1>
            <div className="card__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-9.jpg"
                            text="Get your logo for 50€"
                            label="Logo"
                            path="/services"
                        />
                        <CardItem 
                            src="images/img-7.jpg"
                            text="Get your web design new génération"
                            label="WebDesign"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="images/img-2.jpg"
                            text="Get your logo for 50€"
                            label="Logo"
                            path="/services"
                        />
                        <CardItem 
                            src="images/img-1.jpg"
                            text="Get your web design new génération"
                            label="WebDesign"
                            path="/services"
                        />
                        <CardItem 
                            src="images/img-5.jpg"
                            text="Get your web design new génération"
                            label="WebDesign"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

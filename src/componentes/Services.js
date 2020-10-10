import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
   state={
       servicios:[ 
            {
                icon:<FaCocktail></FaCocktail>,
                title:'cocktail Gratis',
                info:'Agradable mezcla de sabores con un toque de limon'
            },
            {
                icon:<FaHiking></FaHiking>,
                title:'A Escalar',
                info:'Nuestras montañas lo estan esperando'
            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:'Transporte Gratis',
                info:'Adonde quieras, nosotros te llevamos'
            },
            {
                icon:<FaBeer></FaBeer>,
                title:'Cerveza intensa',
                info:'El lupulo mas natural esta aqui'
            }
        ]
   }
    render() {
        return (
            <section className='services'>
                <Title title='Servicios'></Title>
                <div className='services-center'>
                    {
                        this.state.servicios.map((item,index)=>{
                            return(
                                <article key={index} className='service'>
                                    <span>{item.icon}</span>
                                    <h6>{item.title} </h6>
                                    <p>{item.info}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

import React from 'react'
import './plans.css'
import Header from '../../Components/Header'
import HeaderImage from '../../Images/header_bg_4.jpg'
import Card from '../../UI/Card'
import { plans } from '../../Data'


const Plans = () => {
  return (
    <>
      <Header title='Membership Plans' image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias repellendus odit vitae
        rem placeat non voluptas impedit suscipit commodi mollitia necessitatibus
        beatae similique eveniet sed, eaque nobis voluptates totam repudiandae!
      </Header>
      <section className='plans'>
        <div className='.container plans__container'>
          {
                   plans.map(({id,name,desc,price,features})=>{
                    return <Card key ={id} className='plan'>
                      <h3>{name}</h3>
                      <small>{desc}</small>
                      <h1>{`${price}`}</h1><h2>/mo</h2>
                      <h4>Features</h4>
                      {
                        features.map(({feature,available,},index)=>{
                          return <p key={index} className={!available ? 'disabled':''}>{feature}</p>
                        })
                      }
<button className='btn lg'>Choose Plan</button>
                    </Card>
                   })
          }
        </div>
      </section>
    </>
  )
}

export default Plans
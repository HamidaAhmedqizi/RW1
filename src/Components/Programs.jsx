import React from 'react'
import { FaCrown } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { programs } from '../Data'
import Card from '../UI/Card'
import Link from 'react-router-dom'
const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs__container'>
                <SectionHead icon={<FaCrown/>}  title="Programs"/>
            </div>
            <div className="programs__wrapper">
                {
                    programs.map(({id,icon,title,info,path})=>{
                        return(<Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link>
                                </Link>
                        </Card>)

                    
                        
                    })
                }
            </div>
        </section>
    )
}

export default Programs
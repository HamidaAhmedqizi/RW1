import React from 'react'
import Header from '../../Components/Header'
import HeaderImage from '../../Images/header_bg_3.jpg'
import Gallery1 from '../../Images/gallery1.jpg'
import Gallery2 from '../../Images/gallery2.jpg'
import Gallery3 from '../../Images/gallery3.jpg'
import Gallery4 from '../../Images/gallery4.jpg'
import Gallery5 from '../../Images/gallery5.jpg'
import Gallery6 from '../../Images/gallery6.jpg'
import Gallery7 from '../../Images/gallery7.jpg'
import Gallery8 from '../../Images/gallery8.jpg'
import Gallery9 from '../../Images/gallery9.jpg'
import Gallery10 from '../../Images/gallery10.jpg'
import Gallery11 from '../../Images/gallery11.jpg'
import Gallery12 from '../../Images/gallery12.jpg'
import Gallery13 from '../../Images/gallery13.jpg'
import Gallery14 from '../../Images/gallery14.jpg'
import Gallery15 from '../../Images/gallery15.jpg'


import './gallery.css'

const Gallery = () => {
  // const galleryLength=15
  const images=[Gallery1,Gallery2,Gallery3,Gallery4,Gallery5,Gallery6,Gallery7,Gallery8,Gallery9,Gallery10,Gallery11,Gallery12,Gallery13,Gallery14,Gallery15]


  
  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et eveniet enim earum cum,
        culpa facilis ipsum velit ut reprehenderit aspernatur
        soluta sint. Possimus dolor perspiciatis omnis explicabo maxime rem! Reiciendis.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image,index)=>{
              return <article key={index}>
<img src={image} alt={`Gallery Image ${index}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery
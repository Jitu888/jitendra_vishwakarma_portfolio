import React from 'react'
import './Mywork.css'
const Mywork = () => {
  return (
   <div id='work' className="mywork">
    <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src="" alt="" />
    </div>
    <div className="mywork-container">
        {
            [{id:1,
              link:'https://timesofindia.indiatimes.com/life-style/bmi-calculator',
              title:"Times of India Website",
              desc:`Designed and developed event-specific web pages for high-traffic live events such as Sports tournaments,
              elections, astrology, and weather updates, integrating real-time APIs for dynamic content.`,
              img:"../../../public/ecommerce.png"},
              {id:3,
               link:"/",
               title:"Analytics Dashboard",
               desc:`Designed and developed a Dashboard web application to automate healthcare data processing and generate
               analytical reports. The platform allows users to configure parameters, validate data formats, and ensure data consistency`, img:"https://www.shutterstock.com/image-vector/project-management-concept-illustration-260nw-1937586670.jpg"},
              {id:2,
               link:'/',
               title:"Social Media Platform",
               desc:`Designed and developed a Dashboard web application to automate healthcare data processing and generate
               analytical reports. The platform allows users to configure parameters, validate data formats, and ensure data consistency`, img:"https://www.shutterstock.com/image-vector/social-media-network-connection-concept-260nw-1937586672.jpg"},
            ].map((work)=>(
                    <a href={work?.link} className="mywork-format">
                        <h3>{work.id}.{work.title}</h3>
                        <span>{work.desc}</span>
                    </a>

            ))}
    </div>
     {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src="https://www.shutterstock.com/image-vector/right-arrow-icon-trendy-design-260nw-1937586674.jpg" alt="" />
     </div> */}
   </div>
  )
}

export default Mywork
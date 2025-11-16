import React from 'react'
import './Service.css'
const Service = () => {
  return (
    <div id='services' className="services">
        <div className="services-title">
            <h1>My Services</h1>
            <img src="" alt="" />
        </div>
        <div className="services-container">
            {
                [{ s_no: 1, s_name: "Web App Development", s_desc: "I develop web applications that solve real-world problems. The process includes functionality, designing an intuitive UI, writing clean and scalable code, integrating APIs or backend services."},
                    {s_no: 2, s_name: "Mobile App Development", s_desc: "I create responsive and dynamic mobile applications using the latest technologies to ensure optimal performance and user experience focusing on usability."},{
                    s_no: 3, s_name: "Backend Development", s_desc: "I build robust and scalable backend systems using Node.js and Express, ensuring seamless integration with databases and APIs."}
                   ].map((service)=>(
                    <div key={service.s_no} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Service
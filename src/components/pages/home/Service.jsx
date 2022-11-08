import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [allService, setAllService] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setAllService(data))
        
    },[])
    return (
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h2 className="font-semibold md:font-bold text-xl md:text-4xl mb-2">
            Browse Category
          </h2>
          <p>Explore my works</p>
        </div>
        <div className="grid grid-cols-12 md:gap-3 lg:gap-10 px-3 lg:px-0">
          {allService.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className='mt-5 lg:mt-10 mb-10 flex justify-center'>
          <button className="btn btn-md btn-primary bg-primary rounded-md text-base hover:bg-primary hover:text-base">See All Category</button>
        </div>
      </div>
    );
};

export default Service;
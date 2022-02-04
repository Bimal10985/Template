import React from 'react';
const serviceData=[
    {
     img:"../images/uiux.png",
        heading:"UI/UX Design",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aspernatur quia dolore neque omnis id,"
    },
    {
        img:"../images/web.png",
        heading:"Web Design",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aspernatur quia dolore neque omnis id,"
    },
    {
        img:"../images/graphics.png",
        heading:"Graphic Design",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aspernatur quia dolore neque omnis id,"
    }
]

const ProvideFeatures = () => {
  return (
  <>
    <div className="gutter-top">
        <div className="container">
            <div className="row provided-service-heading">
                <div>

                <button className='btn-style3'>SERVICES</button>
                </div>
                <h2>My Provided Services</h2>
                {serviceData.map((data,index)=>{
                    return(

                <div className="col-md-4" key={index}>
                    <div className="provided-card-bg">
                        <img src={data.img} alt="" />
                        <h3>{data.heading}</h3>
                        <p>{data.para}</p>
                        <button className='btn-style4'>Find Out More</button>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    </div>
  </>);
};

export default ProvideFeatures;

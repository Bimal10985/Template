import React from 'react';

const bestPlanData=[
    {
        heading:"PREMIUM",
        number:"$20",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aspernatur quia dolore"
    },
    {
        heading:"STANDARD",
        number:"$19",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aspernatur quia dolore"
    },
    {
        heading:"PREMIUM",
        number:"$54",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aspernatur quia dolore"
    },
    {
        heading:"GOLD",
        number:"$36",
        para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aspernatur quia dolore"
    }
]

const BestPlan = () => {
  return (<>    
            <div className="container gutter-top">
                <div className="row">
                    <div className="bestplan-heading">
                        <div><button className='btn-style3'>Pricing Plan</button></div>
                        <h2>Choose Your Best Plan</h2>
                    </div>
                   
                    {bestPlanData.map((data,index)=>{
                        return(

                    <div className="col-md-3" key={index}>
                        <div className="bestplan-bg">
                            <h4>{data.heading}</h4>
                            <h2>{data.number}</h2>
                            <p>{data.para}</p>
                            <button className='btn-style5'>Select Plan</button>
                        </div>
                       
                    </div>
                        )
                    })}
                </div>
            </div>
  </>);
};

export default BestPlan;

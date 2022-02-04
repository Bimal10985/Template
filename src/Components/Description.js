import React from 'react';

const Description = ({btn1,heading,btn2}) => {
  return <>
            <section className='description'>
                <button className='btn-style1 mb-3'>{btn1}</button>
                <h2 className='mb-3'>{heading}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aspernatur quia dolore neque omnis id, est rem eum veniam voluptatibus nostrum maiores tempore distinctio ullam incidunt doloremque officiis provident delectus.</p>
                <button className='btn-style2 mb-3'>{btn2}</button>
            </section>
  </>
  ;
};

export default Description;

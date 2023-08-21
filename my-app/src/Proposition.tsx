import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Proposition = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
       
      };
  const [selectedOption, setSelectedOption] = useState('appartements');
  const options = ['appartements', 'garages'];

  const handleOptionChange = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };

  return (
    
        <div className="p-4">
      <h1 className='text-center text-4xl md:text-4xl font-bold m-6'>Nos dernières propositions</h1>

      <div className="flex space-x-4 mb-4 items-center justify-center">

        {options.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded-md  ${
              selectedOption === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            onClick={() => handleOptionChange(option)}
          >
            {option === 'appartements' ? 'Appartements' : 'Garages'}
          </button>
        ))}
      </div>
      
    
<div>
        {selectedOption === 'appartements' ? (
          <div className='my-6 '>
            <h2 className="text-xl font-semibold mb-2 text-center ">Appartements</h2>
            <Carousel responsive={responsive}>

            <div className='card my-6 mx-3 text-center cursor-pointer'>
                <img className='product--image'src="https://images.unsplash.com/photo-1613082442324-62ef5249275e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                <h2 className='text-center font-bold'>Appartement confortableet bien situé </h2>
                <p className='price font-bold text-[#005BAF]'>Prix: 4 700 000 Dhs</p>
                <p>Casablanca - Centre Ville</p>
                <h6 className='text-center font-bold text-[#005BAF]' >Ref:637VA</h6>
            </div>

            <div className='card my-6 mx-3 text-center'>
                <img className='product--image'src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
                <h2 className='text-center font-bold'>Appartement moderne avecune bonne vue </h2>
                <p className='price font-bold text-[#005BAF]'>Prix: 3 700 000 Dhs</p>
                <p>Casablanca- hay hassani</p>
                <h6 className='text-center font-bold text-[#005BAF]' >Ref:627VA</h6>
            </div>

            <div className='card my-6 mx-3 text-center'>
                <img className='product--image'src="https://plus.unsplash.com/premium_photo-1678402545080-2353b489c0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>
                <h2 className='text-center font-bold'>Appartement avec un atmosphère convivale </h2>
                <p className='price font-bold text-[#005BAF]'>Prix: 5 700 000 Dhs</p>
                <p>Casablanca - Centre Ville</p>
                <h6 className='text-center font-bold text-[#005BAF]' >Ref:668VA</h6>
            </div>

            <div className='card my-6 mx-3 text-center'>
                <img className='product--image'src="https://images.unsplash.com/photo-1613082442324-62ef5249275e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                <h2 className='text-center font-bold'>Appartement confortableet bien situé </h2>
                <p className='price font-bold text-[#005BAF]'>Prix: 4 700 000 Dhs</p>
                <p>Casablanca - Centre Ville</p>
                <h6 className='text-center font-bold text-[#005BAF]' >Ref:637VA</h6>
            </div>

            <div className='card my-6 mx-3 text-center'>
                <img className='product--image'src="https://images.unsplash.com/photo-1613082442324-62ef5249275e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                <h2 className='text-center font-bold'>Appartement confortableet bien situé </h2>
                <p className='price font-bold text-[#005BAF]'>Prix: 4 700 000 Dhs</p>
                <p>Casablanca - Centre Ville</p>
                <h6 className='text-center font-bold text-[#005BAF]' >Ref:637VA</h6>
            </div>

            <div className='card my-6 mx-3 text-center'>
                <img className='product--image'src="https://images.unsplash.com/photo-1613082442324-62ef5249275e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                <h2 className='text-center font-bold'>Appartement confortableet bien situé </h2>
                <p className='price font-bold text-[#005BAF]'>Prix: 4 700 000 Dhs</p>
                <p>Casablanca - Centre Ville</p>
                <h6 className='text-center font-bold text-[#005BAF]' >Ref:637VA</h6>
            </div>
            
           
            
</Carousel>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">Garages</h2>
            <Carousel responsive={responsive}>
                <div className='card item-center font-blod'>
                    <h1>No items for the moment </h1>
                </div>
            </Carousel>
          </div>
        )}
      </div>
      
      </div>

      
  
  );
};

export default Proposition;

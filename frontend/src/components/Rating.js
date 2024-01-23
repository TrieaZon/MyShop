import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, color }) => {
    
    const ratingStars = ({value}) => { //check if brackets are necessary here or just when calling the function
        
        let starArray = [];
        for(let i = 1; i <= 5; i++){
            
            if(value >= i){
                starArray.push(<i style={{color}} className='fas fa-star'></i>);
            }
            else if(i - value >= 0.5){
                starArray.push(<i style={{color}} className='fas fa-star-half-alt'></i>);
            } else {
                starArray.push(<i style={{color}} className='far fa-star'></i>);   
            }
        }
        return [...starArray];
        
    };
    
    return (
        <div className='rating'>
            <span>
               {ratingStars({value})}
            </span>
        </div>
    );
};

Rating.defaultProps = {
    color: '#f8e825'
};

Rating.propTypes = {
    value: PropTypes.number,
    color: PropTypes.string
};

export default Rating;
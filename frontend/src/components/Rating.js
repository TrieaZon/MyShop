import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, color }) => {
    
    const ratingStars = ({value}) => {
        
        let result = [];
        for(let i = value; i >= 0.5; i--){
            
            if(i < 1 && i >= 0.5){
                result.push(<i style={{color}} className='fas fa-star-half-alt'></i>);
                break;
            }
            else if(i < 0.5){
                result.push(<i style={{color}} className='far fa-star'></i>);
                break;
            }
            result.push(<i style={{color}} className='fas fa-star'></i>);
        }
        return [...result];
        
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
    value: PropTypes.number.isRequired,
    color: PropTypes.string
};

export default Rating;
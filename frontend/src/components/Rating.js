import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, color }) => {
    
    const ratingStars = ({value}) => {
        let counter = 0;
        let result = [];
        while(counter < value){
            if(value <= 0.5) {
                result.push(<i style={{color}} className='far fa-star'></i>);
            }
            else if(value - counter >= 1){
                counter++;
                result.push(<i style={{color}} className='fas fa-star'></i>);
                
            }
            else if(value - counter >= 0.5) {
                result.push(<i style={{color}} className='fas fa-star-half-alt'></i>);
                break;
            } 
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
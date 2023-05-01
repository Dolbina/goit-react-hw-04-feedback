import PropTypes from 'prop-types';
import { ButtonHover } from 'components/ButtonWrap.styled';


export const FeedbackOptions = ({ options, onLeaveFeedback })=> {
    
     return options.map(option => (
       <ButtonHover
         type="button"
         key={option}
         onClick={() => onLeaveFeedback(option)}
       >
         {option}
       </ButtonHover>
     ));
};

FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback:PropTypes.func.isRequired,
}
import PropTypes from 'prop-types'; 
import styles from "./Button.module.css"

const Button = ({title }) => {
    return (
        <button className={styles.btn} type="button">{title}</button>
    );
}

export default Button;

Button.propTypes = {
    title: PropTypes.string.isRequired
}
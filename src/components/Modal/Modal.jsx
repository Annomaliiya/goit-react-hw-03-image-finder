import { Component } from "react";
import PropTypes from "prop-types";

import s from "./Modal.module.css"

class Modal extends Component {
componentDidMount(){
        window.addEventListener("keydown", this.close)
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.close)
    }

    close = (e)=> {
        if(e.code === "Escape"){
            return this.props.closeModal()
        }
        const {currentTarget, target} = e;
        if(currentTarget === target) {
           this.props.closeModal()
        }
    }

    render() {
        return (
            <div className={s.overlay} onClick={this.close}>
                <div className={s.modal}>
                    <img src={this.props.picture} alt={this.props.tags} />
                    
                </div>
            </div>
        )
    }
}

export default Modal;

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    picture: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}
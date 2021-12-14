import ALoader from "react-loader-spinner";
const Loader =({}) =>{


    return (
            <ALoader
            type="ThreeDots"
            color="#1b6e10"
            height={80}
            width={80}
        timeout={3000}/>
        );
    }
export default Loader;
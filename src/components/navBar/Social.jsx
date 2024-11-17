import HoverZoom from '../../components/effects/HoverZoom.jsx';
import PropTypes from "prop-types";


function Social(props) {
    return (
        <HoverZoom>
        <a key={props.id} href={props.url} target="_blank" rel="noopener noreferrer">

        <i className={`fas ${props.icon} text-white text-4xl`} />
        </a></HoverZoom>)
}

Social.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string,
};


export default Social;

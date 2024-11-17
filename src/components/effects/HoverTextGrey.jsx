import PropTypes from 'prop-types';

function HoverTextGray({ children, hoverClass }) {
    return (
        <div className={`transition-colors duration-300 ${hoverClass}`}>
            <div className="group-hover:text-gray-500">
                {children}
            </div>
        </div>
    );
}

HoverTextGray.propTypes = {
    children: PropTypes.node.isRequired,
    hoverClass: PropTypes.string,
};


export default HoverTextGray;
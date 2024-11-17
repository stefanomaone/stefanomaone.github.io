import PropTypes from 'prop-types';

function HoverZoom({ children, hoverClass = '' }) {
    return (
        <div className={`group ${hoverClass}`}>
            <div className="transition-transform duration-300 delay-75 group-hover:scale-150">
                {children}
            </div>
        </div>
    );
}

HoverZoom.propTypes = {
    children: PropTypes.node.isRequired,
    hoverClass: PropTypes.string,
};

export default HoverZoom;

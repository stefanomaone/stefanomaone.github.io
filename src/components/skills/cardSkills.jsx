import PropTypes from "prop-types";

function cardSkills(logo){
    return (
        <div>
            {logo}
        </div>
    )
}

cardSkills.propTypes = {
    logo: PropTypes.string.isRequired,
};
export default cardSkills;
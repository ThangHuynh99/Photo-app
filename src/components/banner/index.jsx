import React from 'react';
import PropTypes from 'prop-types';
import "./Banner.scss";

Banner.propTypes = {
    title: PropTypes.string,
    backGroundUrl: PropTypes.string
};

Banner.defaultProps = {
    title: "",
    backGroundUrl: ""
}
function Banner(props) {
    const {title, backGroundUrl} = props;

    const bannerStyle = backGroundUrl
    ? { backgroundImage: `url(${backGroundUrl})`} : {}

    return (
        <div>
            <section className="banner" style={bannerStyle}>
                <h1 className="banner__title">{title}</h1>
            </section>
        </div>
    );
}

export default Banner;
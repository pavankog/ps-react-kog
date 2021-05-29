import React from 'react';
import propTypes from 'prop-types'
class ProgressBar extends React.Component {

    getColor = () => {
        if (this.props.percent === 100) return 'green';
        return this.props.percent > 50 ? 'green' : 'red';
    }

    getWidthAsPercentOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent/100), 10);
    }

    render() {
        debugger;
        const { percent, width, height } = this.props;
        return (
            <div style={{ boder: 'solid 1px lightgray', width: width }}>
                <div style={{
                    width: this.getWidthAsPercentOfTotalWidth(),
                    height,
                    backgroundColor: this.getColor(percent)
                }} /></div>
        )
    }
}

export default ProgressBar;

ProgressBar.propTypes = {
    /** percent of progress completed */
    percent: propTypes.number.isRequired,
    /** Bar width */
    width: propTypes.number.isRequired,
    /** Bar height */
    height: propTypes.number
};
ProgressBar.defaultProps = {
    height: 5
};
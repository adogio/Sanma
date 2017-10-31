import React, { Component } from 'react';
import propTypes from 'prop-types';

class SanmaInputOption extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
            value: this.props.value
        }
    }

    render() {
        return (
            <div className="left-padding">
                <input
                    style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        height: "40px",
                        border: "0",
                        borderBottom: !!this.state.value ? "1px solid #" + this.props.colors[0] : "1px solid black"
                    }}
                    className="options"
                    value={this.state.value}
                    onBlur={this.handleBlur}
                    onInput={this.handleClick} />
            </div>
        );
    }

    handleClick(e) {
        this.setState({
            value: e.target.value
        })
        this.props.onInput([this.props.args, e.target.value]);
    }

    handleBlur() {
        this.props.trigger();
    }
}

SanmaInputOption.propTypes = {
    onInput: propTypes.func.isRequired,
    args: propTypes.any.isRequired,
    controller: propTypes.string.isRequired,
    trigger: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
    colors: propTypes.arrayOf(propTypes.string).isRequired
}

SanmaInputOption.defaultProps = {
    colors: ["FF0000", "FF0000", "FF0000", "FF0000", "FF0000"],
    value: ""
}

export default SanmaInputOption;

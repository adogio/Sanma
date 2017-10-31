import React, { Component } from 'react';
import propTypes from 'prop-types';

class SanmaVoteOption extends Component {

    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            hover: false
        };
    }

    render() {
        return (
            <div style={{
                width: "100%",
                cursor: "pointer",
                borderBottom: this.props.id === this.props.controller ?
                    "1px solid #" + this.props.colors[0] :
                    this.state.hover ?
                        "1px solid black" :
                        "1px solid transparent"
            }}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleLeave}
                onClick={this.handleClick}>
                <i className={
                    this.props.id === this.props.controller ?
                        "fa fa-circle fa-fw" :
                        "fa fa-circle-o fa-fw"
                }
                    style={{
                        color: this.props.id === this.props.controller ?
                            "#" + this.props.colors[0] :
                            this.state.hover ?
                                "#" + this.props.colors[4] :
                                "black"
                    }}
                />
                <span className="options">{this.props.children}</span>
            </div>
        );
    }

    handleClick() {
        this.props.onClick(this.props.args);
        this.props.trigger();
    }

    handleHover() {
        this.setState({
            hover: true
        });
    }

    handleLeave() {
        this.setState({
            hover: false
        });
    }
}

SanmaVoteOption.propTypes = {
    onClick: propTypes.func.isRequired,
    args: propTypes.any.isRequired,
    controller: propTypes.string.isRequired,
    trigger: propTypes.func.isRequired,
    colors: propTypes.arrayOf(propTypes.string).isRequired,
}

SanmaVoteOption.defaultProps = {
    colors: ["FF0000", "FF0000", "FF0000", "FF0000", "FF0000"]
}


export default SanmaVoteOption;

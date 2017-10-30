import React, { Component } from 'react';
import getColor, { WEATHERS } from '../chaetodon/import';
import VoteOption from './voteOption';
import propTypes from 'prop-types';

class SanmaVote extends Component {

    constructor(props) {
        super(props);
        this.renderBadge = this.renderBadge.bind(this);
        this.renderVotes = this.renderVotes.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const colors = getColor(this.props.color);
        return (
            <div style={{ fontFamily: this.props.font, userSelect: this.props.selectable ? "" : "none" }}>
                <div style={{ height: this.props.height + "px", width: "100%" }}>
                    <div style={{ width: "15%", height: "100%", float: "left" }}>
                        {colors.map(this.renderBadge)}
                    </div>
                    <div style={{ width: "auto", height: "100%", float: "left", fontSize: this.props.height - 8 + "px", fontWeight: "bold", paddingLeft: "10px" }}>
                        {this.props.children}
                    </div>
                </div>
                <div style={{ fontSize: "26px", paddingTop: "10px" }}>
                    {this.props.votes.description}
                </div>
                <div style={{ fontSize: "20px" }}>
                    {this.props.votes.votes.map(this.renderVotes)}
                </div>
            </div>
        );
    }

    renderBadge(value, index) {
        return <div key={index} style={{ width: "20%", backgroundColor: "#" + value, float: "left", height: "100%" }}></div>;
    }

    renderVotes(value, index) {
        const renderOptions = (optionValue, index) => {
            return (<VoteOption key={index} onClick={this.handleClick} args={[value.id, optionValue.id]}>{optionValue.name}</VoteOption>)
        }
        return (<div key={index} style={{ paddingTop: "10px" }}>
            <span style={{ fontSize: "22px", fontWeight: "bold" }}><i className="fa fa-arrow-right fa-fw" />{value.description}</span>
            <div style={{ paddingLeft: "15px" }}>{value.options.map(renderOptions)}</div>
        </div>);
    }

    handleClick(args) {
        this.props.onSelect({
            vote: args[0],
            option: args[1]
        })
    }
}

SanmaVote.propTypes = {
    height: propTypes.number,
    color: propTypes.oneOf([
        WEATHERS.SUN,
        WEATHERS.BREEZE,
        WEATHERS.CLOUD,
        WEATHERS.FOG,
        WEATHERS.HAIL,
        WEATHERS.RAIN,
        WEATHERS.SNOW,
        WEATHERS.STORM,
        WEATHERS.WIND,
        WEATHERS.RANDOM,
        WEATHERS.STAR,
        WEATHERS.TWILIGHT,
        WEATHERS.MIDNIGHT,
        WEATHERS.NOVA,
        WEATHERS.ROSE,
        WEATHERS.CHAOS
    ]),
    votes: propTypes.shape({
        description: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
        votes: propTypes.arrayOf(propTypes.shape({
            id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
            description: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
            options: propTypes.arrayOf(propTypes.shape({
                id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
                name: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired
            })).isRequired
        })).isRequired
    }).isRequired,
    selectable: propTypes.bool,
    onSelect: propTypes.func.isRequired,
    font: propTypes.string
}

SanmaVote.defaultProps = {
    height: 30,
    selectable: true,
    color: WEATHERS.RANDOM,
    font: ""
};

export default SanmaVote;

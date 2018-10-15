import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components"

const Buttons = styled.button`
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    border: none;
    font-size: 16px;
    cursor: pointer;
`

// Define type of property
interface Props {
    text: string;
    background: string;
    color: string;
}

export class Button extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
    text: "",
    width: 460,
    height: 48,
    background: "#009B5B",
    color: "#FFFFFF"
    }

    render() {
    return (
        <Buttons style={{background: this.props.background, color: this.props.color}} value="24">Send {this.props.text}</Buttons>
    )
    }
}

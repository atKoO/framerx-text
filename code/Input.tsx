import * as React from "react";
import { PropertyControls, ControlType } from "framer";

const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "48px",
    fontSize: "18px",
    marginTop: "8px",
};

// Define type of property
interface Props {
    width: number,
    height: number,
    onChange: React.ChangeEventHandler,
    value: string
}

export class Input extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
    width: 460,
    height: 74,
    value: ""
    }

    onChange = e => {
        const { onChange } = this.props;
        onChange && onChange(e.target.value);
      };

    render() {
    return (
        <div width={this.props.width} height={this.props.height}>
            <label htmlFor="">Amount</label>
            <input type="text" onChange={this.onChange} style={inputStyle}/>
        </div>
        );
    }
}

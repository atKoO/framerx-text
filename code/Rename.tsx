import { Data, animate, Override, Animatable } from "framer"

const data = Data({ text: '', background: "#ECECEC", color: "#929292", opacity: "0"})

export const ButtonValue: Override = () => {
    return {
        text: data.text,
        background: data.background,
        color: data.color
    }
}

export const Error: Override = () => {
    return {
        opacity: data.opacity
    }
}

export const SetError: Override = () => {
    return {
        onTap() {
            opacity: 1
        }
    }
}

export const InputValue: Override = props => {
    return {
        onChange(text) {
          if (text.length > 0) {
            data.text = "BTC " + text;
            data.background = "#009B5B";
            data.color = "#FFFFFF";
            
          } else {
            data.text = "";
            data.background = "#ECECEC";
            data.color = "#929292";
            
          }
          if (text.length > 6) {
            data.opacity = "1";
            data.background = "#ECECEC";
            data.color = "#929292";
          } else {
            data.opacity = "0";
            data.background = "#009B5B";
            data.color = "#FFFFFF";
          }
        }
      };
}
import { Data, animate, Override, Animatable } from "framer"

const data = Data({ text: '', background: "#ECECEC", color: "#929292"})

export const ButtonValue: Override = () => {
    return {
        text: data.text,
        background: data.background,
        color: data.color
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
        }
      };
}
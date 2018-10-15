import { Data, animate, Override, Animatable } from "framer"

const data = Data({ text: 'wer', opacity: 0})

export const InputValue: Override = props => {
   
    return {
        value: data.text
      };
}

export const ButtonValue: Override = () => {
    return {
        onTap() {
            data.text = "Some text";
        }
    }
}
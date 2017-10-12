declare module "react-radio-group" {
    import * as React from "react";

    interface IGroupProps {
        name?: string;
        selectedValue?: string;
        onChange(newValue: any);
    }

    interface IRadioProps {
        value: any;
        checked: boolean;
        className?: any;
    }

    export class RadioGroup extends React.Component<IGroupProps, {}> {
        
    }

    export class Radio extends React.Component<IRadioProps, {}> {
        
    }

}
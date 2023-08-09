import React from "react";

interface ButtonProps {
    label:string;
}

const DgButton = (props:ButtonProps = {label:'DgButton'}) =>{
    return <button>{props.label}</button>
}

export default DgButton
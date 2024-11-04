import React from "react";

interface LinkProps {
    url: string,
    label: string,
    newTab: boolean
}

const Link: React.FC<LinkProps> = ({ url, label, newTab }) => {
    return <a className="text-lg font-marcellus" href={url} target={newTab ? "_blank" : ""}>{label}</a>
};

export default Link;
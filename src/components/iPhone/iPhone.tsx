import React from "react";

interface iPhoneProps {
    colorMode: "light" | "dark";
}

const IPHONE_HEIGHT = 5.81; // inches
const IPHONE_WIDTH = 2.81; // inches

const iPhone: React.FC<iPhoneProps> = ({
    colorMode
}: iPhoneProps) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: `${IPHONE_HEIGHT}rem`,
                width: `${IPHONE_WIDTH}rem`,
                backgroundColor: colorMode === "light" ? "#ebebeb" : "white",
            }}
        >
            <h1>iPhone</h1>
        </div>
    )
}

export default iPhone;

import React from "react";
import BuiltInMessenger from "./apps/BuiltInMessenger";

export interface Message {
    isOutgoing: boolean;
    text: string;
}
interface AppleIPhoneProps {
    colorMode?: "light" | "dark";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    mode?: "portrait" | "landscape";
    messageHistory?: Message[];
    app?: "messenger";
}

const IPHONE_HEIGHT = 5.81; // inches
const IPHONE_WIDTH = 2.81; // inches
const IPHONE_CORNER_RADIUS = 0.42; // inches

const getDimensionsBySize = (
    size: "xs" | "sm" | "md" | "lg" | "xl",
    mode: "portrait" | "landscape"
) => {
    let height = mode === "landscape" ? IPHONE_WIDTH : IPHONE_HEIGHT;
    let width = mode === "landscape" ? IPHONE_HEIGHT : IPHONE_WIDTH;
    let outerPadding = 0.015;
    let innerPadding = 0.100;
    let innerBorderRadius = 0.35;

    switch (size) {
        case "xs":
            return {
                height: height / 2,
                width: width / 2,
                cornerRadius: IPHONE_CORNER_RADIUS / 2,
                outerPadding: outerPadding / 2,
                innerPadding: innerPadding / 2,
                innerBorderRadius: innerBorderRadius / 2,
            };
        case "sm":
            return {
                height: height * 0.75,
                width: width * 0.75,
                cornerRadius: IPHONE_CORNER_RADIUS * 0.75,
                outerPadding: outerPadding * 0.75,
                innerPadding: innerPadding * 0.75,
                innerBorderRadius: innerBorderRadius * 0.75,
            };
        case "md":
            return {
                height: height,
                width: width,
                cornerRadius: IPHONE_CORNER_RADIUS,
                outerPadding,
                innerPadding,
                innerBorderRadius,
            };
        case "lg":
            return {
                height: height * 3.25,
                width: width * 3.25,
                cornerRadius: IPHONE_CORNER_RADIUS * 3.25,
                outerPadding: outerPadding * 3.25,
                innerPadding: innerPadding * 3.25,
                innerBorderRadius: innerBorderRadius * 3.25,
            };
        case "xl":
            return {
                height: height * 5.5,
                width: width * 5.5,
                cornerRadius: IPHONE_CORNER_RADIUS * 5.5,
                outerPadding: outerPadding * 5.5,
                innerPadding: innerPadding * 5.5,
                innerBorderRadius: innerBorderRadius * 5.5,
            };
        default:
            return {
                height: height,
                width: width,
                cornerRadius: IPHONE_CORNER_RADIUS,
                outerPadding,
                innerPadding,
                innerBorderRadius,
            };
    }
}

const AppleIPhone: React.FC<AppleIPhoneProps> = ({
    colorMode = "light",
    size = "md",
    mode = "portrait",
    app,
    messageHistory = [],
}) => {
    const {
        height: defaultHeight,
        width: defaultWidth,
        cornerRadius: defaultCornerRadius,
        outerPadding: defaultOuterPadding,
        innerPadding: defaultInnerPadding,
        innerBorderRadius: defaultInnerBorderRadius,
    } = getDimensionsBySize(size, mode);

    const height = defaultHeight;
    const width = defaultWidth;
    const cornerRadius = defaultCornerRadius;
    const outerPadding = defaultOuterPadding;
    const innterPadding = defaultInnerPadding;
    const innerBorderRadius = defaultInnerBorderRadius;

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: `${cornerRadius}rem`,
                height: `${height}rem`,
                width: `${width}rem`,
                backgroundColor: colorMode === "light" ? "#ebebeb" : "white",
                padding: `${outerPadding}rem`,
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: `${cornerRadius}rem`,
                    backgroundColor: colorMode === "light" ? "black" : "#444444",
                    display: "flex"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        borderRadius: `${innerBorderRadius}rem`,
                        backgroundColor: colorMode === "light" ? "#191919" : "#404040",
                        position: "relative",
                        margin: `${innterPadding}rem`,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        overflow: "hidden",
                    }}
                >
                    {app === "messenger" && (
                        <BuiltInMessenger
                            colorMode={colorMode}
                            messageHistory={messageHistory}
                        />
                    )}
                    <div
                        style={{
                            marginTop: "0.5rem",
                            position: "absolute",
                            left: "35%",
                            height: "1rem",
                            borderRadius: 99999,
                            width: "30%",
                            backgroundColor: colorMode === "light" ? "black" : "#444444",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default AppleIPhone;

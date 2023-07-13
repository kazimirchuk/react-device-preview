import React from "react";
import BuiltInMessenger from "./apps/BuiltInMessenger";

export interface Message {
    isOutgoing: boolean;
    text: string;
}

export enum Size {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl",
}

export interface AppleIPhoneProps {
    colorMode?: "light" | "dark";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    mode?: "portrait" | "landscape";
    messageHistory?: Message[];
    app?: "messenger";
}

export interface DeviceDimensions {
    height: number;
    width: number;
    cornerRadius: number;
    outerPadding: number;
    innerPadding: number;
    innerBorderRadius: number;
}

const IPHONE_DIMENSIONS: DeviceDimensions = {
    height: 29.05,
    width: 14.05,
    cornerRadius: 2.1,
    outerPadding: 0.075,
    innerPadding: 0.5,
    innerBorderRadius: 1.75
}

const getDimensionsBySize = (
    size: Size,
    mode: "portrait" | "landscape"
) => {
    let height = mode === "landscape" ? IPHONE_DIMENSIONS.width : IPHONE_DIMENSIONS.height;
    let width = mode === "landscape" ? IPHONE_DIMENSIONS.height : IPHONE_DIMENSIONS.width;
    let outerPadding = IPHONE_DIMENSIONS.outerPadding;
    let innerPadding = IPHONE_DIMENSIONS.innerPadding;
    let innerBorderRadius = IPHONE_DIMENSIONS.innerBorderRadius;
    let cornerRadius = IPHONE_DIMENSIONS.cornerRadius;

    switch (size) {
        case "xs":
            return {
                height: height / 2,
                width: width / 2,
                cornerRadius: cornerRadius / 2,
                outerPadding: outerPadding / 2,
                innerPadding: innerPadding / 2,
                innerBorderRadius: innerBorderRadius / 2,
            };
        case "sm":
            return {
                height: height * 0.75,
                width: width * 0.75,
                cornerRadius: cornerRadius * 0.75,
                outerPadding: outerPadding * 0.75,
                innerPadding: innerPadding * 0.75,
                innerBorderRadius: innerBorderRadius * 0.75,
            };
        case "md":
            return {
                height,
                width,
                cornerRadius,
                outerPadding,
                innerPadding,
                innerBorderRadius,
            };
        case "lg":
            return {
                height: height * 1.75,
                width: width * 1.75,
                cornerRadius: cornerRadius * 1.75,
                outerPadding: outerPadding * 1.75,
                innerPadding: innerPadding * 1.75,
                innerBorderRadius: innerBorderRadius * 1.75,
            };
        case "xl":
            return {
                height: height * 3,
                width: width * 3,
                cornerRadius: cornerRadius * 3,
                outerPadding: outerPadding * 3,
                innerPadding: innerPadding * 3,
                innerBorderRadius: innerBorderRadius * 3,
            };
        default:
            return {
                height,
                width,
                cornerRadius,
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
    } = getDimensionsBySize(size as Size, mode);

    const height = defaultHeight;
    const width = defaultWidth;
    const cornerRadius = defaultCornerRadius;
    const outerPadding = defaultOuterPadding;
    const innerPadding = defaultInnerPadding;
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
                    backgroundColor: colorMode === "light" ? "black" : "#1a1a1a",
                    display: "flex"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        borderRadius: `${innerBorderRadius}rem`,
                        backgroundColor: colorMode === "light" ? "#191919" : "#404040",
                        position: "relative",
                        margin: `${innerPadding}rem`,
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
                            size={size as Size}
                        />
                    )}
                    <div
                        style={{
                            marginTop: `${innerPadding}rem`,
                            position: "absolute",
                            left: "35%",
                            height: mode === "portrait" ? `${innerPadding * 2}rem` : "30%",
                            borderRadius: 99999,
                            width: mode === "portrait" ? "30%" : `${innerPadding * 2}rem`,
                            backgroundColor: colorMode === "light" ? "black" : "#1a1a1a",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default AppleIPhone;

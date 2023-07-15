import React from "react";
import BuiltInMessenger from "./apps/BuiltInMessenger";

export interface Message {
    isOutgoing: boolean;
    text: string;
}

export enum RotationMode {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape",
}

export enum ColorMode {
    LIGHT = "light",
    DARK = "dark",
}

export enum Size {
    XS = "xs",
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl",
}

export interface AppleIPhoneProps {
    boxShadow?: boolean;
    colorMode?: "light" | "dark";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    rotation?: "portrait" | "landscape";
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
    rotation: RotationMode
) => {
    let height = rotation === RotationMode.LANDSCAPE ? IPHONE_DIMENSIONS.width : IPHONE_DIMENSIONS.height;
    let width = rotation === RotationMode.LANDSCAPE ? IPHONE_DIMENSIONS.height : IPHONE_DIMENSIONS.width;
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
    rotation = "portrait",
    boxShadow = true,
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
    } = getDimensionsBySize(size as Size, rotation as RotationMode);

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
                boxShadow: boxShadow && colorMode === ColorMode.LIGHT ? "0 0 3.5rem 0 rgba(0, 0, 0, 0.5)" : "none",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: `${cornerRadius}rem`,
                height: `${height}rem`,
                width: `${width}rem`,
                backgroundColor: colorMode === ColorMode.LIGHT ? "#ebebeb" : "white",
                padding: `${outerPadding}rem`,
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: `${cornerRadius}rem`,
                    backgroundColor: colorMode === ColorMode.LIGHT ? "black" : "#1a1a1a",
                    display: "flex"
                }}
            >
                <div
                    style={{
                        width: "100%",
                        borderRadius: `${innerBorderRadius}rem`,
                        backgroundColor: colorMode === ColorMode.LIGHT ? "#191919" : "#404040",
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
                            colorMode={colorMode as ColorMode}
                            messageHistory={messageHistory}
                            size={size as Size}
                            rotation={rotation as RotationMode}
                        />
                    )}
                    <div
                        style={{
                            marginTop: rotation === RotationMode.PORTRAIT ? `${innerPadding}rem` : 0,
                            position: "absolute",
                            top: rotation === RotationMode.PORTRAIT ? 0 : "35%",
                            left: rotation === RotationMode.PORTRAIT ? "35%" : `${innerPadding}rem`,
                            height: rotation === RotationMode.PORTRAIT ? `${innerPadding * 2}rem` : "30%",
                            borderRadius: 99999,
                            width: rotation === RotationMode.PORTRAIT ? "30%" : `${innerPadding * 2}rem`,
                            backgroundColor: colorMode === ColorMode.LIGHT ? "black" : "#1a1a1a",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default AppleIPhone;

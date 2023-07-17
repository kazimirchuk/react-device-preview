import React from "react";
import { AppConfig, getAppComponent } from "../App";
import { ColorMode, DeviceDimensions, RotationMode, Size, getDimensionsBySize } from "../Device";

export interface AppleIPhoneProps {
    boxShadow?: boolean;
    colorMode?: "light" | "dark";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    rotation?: "portrait" | "landscape";
    app?: AppConfig;
}

const IPHONE_DIMENSIONS: DeviceDimensions = {
    height: 29.05,
    width: 14.05,
    cornerRadius: 2.1,
    outerPadding: 0.075,
    innerPadding: 0.5,
    innerBorderRadius: 1.75
}

const AppleIPhone: React.FC<AppleIPhoneProps> = ({
    colorMode = "light",
    size = "md",
    rotation = "portrait",
    boxShadow = true,
    app,
}) => {
    const {
        height: defaultHeight,
        width: defaultWidth,
        cornerRadius: defaultCornerRadius,
        outerPadding: defaultOuterPadding,
        innerPadding: defaultInnerPadding,
        innerBorderRadius: defaultInnerBorderRadius,
    } = getDimensionsBySize(size as Size, rotation as RotationMode, IPHONE_DIMENSIONS);

    const height = defaultHeight;
    const width = defaultWidth;
    const cornerRadius = defaultCornerRadius;
    const outerPadding = defaultOuterPadding;
    const innerPadding = defaultInnerPadding;
    const innerBorderRadius = defaultInnerBorderRadius;

    let appComponent = null;

    if (app) {
        try {
            appComponent = getAppComponent(app, {
                colorMode: colorMode as ColorMode,
                rotation: rotation as RotationMode,
                size: size as Size,
            });
        } catch (e: unknown) {
            console.error(e);
        }
    }

    return (
        <div
            style={{
                display: "flex",
                boxShadow: boxShadow && colorMode === ColorMode.LIGHT ? "0 0 1.5rem 0 rgba(0, 0, 0, 0.5)" : "none",
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
                    {appComponent}
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

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

export interface DeviceDimensions {
    height: number;
    width: number;
    cornerRadius: number;
    outerPadding: number;
    innerPadding: number;
    innerBorderRadius: number;
}

export const getDimensionsBySize = (
    size: Size,
    rotation: RotationMode,
    dimensions: DeviceDimensions
) => {
    let height = rotation === RotationMode.LANDSCAPE ? dimensions.width : dimensions.height;
    let width = rotation === RotationMode.LANDSCAPE ? dimensions.height : dimensions.width;
    let outerPadding = dimensions.outerPadding;
    let innerPadding = dimensions.innerPadding;
    let innerBorderRadius = dimensions.innerBorderRadius;
    let cornerRadius = dimensions.cornerRadius;

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
};

import React from "react";
import { AppConfig, AppProps } from "../App";
import { ColorMode, RotationMode, Size } from "../Device";

export interface Message {
    isOutgoing: boolean;
    mediaUrl?: string;
    mediaType?: "image" | "video" | "audio" | "pdf";
    text: string;
}

export interface WhatsappConfig {
    name: "whatsapp";
    options: {
        messages: Message[];
    }
}

interface WhatsappProps extends AppProps {
    config: WhatsappConfig;
}

export const validateConfig = (config: AppConfig): boolean => {
    if (!config) return false;
    if (config.name !== "Whatsapp") return false;
    if (!config.options) return false;
    if (!config.options.messages) return false;
    if (!Array.isArray(config.options.messages)) return false;

    return true;
}

const Whatsapp: React.FC<WhatsappProps> = ({
    device: {
        colorMode = ColorMode.LIGHT,
        rotation,
        size
    },
    config,
}) => {
    let messagesGap = 0.5;
    let fontSize = 0.8;
    let messageMaxHeight = 5;
    let messagePaddingX = 0.5;
    let messagePaddingY = 0.25;
    let messageBorderRadius = 1;

    switch (size) {
        case Size.XS:
            messagesGap = messagesGap / 2;
            fontSize = fontSize / 2;
            messageMaxHeight = messageMaxHeight / 2;
            messagePaddingX = messagePaddingX / 2;
            messagePaddingY = messagePaddingY / 2;
            messageBorderRadius = messageBorderRadius / 2;
            break;
        case Size.SM:
            messagesGap = messagesGap * 0.75;
            fontSize = fontSize * 0.75;
            messageMaxHeight = messageMaxHeight * 0.75;
            messagePaddingX = messagePaddingX * 0.75;
            messagePaddingY = messagePaddingY * 0.75;
            messageBorderRadius = messageBorderRadius * 0.75;
            break;
        case Size.MD:
            messagesGap = messagesGap;
            fontSize = fontSize;
            messageMaxHeight = messageMaxHeight;
            messagePaddingX = messagePaddingX;
            messagePaddingY = messagePaddingY;
            messageBorderRadius = messageBorderRadius;
            break;
        case Size.LG:
            messagesGap = messagesGap * 1.75;
            fontSize = fontSize * 1.75;
            messageMaxHeight = messageMaxHeight * 1.75;
            messagePaddingX = messagePaddingX * 1.75;
            messagePaddingY = messagePaddingY * 1.75;
            messageBorderRadius = messageBorderRadius * 1.75;
            break;
        case Size.XL:
            messagesGap = messagesGap * 3;
            fontSize = fontSize * 3;
            messageMaxHeight = messageMaxHeight * 3;
            messagePaddingX = messagePaddingY * 3;
            messagePaddingY = messagePaddingY * 3;
            messageBorderRadius = messageBorderRadius * 3;
            break;
        default:
            break;
    }

    return (
        <>
            {rotation === RotationMode.PORTRAIT && (
                <div
                    style={{
                        height: "15%",
                        backgroundColor: colorMode === "light" ? "#c0c0c0" : "#4e4e4e",
                    }}
                />
            )}
            <div
                style={{
                    height: "80%",
                    backgroundColor: colorMode === "light" ? "white" : "black",
                    overflowY: "auto",
                    padding: "1rem",
                    paddingLeft: rotation === RotationMode.PORTRAIT ? "1rem" : "2rem",
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: `${messagesGap}rem`,
                }}
            >
                {config.options.messages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: message.isOutgoing
                                ? "flex-end"
                                : "flex-start",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: message.isOutgoing
                                    ? "#25D366"
                                    : "#e5e5ea",
                                color: message.isOutgoing ? "#fff" : "#000",
                                borderTopLeftRadius: `${messageBorderRadius}rem`,
                                borderTopRightRadius: `${messageBorderRadius}rem`,
                                borderBottomRightRadius: message.isOutgoing ? 0 : `${messageBorderRadius}rem`,
                                borderBottomLeftRadius: message.isOutgoing ? `${messageBorderRadius}rem` : 0,
                                paddingLeft: `${messagePaddingX}rem`,
                                paddingRight: `${messagePaddingX}rem`,
                                paddingTop: `${messagePaddingY}rem`,
                                paddingBottom: `${messagePaddingY}rem`,
                                maxWidth: "75%",
                                fontSize: `${fontSize}rem`,
                                overflowY: "auto",
                            }}
                        >
                            {!!message.mediaUrl && message.mediaType === "image" && (
                                <img
                                    src={message.mediaUrl}
                                    style={{
                                        maxWidth: "100%",
                                        borderRadius: `${messageBorderRadius * 0.8}rem`,
                                    }}
                                />
                            )}
                            {!!message.mediaUrl && message.mediaType === "video" && (
                                <video
                                    src={message.mediaUrl}
                                    controls
                                    style={{
                                        maxWidth: "100%",
                                        borderRadius: `${messageBorderRadius * 0.8}rem`,
                                    }}
                                />
                            )}
                            {!!message.mediaUrl && message.mediaType === "audio" && (
                                <audio
                                    src={message.mediaUrl}
                                    controls
                                    style={{
                                        maxWidth: "100%",
                                        borderRadius: `${messageBorderRadius * 0.8}rem`,
                                    }}
                                />
                            )}
                            {!!message.mediaUrl && message.mediaType === "pdf" && (
                                <a
                                    href={message.mediaUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    download={true}
                                >
                                    PDF attachment
                                </a>
                            )}
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <div
                style={{
                    height: rotation === RotationMode.PORTRAIT ? "7%" : "10%",
                    backgroundColor: colorMode === "light" ? "#c0c0c0" : "#4e4e4e",
                    paddingBottom: "0.5rem",
                    paddingTop: "0.5rem",
                }}
            >
                <div
                    style={{
                        height: "80%",
                        width: "90%",
                        marginRight: "auto",
                        borderRadius: 99999,
                        marginLeft: rotation === RotationMode.PORTRAIT ? "auto" : "2rem",
                        backgroundColor: colorMode === "light" ? "#fff" : "#000",
                    }}
                />
            </div>
        </>
    );
}

export default Whatsapp;

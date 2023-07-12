import React from "react";
import { Message } from "../AppleIPhone";

interface BuiltInMessengerProps {
    colorMode?: "light" | "dark";
    messageHistory: Message[];
}

const BuiltInMessenger: React.FC<BuiltInMessengerProps> = ({
    colorMode = "light",
    messageHistory,
}) => {
    return (
        <>
            <div
                style={{
                    height: "10%",
                    backgroundColor: colorMode === "light" ? "#c0c0c0" : "#4e4e4e",
                }}
            />
            <div
                style={{
                    height: "80%",
                    backgroundColor: colorMode === "light" ? "white" : "black",
                    overflowY: "auto",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column-reverse",
                    gap: "0.5rem",
                }}
            >
                {messageHistory.map((message, index) => (
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
                                    ? "#007aff"
                                    : "#e5e5ea",
                                color: message.isOutgoing ? "#fff" : "#000",
                                borderRadius: "1rem",
                                padding: "0.25rem 0.5rem",
                                maxWidth: "75%",
                                fontSize: "0.8rem",
                                maxHeight: "5rem",
                                overflowY: "auto",
                            }}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <div
                style={{
                    height: "5%",
                    backgroundColor: colorMode === "light" ? "white" : "black",
                    paddingBottom: "0.5rem"
                }}
            >
                <div
                    style={{
                        height: "80%",
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        borderRadius: 99999,
                        borderStyle: "solid",
                        borderWidth: "0.05rem",
                        borderColor: colorMode === "light" ? "#c0c0c0" : "#4e4e4e",
                    }}
                />
            </div>
            <div
                style={{
                    height: "5%",
                    backgroundColor: colorMode === "light" ? "#c0c0c0" : "#4e4e4e",
                }}
            />
        </>
    );
};

export default BuiltInMessenger;

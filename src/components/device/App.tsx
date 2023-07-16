import React from "react";

import { ColorMode, RotationMode, Size } from "./Device";
import BuiltInMessenger, {
    validateConfig as validateBuiltInMessengerConfig,
    BuiltInMessengerConfig
} from "./apps/BuiltInMessenger";
import Whatsapp, {
    validateConfig as validateWhatsappConfig,
    WhatsappConfig
} from "./apps/Whatsapp";

export interface DeviceSettings {
    colorMode?: ColorMode;
    size?: Size;
    rotation?: RotationMode;
}

export interface AppConfig {
    name: string;
    options?: {
        [key: string]: any;
    }
}

export interface AppProps {
    config: AppConfig;
    device: DeviceSettings;
}

export const getAppComponent = (
    config: AppConfig,
    device: DeviceSettings
) => {
    if (!config || !config.name) {
        throw new Error("Invalid config for App");
    }

    switch (config.name) {
        case "BuiltInMessenger":
            if (!validateBuiltInMessengerConfig(config)) {
                throw new Error("Invalid config for BuiltInMessenger");
            }

            return (
                <BuiltInMessenger
                    config={config as BuiltInMessengerConfig}
                    device={device}
                />
            );
        case "Whatsapp":
            if (!validateWhatsappConfig(config)) {
                throw new Error("Invalid config for Whatsapp");
            }

            return (
                <Whatsapp
                    config={config as WhatsappConfig}
                    device={device}
                />
            );
        default:
            throw new Error(`App ${config.name} not found.`);
    }
}

import { WebPlugin } from '@capacitor/core';
import { WifiPlugin } from './definitions';
export declare class WifiWeb extends WebPlugin implements WifiPlugin {
    constructor();
    scan(): Promise<{
        value: string;
    }>;
    connect(options: {
        ssid: string;
        password?: string;
        authType?: string;
    }): Promise<{
        ssid: string;
    }>;
    connectPrefix(options: {
        ssid: string;
        password?: string;
    }): Promise<{
        ssid: string;
    }>;
    getConnectedSSID(): Promise<{
        ssid: string;
    }>;
    getWifiIP(): Promise<{
        ip: string;
    }>;
}
declare const Wifi: WifiWeb;
export { Wifi };

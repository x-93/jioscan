let SOCKET_SERVER = process.env.WS_SERVER || "ws://localhost:8080";
let SUFFIX = ""
let API_SERVER = process.env.REACT_APP_API_SERVER || "http://localhost:8080"
let ADDRESS_PREFIX = "jio:"
let JIO_UNIT = "KAS"

let BPS = 1


switch (process.env.REACT_APP_NETWORK) {
    case "testnet-10":
        SOCKET_SERVER = "ws://localhost:8080";
        ADDRESS_PREFIX = "jiotest:"
        if (!API_SERVER) {
            API_SERVER = "http://localhost:8080"
        }
        SUFFIX = " TN10"
        JIO_UNIT = "TKAS"
        break;
    case "testnet-11":
        SOCKET_SERVER = "ws://localhost:8080";
        ADDRESS_PREFIX = "jiotest:"
        if (!API_SERVER) {
            API_SERVER = "http://localhost:8080"
        }
        SUFFIX = " TN11"
        JIO_UNIT = "TKAS"
        BPS = 10
        break;

    // mainnet
    default:
        SOCKET_SERVER = "ws://localhost:8080";
        if (!API_SERVER) {
            API_SERVER = "http://localhost:8080"
        }
        break;
}

export { SOCKET_SERVER, SUFFIX, API_SERVER, ADDRESS_PREFIX, BPS, JIO_UNIT }
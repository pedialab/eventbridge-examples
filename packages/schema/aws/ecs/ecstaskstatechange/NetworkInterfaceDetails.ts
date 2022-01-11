

export class NetworkInterfaceDetails {
  'privateIpv4Address': string;
  'ipv6Address': string;
  'attachmentId': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "privateIpv4Address",
            "baseName": "privateIpv4Address",
            "type": "string"
        },
        {
            "name": "ipv6Address",
            "baseName": "ipv6Address",
            "type": "string"
        },
        {
            "name": "attachmentId",
            "baseName": "attachmentId",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return NetworkInterfaceDetails.attributeTypeMap;
    }
}





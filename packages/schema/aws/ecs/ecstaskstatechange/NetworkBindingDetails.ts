

export class NetworkBindingDetails {
  'bindIP': string;
  'protocol': string;
  'containerPort': number;
  'hostPort': number;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bindIP",
            "baseName": "bindIP",
            "type": "string"
        },
        {
            "name": "protocol",
            "baseName": "protocol",
            "type": "string"
        },
        {
            "name": "containerPort",
            "baseName": "containerPort",
            "type": "number"
        },
        {
            "name": "hostPort",
            "baseName": "hostPort",
            "type": "number"
        }    ];

    public static getAttributeTypeMap() {
        return NetworkBindingDetails.attributeTypeMap;
    }
}






import { NetworkBindingDetails } from './NetworkBindingDetails';
import { NetworkInterfaceDetails } from './NetworkInterfaceDetails';

export class ContainerDetails {
  'image': string;
  'imageDigest': string;
  'networkInterfaces': Array<NetworkInterfaceDetails>;
  'networkBindings': Array<NetworkBindingDetails>;
  'memory': string;
  'memoryReservation': string;
  'taskArn': string;
  'name': string;
  'exitCode': number;
  'cpu': string;
  'containerArn': string;
  'lastStatus': string;
  'runtimeId': string;
  'reason': string;
  'gpuIds': Array<string>;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "imageDigest",
            "baseName": "imageDigest",
            "type": "string"
        },
        {
            "name": "networkInterfaces",
            "baseName": "networkInterfaces",
            "type": "Array<NetworkInterfaceDetails>"
        },
        {
            "name": "networkBindings",
            "baseName": "networkBindings",
            "type": "Array<NetworkBindingDetails>"
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "string"
        },
        {
            "name": "memoryReservation",
            "baseName": "memoryReservation",
            "type": "string"
        },
        {
            "name": "taskArn",
            "baseName": "taskArn",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "exitCode",
            "baseName": "exitCode",
            "type": "number"
        },
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "string"
        },
        {
            "name": "containerArn",
            "baseName": "containerArn",
            "type": "string"
        },
        {
            "name": "lastStatus",
            "baseName": "lastStatus",
            "type": "string"
        },
        {
            "name": "runtimeId",
            "baseName": "runtimeId",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "gpuIds",
            "baseName": "gpuIds",
            "type": "Array<string>"
        }    ];

    public static getAttributeTypeMap() {
        return ContainerDetails.attributeTypeMap;
    }
}





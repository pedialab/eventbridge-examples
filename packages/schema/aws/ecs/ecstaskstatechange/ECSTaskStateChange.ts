
import { AttachmentDetails } from './AttachmentDetails';
import { AttributesDetails } from './AttributesDetails';
import { ContainerDetails } from './ContainerDetails';
import { Overrides } from './Overrides';

export class ECSTaskStateChange {
  'overrides': Overrides;
  'executionStoppedAt': Date;
  'memory': string;
  'attachments': Array<AttachmentDetails>;
  'attributes': Array<AttributesDetails>;
  'pullStartedAt': Date;
  'taskArn': string;
  'startedAt': Date;
  'createdAt': Date;
  'clusterArn': string;
  'connectivity': string;
  'platformVersion': string;
  'containerInstanceArn': string;
  'launchType': string;
  'group': string;
  'updatedAt': Date;
  'stopCode': string;
  'pullStoppedAt': Date;
  'connectivityAt': Date;
  'startedBy': string;
  'cpu': string;
  'version': number;
  'stoppingAt': Date;
  'stoppedAt': Date;
  'taskDefinitionArn': string;
  'stoppedReason': string;
  'containers': Array<ContainerDetails>;
  'desiredStatus': string;
  'lastStatus': string;
  'availabilityZone': string;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "overrides",
            "baseName": "overrides",
            "type": "Overrides"
        },
        {
            "name": "executionStoppedAt",
            "baseName": "executionStoppedAt",
            "type": "Date"
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "string"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<AttachmentDetails>"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<AttributesDetails>"
        },
        {
            "name": "pullStartedAt",
            "baseName": "pullStartedAt",
            "type": "Date"
        },
        {
            "name": "taskArn",
            "baseName": "taskArn",
            "type": "string"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "clusterArn",
            "baseName": "clusterArn",
            "type": "string"
        },
        {
            "name": "connectivity",
            "baseName": "connectivity",
            "type": "string"
        },
        {
            "name": "platformVersion",
            "baseName": "platformVersion",
            "type": "string"
        },
        {
            "name": "containerInstanceArn",
            "baseName": "containerInstanceArn",
            "type": "string"
        },
        {
            "name": "launchType",
            "baseName": "launchType",
            "type": "string"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "stopCode",
            "baseName": "stopCode",
            "type": "string"
        },
        {
            "name": "pullStoppedAt",
            "baseName": "pullStoppedAt",
            "type": "Date"
        },
        {
            "name": "connectivityAt",
            "baseName": "connectivityAt",
            "type": "Date"
        },
        {
            "name": "startedBy",
            "baseName": "startedBy",
            "type": "string"
        },
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "stoppingAt",
            "baseName": "stoppingAt",
            "type": "Date"
        },
        {
            "name": "stoppedAt",
            "baseName": "stoppedAt",
            "type": "Date"
        },
        {
            "name": "taskDefinitionArn",
            "baseName": "taskDefinitionArn",
            "type": "string"
        },
        {
            "name": "stoppedReason",
            "baseName": "stoppedReason",
            "type": "string"
        },
        {
            "name": "containers",
            "baseName": "containers",
            "type": "Array<ContainerDetails>"
        },
        {
            "name": "desiredStatus",
            "baseName": "desiredStatus",
            "type": "string"
        },
        {
            "name": "lastStatus",
            "baseName": "lastStatus",
            "type": "string"
        },
        {
            "name": "availabilityZone",
            "baseName": "availabilityZone",
            "type": "string"
        }    ];

    public static getAttributeTypeMap() {
        return ECSTaskStateChange.attributeTypeMap;
    }
}





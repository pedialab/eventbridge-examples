
import { Environment } from './Environment';

export class OverridesItem {
  'environment': Array<Environment>;
  'memory': number;
  'name': string;
  'cpu': number;
  'command': Array<string>;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "environment",
            "baseName": "environment",
            "type": "Array<Environment>"
        },
        {
            "name": "memory",
            "baseName": "memory",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "number"
        },
        {
            "name": "command",
            "baseName": "command",
            "type": "Array<string>"
        }    ];

    public static getAttributeTypeMap() {
        return OverridesItem.attributeTypeMap;
    }
}





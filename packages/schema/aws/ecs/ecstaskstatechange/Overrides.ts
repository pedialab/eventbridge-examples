
import { OverridesItem } from './OverridesItem';

export class Overrides {
  'containerOverrides': Array<OverridesItem>;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containerOverrides",
            "baseName": "containerOverrides",
            "type": "Array<OverridesItem>"
        }    ];

    public static getAttributeTypeMap() {
        return Overrides.attributeTypeMap;
    }
}





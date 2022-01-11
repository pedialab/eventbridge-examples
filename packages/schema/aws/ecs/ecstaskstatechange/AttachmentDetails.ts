
import { AttachmentDetails_details } from './AttachmentDetails_details';

export class AttachmentDetails {
  'id': string;
  'type': string;
  'status': string;
  'details': AttachmentDetails_details;

    private static discriminator: string | undefined = undefined;

    private static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "AttachmentDetails_details"
        }    ];

    public static getAttributeTypeMap() {
        return AttachmentDetails.attributeTypeMap;
    }
}





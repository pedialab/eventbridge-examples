import { EventBridge } from "@aws-sdk/client-eventbridge";

describe('eventPatternExamples', () => {
  let eventBridge: EventBridge;
  beforeEach(() => {
    eventBridge = new EventBridge({});
  });

  it('should match', async () => {
    const event = {
      "version": "0",
      "id": "3e3c153a-8339-4e30-8c35-687ebef853fe",
      "detail-type": "EC2 Instance Launch Successful",
      "source": "aws.autoscaling",
      "account": "123456789012",
      "time": "2015-11-11T21:31:47Z",
      "region": "us-east-1",
      "resources": [
       ],
      "detail": {
        "eventVersion": "",
        "responseElements": null
       }
    }

    const eventPattern = {
      source: ["aws.autoscaling"],
      "detail": {
         "eventVersion": [""]
      }
    };

    // not match as missing details

    const result = await eventBridge
      .testEventPattern({
        EventPattern: JSON.stringify(eventPattern),
        Event: JSON.stringify({
          ...event
        }),
      });

    expect(result.Result).toEqual(true);
  });
})

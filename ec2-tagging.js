const { EC2Client, DescribeInstancesCommand, CreateTagsCommand } = require('@aws-sdk/client-ec2')
const args = require('args-parser')(process.argv);

const tag = [{ Key: args.tagKey, Value: args.tagValue }]

const checkAndAddTag = async () => {
    let ec2client = new EC2Client({
        apiVersion: 'latest'
    });
    try {
        // Get All Instances in the specific Region
        let data = await ec2client.send(new DescribeInstancesCommand({}));
        // Crawl trough all reservations
        for (let reservation of data.Reservations) {
            // Crawl trough all instances
            for (let instance of reservation.Instances) {
                let createTagCommand = new CreateTagsCommand({ Tags: tag, Resources: [`${instance.InstanceId}`] })
                let result = await ec2client.send(createTagCommand);
                console.log(result.$metadata);
            }
        }
    } catch (err) {
        console.log("Error", err);
    }
}

const main = async () => {
    await checkAndAddTag();
}

if (!args.tagKey) {
    console.log('Please add a TagKey with console argument tagKey=YourTagKey')
}

if (!args.tagValue) {
    console.log('Please add a tagValue with console argument tagValue=TagValue')
}

if (args.tagKey && args.tagValue) {
    main();
}


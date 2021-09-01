import { EC2Client, DescribeInstancesCommand, CreateTagsCommand } from '@aws-sdk/client-ec2'

const checkAndAddTag = async () => {
    let ec2client = new EC2Client({
        apiVersion: '2016-11-15',
        region: 'eu-central-1'
    });
    try {
        // Get All Instances in the specific Region
        let data = await ec2client.send(new DescribeInstancesCommand({}));
        // Crawl trough all reservations
        for (let reservation of data.Reservations){
            // Crawl trough all instances
            for(let instance of reservation.Instances) {
                let createTagCommand = new CreateTagsCommand({ Tags: [{ Key:"TEST",Value:"TEST" }] , Resources : [`${instance.InstanceId}`] })
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

main();
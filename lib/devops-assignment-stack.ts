import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecs_patterns from 'aws-cdk-lib/aws-ecs-patterns';
import * as logs from 'aws-cdk-lib/aws-logs';

export class DevopsAssignmentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 🔹 1. VPC
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 2 // Default is all AZs in region
    });

    // 🔹 2. ECS Cluster
    const cluster = new ecs.Cluster(this, 'MyEcsCluster', {
      vpc: vpc
    });

    // 🔹 3. CloudWatch Log Group
    const logGroup = new logs.LogGroup(this, 'MyLogGroup', {
      logGroupName: '/ecs/devops-assignment',
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Delete on stack destroy
    });

    // 🔹 4. Fargate Service + ALB
    new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'MyFargateService', {
      cluster: cluster,
      cpu: 256,
      desiredCount: 1,
      memoryLimitMiB: 512,
      publicLoadBalancer: true,

      // Use Dockerfile in root directory
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset('.'),
        containerPort: 80,
        logDriver: ecs.LogDriver.awsLogs({
          streamPrefix: 'devops-app',
          logGroup: logGroup
        })
      }
    });
  }
}

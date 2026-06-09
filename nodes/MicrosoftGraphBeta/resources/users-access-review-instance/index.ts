import type { INodeProperties } from 'n8n-workflow';

export const usersAccessReviewInstanceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					]
				}
			},
			"options": [
				{
					"name": "Users List Pending Access Review Instances",
					"value": "Users List Pending Access Review Instances",
					"action": "accessReviewInstance: pendingAccessReviewInstances (deprecated)",
					"description": "Retrieve the accessReviewInstance objects pending approval by the calling user. A list of zero or more accessReviewInstance objects are returned, of which the calling user is an assigned reviewer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances"
						}
					}
				},
				{
					"name": "Users Create Pending Access Review Instances",
					"value": "Users Create Pending Access Review Instances",
					"action": "Create new navigation property to pendingAccessReviewInstances for users",
					"description": "Create new navigation property to pendingAccessReviewInstances for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances"
						}
					}
				},
				{
					"name": "Users Delete Pending Access Review Instances",
					"value": "Users Delete Pending Access Review Instances",
					"action": "Delete navigation property pendingAccessReviewInstances for users",
					"description": "Delete navigation property pendingAccessReviewInstances for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Pending Access Review Instances",
					"value": "Users Get Pending Access Review Instances",
					"action": "Get pendingAccessReviewInstances from users",
					"description": "Navigation property to get list of access reviews pending approval by reviewer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Pending Access Review Instances",
					"value": "Users Update Pending Access Review Instances",
					"action": "Update the navigation property pendingAccessReviewInstances in users",
					"description": "Update the navigation property pendingAccessReviewInstances in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances List Contacted Reviewers",
					"value": "Users Pending Access Review Instances List Contacted Reviewers",
					"action": "List contactedReviewers",
					"description": "Get the reviewers for an access review instance, irrespective of whether or not they have received a notification. The reviewers are represented by an accessReviewReviewer object. A list of zero or more objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Create Contacted Reviewers",
					"value": "Users Pending Access Review Instances Create Contacted Reviewers",
					"action": "Create new navigation property to contactedReviewers for users",
					"description": "Create new navigation property to contactedReviewers for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Delete Contacted Reviewers",
					"value": "Users Pending Access Review Instances Delete Contacted Reviewers",
					"action": "Delete navigation property contactedReviewers for users",
					"description": "Delete navigation property contactedReviewers for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Get Contacted Reviewers",
					"value": "Users Pending Access Review Instances Get Contacted Reviewers",
					"action": "Get contactedReviewers from users",
					"description": "Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Update Contacted Reviewers",
					"value": "Users Pending Access Review Instances Update Contacted Reviewers",
					"action": "Update the navigation property contactedReviewers in users",
					"description": "Update the navigation property contactedReviewers in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances List Decisions",
					"value": "Users Pending Access Review Instances List Decisions",
					"action": "List decisions",
					"description": "Retrieve the accessReviewInstanceDecisionItem objects for a specific accessReviewInstance. A list of zero or more accessReviewInstanceDecisionItem objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Create Decisions",
					"value": "Users Pending Access Review Instances Create Decisions",
					"action": "Create new navigation property to decisions for users",
					"description": "Create new navigation property to decisions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Delete Decisions",
					"value": "Users Pending Access Review Instances Delete Decisions",
					"action": "Delete navigation property decisions for users",
					"description": "Delete navigation property decisions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Get Decisions",
					"value": "Users Pending Access Review Instances Get Decisions",
					"action": "Get decisions from users",
					"description": "Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Update Decisions",
					"value": "Users Pending Access Review Instances Update Decisions",
					"action": "Update the navigation property decisions in users",
					"description": "Update the navigation property decisions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions List Insights",
					"value": "Users Pending Access Review Instances Decisions List Insights",
					"action": "Get insights from users",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Create Insights",
					"value": "Users Pending Access Review Instances Decisions Create Insights",
					"action": "Create new navigation property to insights for users",
					"description": "Create new navigation property to insights for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Delete Insights",
					"value": "Users Pending Access Review Instances Decisions Delete Insights",
					"action": "Delete navigation property insights for users",
					"description": "Delete navigation property insights for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Get Insights",
					"value": "Users Pending Access Review Instances Decisions Get Insights",
					"action": "Get insights from users",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Update Insights",
					"value": "Users Pending Access Review Instances Decisions Update Insights",
					"action": "Update the navigation property insights in users",
					"description": "Update the navigation property insights in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Delete Instance",
					"value": "Users Pending Access Review Instances Decisions Delete Instance",
					"action": "Delete navigation property instance for users",
					"description": "Delete navigation property instance for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Get Instance",
					"value": "Users Pending Access Review Instances Decisions Get Instance",
					"action": "Get instance from users",
					"description": "There is exactly one accessReviewInstance associated with each decision. The instance is the parent of the decision item, representing the recurrence of the access review the decision is made on.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Update Instance",
					"value": "Users Pending Access Review Instances Decisions Update Instance",
					"action": "Update the navigation property instance in users",
					"description": "Update the navigation property instance in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance List Contacted Reviewers",
					"value": "Users Pending Access Review Instances Decisions Instance List Contacted Reviewers",
					"action": "List contactedReviewers",
					"description": "Get the reviewers for an access review instance, irrespective of whether or not they have received a notification. The reviewers are represented by an accessReviewReviewer object. A list of zero or more objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Create Contacted Reviewers",
					"value": "Users Pending Access Review Instances Decisions Instance Create Contacted Reviewers",
					"action": "Create new navigation property to contactedReviewers for users",
					"description": "Create new navigation property to contactedReviewers for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Delete Contacted Reviewers",
					"value": "Users Pending Access Review Instances Decisions Instance Delete Contacted Reviewers",
					"action": "Delete navigation property contactedReviewers for users",
					"description": "Delete navigation property contactedReviewers for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Get Contacted Reviewers",
					"value": "Users Pending Access Review Instances Decisions Instance Get Contacted Reviewers",
					"action": "Get contactedReviewers from users",
					"description": "Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Update Contacted Reviewers",
					"value": "Users Pending Access Review Instances Decisions Instance Update Contacted Reviewers",
					"action": "Update the navigation property contactedReviewers in users",
					"description": "Update the navigation property contactedReviewers in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Get Definition",
					"value": "Users Pending Access Review Instances Decisions Instance Get Definition",
					"action": "Get definition from users",
					"description": "There is exactly one accessReviewScheduleDefinition associated with each instance. It is the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/definition"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance List Stages",
					"value": "Users Pending Access Review Instances Decisions Instance List Stages",
					"action": "List stages",
					"description": "Retrieve the stages in a multi-stage access review instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Create Stages",
					"value": "Users Pending Access Review Instances Decisions Instance Create Stages",
					"action": "Create new navigation property to stages for users",
					"description": "Create new navigation property to stages for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Delete Stages",
					"value": "Users Pending Access Review Instances Decisions Instance Delete Stages",
					"action": "Delete navigation property stages for users",
					"description": "Delete navigation property stages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Get Stages",
					"value": "Users Pending Access Review Instances Decisions Instance Get Stages",
					"action": "Get stages from users",
					"description": "If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Update Stages",
					"value": "Users Pending Access Review Instances Decisions Instance Update Stages",
					"action": "Update the navigation property stages in users",
					"description": "Update the navigation property stages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages List Decisions",
					"value": "Users Pending Access Review Instances Decisions Instance Stages List Decisions",
					"action": "List decisions (from a multi-stage access review)",
					"description": "Get the decisions from a stage in a multi-stage access review. The decisions in an accessReviewStage object are represented by an accessReviewInstanceDecisionItem object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages Create Decisions",
					"value": "Users Pending Access Review Instances Decisions Instance Stages Create Decisions",
					"action": "Create new navigation property to decisions for users",
					"description": "Create new navigation property to decisions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages Delete Decisions",
					"value": "Users Pending Access Review Instances Decisions Instance Stages Delete Decisions",
					"action": "Delete navigation property decisions for users",
					"description": "Delete navigation property decisions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages Get Decisions",
					"value": "Users Pending Access Review Instances Decisions Instance Stages Get Decisions",
					"action": "Get decisions from users",
					"description": "Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages Update Decisions",
					"value": "Users Pending Access Review Instances Decisions Instance Stages Update Decisions",
					"action": "Update the navigation property decisions in users",
					"description": "Update the navigation property decisions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights",
					"value": "Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights",
					"action": "Get insights from users",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages Decisions Create Insights",
					"value": "Users Pending Access Review Instances Decisions Instance Stages Decisions Create Insights",
					"action": "Create new navigation property to insights for users",
					"description": "Create new navigation property to insights for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages Decisions Delete Insights",
					"value": "Users Pending Access Review Instances Decisions Instance Stages Decisions Delete Insights",
					"action": "Delete navigation property insights for users",
					"description": "Delete navigation property insights for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages Decisions Get Insights",
					"value": "Users Pending Access Review Instances Decisions Instance Stages Decisions Get Insights",
					"action": "Get insights from users",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Decisions Instance Stages Decisions Update Insights",
					"value": "Users Pending Access Review Instances Decisions Instance Stages Decisions Update Insights",
					"action": "Update the navigation property insights in users",
					"description": "Update the navigation property insights in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Get Definition",
					"value": "Users Pending Access Review Instances Get Definition",
					"action": "Get definition from users",
					"description": "There is exactly one accessReviewScheduleDefinition associated with each instance. It is the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/definition"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances List Stages",
					"value": "Users Pending Access Review Instances List Stages",
					"action": "List stages",
					"description": "Retrieve the stages in a multi-stage access review instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Create Stages",
					"value": "Users Pending Access Review Instances Create Stages",
					"action": "Create new navigation property to stages for users",
					"description": "Create new navigation property to stages for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Delete Stages",
					"value": "Users Pending Access Review Instances Delete Stages",
					"action": "Delete navigation property stages for users",
					"description": "Delete navigation property stages for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Get Stages",
					"value": "Users Pending Access Review Instances Get Stages",
					"action": "Get stages from users",
					"description": "If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Update Stages",
					"value": "Users Pending Access Review Instances Update Stages",
					"action": "Update the navigation property stages in users",
					"description": "Update the navigation property stages in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages List Decisions",
					"value": "Users Pending Access Review Instances Stages List Decisions",
					"action": "List decisions (from a multi-stage access review)",
					"description": "Get the decisions from a stage in a multi-stage access review. The decisions in an accessReviewStage object are represented by an accessReviewInstanceDecisionItem object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Create Decisions",
					"value": "Users Pending Access Review Instances Stages Create Decisions",
					"action": "Create new navigation property to decisions for users",
					"description": "Create new navigation property to decisions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Delete Decisions",
					"value": "Users Pending Access Review Instances Stages Delete Decisions",
					"action": "Delete navigation property decisions for users",
					"description": "Delete navigation property decisions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Get Decisions",
					"value": "Users Pending Access Review Instances Stages Get Decisions",
					"action": "Get decisions from users",
					"description": "Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Update Decisions",
					"value": "Users Pending Access Review Instances Stages Update Decisions",
					"action": "Update the navigation property decisions in users",
					"description": "Update the navigation property decisions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions List Insights",
					"value": "Users Pending Access Review Instances Stages Decisions List Insights",
					"action": "Get insights from users",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Create Insights",
					"value": "Users Pending Access Review Instances Stages Decisions Create Insights",
					"action": "Create new navigation property to insights for users",
					"description": "Create new navigation property to insights for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Delete Insights",
					"value": "Users Pending Access Review Instances Stages Decisions Delete Insights",
					"action": "Delete navigation property insights for users",
					"description": "Delete navigation property insights for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Get Insights",
					"value": "Users Pending Access Review Instances Stages Decisions Get Insights",
					"action": "Get insights from users",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Update Insights",
					"value": "Users Pending Access Review Instances Stages Decisions Update Insights",
					"action": "Update the navigation property insights in users",
					"description": "Update the navigation property insights in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Delete Instance",
					"value": "Users Pending Access Review Instances Stages Decisions Delete Instance",
					"action": "Delete navigation property instance for users",
					"description": "Delete navigation property instance for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Get Instance",
					"value": "Users Pending Access Review Instances Stages Decisions Get Instance",
					"action": "Get instance from users",
					"description": "There is exactly one accessReviewInstance associated with each decision. The instance is the parent of the decision item, representing the recurrence of the access review the decision is made on.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Update Instance",
					"value": "Users Pending Access Review Instances Stages Decisions Update Instance",
					"action": "Update the navigation property instance in users",
					"description": "Update the navigation property instance in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers",
					"value": "Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers",
					"action": "List contactedReviewers",
					"description": "Get the reviewers for an access review instance, irrespective of whether or not they have received a notification. The reviewers are represented by an accessReviewReviewer object. A list of zero or more objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Create Contacted Reviewers",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Create Contacted Reviewers",
					"action": "Create new navigation property to contactedReviewers for users",
					"description": "Create new navigation property to contactedReviewers for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Delete Contacted Reviewers",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Delete Contacted Reviewers",
					"action": "Delete navigation property contactedReviewers for users",
					"description": "Delete navigation property contactedReviewers for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Get Contacted Reviewers",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Get Contacted Reviewers",
					"action": "Get contactedReviewers from users",
					"description": "Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Update Contacted Reviewers",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Update Contacted Reviewers",
					"action": "Update the navigation property contactedReviewers in users",
					"description": "Update the navigation property contactedReviewers in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance List Decisions",
					"value": "Users Pending Access Review Instances Stages Decisions Instance List Decisions",
					"action": "List decisions",
					"description": "Retrieve the accessReviewInstanceDecisionItem objects for a specific accessReviewInstance. A list of zero or more accessReviewInstanceDecisionItem objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Create Decisions",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Create Decisions",
					"action": "Create new navigation property to decisions for users",
					"description": "Create new navigation property to decisions for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Delete Decisions",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Delete Decisions",
					"action": "Delete navigation property decisions for users",
					"description": "Delete navigation property decisions for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Get Decisions",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Get Decisions",
					"action": "Get decisions from users",
					"description": "Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Update Decisions",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Update Decisions",
					"action": "Update the navigation property decisions in users",
					"description": "Update the navigation property decisions in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights",
					"action": "Get insights from users",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Decisions Create Insights",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Decisions Create Insights",
					"action": "Create new navigation property to insights for users",
					"description": "Create new navigation property to insights for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Decisions Delete Insights",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Decisions Delete Insights",
					"action": "Delete navigation property insights for users",
					"description": "Delete navigation property insights for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Decisions Get Insights",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Decisions Get Insights",
					"action": "Get insights from users",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Decisions Update Insights",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Decisions Update Insights",
					"action": "Update the navigation property insights in users",
					"description": "Update the navigation property insights in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Pending Access Review Instances Stages Decisions Instance Get Definition",
					"value": "Users Pending Access Review Instances Stages Decisions Instance Get Definition",
					"action": "Get definition from users",
					"description": "There is exactly one accessReviewScheduleDefinition associated with each instance. It is the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/pendingAccessReviewInstances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/definition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users List Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users List Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users List Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users List Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users List Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users List Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users List Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users List Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users List Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Create Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Create Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Delete Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Delete Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Get Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Get Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Get Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Update Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Update Pending Access Review Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Delete Instance"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Delete Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Get Instance"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Get Instance"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Get Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Get Definition"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Get Definition"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Create Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Create Stages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Delete Stages"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Delete Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Get Stages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Get Stages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Get Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Update Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Update Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Decisions Instance Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Definition"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Definition"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Create Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Create Stages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Delete Stages"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Delete Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Stages"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Stages"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Get Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Update Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Update Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Delete Instance"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Delete Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Get Instance"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Get Instance"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Get Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/pendingAccessReviewInstances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Get Definition"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Get Definition"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Access Review Instance"
					],
					"operation": [
						"Users Pending Access Review Instances Stages Decisions Instance Get Definition"
					]
				}
			}
		},
];

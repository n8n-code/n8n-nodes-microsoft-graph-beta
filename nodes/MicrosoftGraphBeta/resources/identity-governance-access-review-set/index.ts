import type { INodeProperties } from 'n8n-workflow';

export const identityGovernanceAccessReviewSetDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					]
				}
			},
			"options": [
				{
					"name": "Identity Governance Delete Access Reviews",
					"value": "Identity Governance Delete Access Reviews",
					"action": "Delete navigation property accessReviews for identityGovernance",
					"description": "Delete navigation property accessReviews for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews"
						}
					}
				},
				{
					"name": "Identity Governance Get Access Reviews",
					"value": "Identity Governance Get Access Reviews",
					"action": "Get accessReviews from identityGovernance",
					"description": "Get accessReviews from identityGovernance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews"
						}
					}
				},
				{
					"name": "Identity Governance Update Access Reviews",
					"value": "Identity Governance Update Access Reviews",
					"action": "Update the navigation property accessReviews in identityGovernance",
					"description": "Update the navigation property accessReviews in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews List Decisions",
					"value": "Identity Governance Access Reviews List Decisions",
					"action": "Get decisions from identityGovernance",
					"description": "Represents an Azure AD access review decision on an instance of a review.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Create Decisions",
					"value": "Identity Governance Access Reviews Create Decisions",
					"action": "Create new navigation property to decisions for identityGovernance",
					"description": "Create new navigation property to decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Delete Decisions",
					"value": "Identity Governance Access Reviews Delete Decisions",
					"action": "Delete navigation property decisions for identityGovernance",
					"description": "Delete navigation property decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Get Decisions",
					"value": "Identity Governance Access Reviews Get Decisions",
					"action": "Get decisions from identityGovernance",
					"description": "Represents an Azure AD access review decision on an instance of a review.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Update Decisions",
					"value": "Identity Governance Access Reviews Update Decisions",
					"action": "Update the navigation property decisions in identityGovernance",
					"description": "Update the navigation property decisions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions List Insights",
					"value": "Identity Governance Access Reviews Decisions List Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Create Insights",
					"value": "Identity Governance Access Reviews Decisions Create Insights",
					"action": "Create new navigation property to insights for identityGovernance",
					"description": "Create new navigation property to insights for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Delete Insights",
					"value": "Identity Governance Access Reviews Decisions Delete Insights",
					"action": "Delete navigation property insights for identityGovernance",
					"description": "Delete navigation property insights for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Get Insights",
					"value": "Identity Governance Access Reviews Decisions Get Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Update Insights",
					"value": "Identity Governance Access Reviews Decisions Update Insights",
					"action": "Update the navigation property insights in identityGovernance",
					"description": "Update the navigation property insights in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Delete Instance",
					"value": "Identity Governance Access Reviews Decisions Delete Instance",
					"action": "Delete navigation property instance for identityGovernance",
					"description": "Delete navigation property instance for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Get Instance",
					"value": "Identity Governance Access Reviews Decisions Get Instance",
					"action": "Get instance from identityGovernance",
					"description": "There is exactly one accessReviewInstance associated with each decision. The instance is the parent of the decision item, representing the recurrence of the access review the decision is made on.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Update Instance",
					"value": "Identity Governance Access Reviews Decisions Update Instance",
					"action": "Update the navigation property instance in identityGovernance",
					"description": "Update the navigation property instance in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance List Contacted Reviewers",
					"value": "Identity Governance Access Reviews Decisions Instance List Contacted Reviewers",
					"action": "List contactedReviewers",
					"description": "Get the reviewers for an access review instance, irrespective of whether or not they have received a notification. The reviewers are represented by an accessReviewReviewer object. A list of zero or more objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Create Contacted Reviewers",
					"value": "Identity Governance Access Reviews Decisions Instance Create Contacted Reviewers",
					"action": "Create new navigation property to contactedReviewers for identityGovernance",
					"description": "Create new navigation property to contactedReviewers for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Delete Contacted Reviewers",
					"value": "Identity Governance Access Reviews Decisions Instance Delete Contacted Reviewers",
					"action": "Delete navigation property contactedReviewers for identityGovernance",
					"description": "Delete navigation property contactedReviewers for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Get Contacted Reviewers",
					"value": "Identity Governance Access Reviews Decisions Instance Get Contacted Reviewers",
					"action": "Get contactedReviewers from identityGovernance",
					"description": "Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Update Contacted Reviewers",
					"value": "Identity Governance Access Reviews Decisions Instance Update Contacted Reviewers",
					"action": "Update the navigation property contactedReviewers in identityGovernance",
					"description": "Update the navigation property contactedReviewers in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance List Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance List Decisions",
					"action": "List decisions",
					"description": "Retrieve the accessReviewInstanceDecisionItem objects for a specific accessReviewInstance. A list of zero or more accessReviewInstanceDecisionItem objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Create Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance Create Decisions",
					"action": "Create new navigation property to decisions for identityGovernance",
					"description": "Create new navigation property to decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Delete Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance Delete Decisions",
					"action": "Delete navigation property decisions for identityGovernance",
					"description": "Delete navigation property decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Get Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance Get Decisions",
					"action": "Get decisions from identityGovernance",
					"description": "Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Update Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance Update Decisions",
					"action": "Update the navigation property decisions in identityGovernance",
					"description": "Update the navigation property decisions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Decisions List Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Decisions List Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Decisions Create Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Decisions Create Insights",
					"action": "Create new navigation property to insights for identityGovernance",
					"description": "Create new navigation property to insights for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Decisions Delete Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Decisions Delete Insights",
					"action": "Delete navigation property insights for identityGovernance",
					"description": "Delete navigation property insights for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Decisions Get Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Decisions Get Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Decisions Update Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Decisions Update Insights",
					"action": "Update the navigation property insights in identityGovernance",
					"description": "Update the navigation property insights in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Get Definition",
					"value": "Identity Governance Access Reviews Decisions Instance Get Definition",
					"action": "Get definition from identityGovernance",
					"description": "There is exactly one accessReviewScheduleDefinition associated with each instance. It is the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/definition"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance List Stages",
					"value": "Identity Governance Access Reviews Decisions Instance List Stages",
					"action": "List stages",
					"description": "Retrieve the stages in a multi-stage access review instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Create Stages",
					"value": "Identity Governance Access Reviews Decisions Instance Create Stages",
					"action": "Create new navigation property to stages for identityGovernance",
					"description": "Create new navigation property to stages for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Delete Stages",
					"value": "Identity Governance Access Reviews Decisions Instance Delete Stages",
					"action": "Delete navigation property stages for identityGovernance",
					"description": "Delete navigation property stages for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Get Stages",
					"value": "Identity Governance Access Reviews Decisions Instance Get Stages",
					"action": "Get stages from identityGovernance",
					"description": "If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Update Stages",
					"value": "Identity Governance Access Reviews Decisions Instance Update Stages",
					"action": "Update the navigation property stages in identityGovernance",
					"description": "Update the navigation property stages in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages List Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance Stages List Decisions",
					"action": "List decisions (from a multi-stage access review)",
					"description": "Get the decisions from a stage in a multi-stage access review. The decisions in an accessReviewStage object are represented by an accessReviewInstanceDecisionItem object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages Create Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance Stages Create Decisions",
					"action": "Create new navigation property to decisions for identityGovernance",
					"description": "Create new navigation property to decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages Delete Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance Stages Delete Decisions",
					"action": "Delete navigation property decisions for identityGovernance",
					"description": "Delete navigation property decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages Get Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance Stages Get Decisions",
					"action": "Get decisions from identityGovernance",
					"description": "Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages Update Decisions",
					"value": "Identity Governance Access Reviews Decisions Instance Stages Update Decisions",
					"action": "Update the navigation property decisions in identityGovernance",
					"description": "Update the navigation property decisions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages Decisions Create Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Stages Decisions Create Insights",
					"action": "Create new navigation property to insights for identityGovernance",
					"description": "Create new navigation property to insights for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages Decisions Delete Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Stages Decisions Delete Insights",
					"action": "Delete navigation property insights for identityGovernance",
					"description": "Delete navigation property insights for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages Decisions Get Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Stages Decisions Get Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Decisions Instance Stages Decisions Update Insights",
					"value": "Identity Governance Access Reviews Decisions Instance Stages Decisions Update Insights",
					"action": "Update the navigation property insights in identityGovernance",
					"description": "Update the navigation property insights in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews List Definitions",
					"value": "Identity Governance Access Reviews List Definitions",
					"action": "List definitions",
					"description": "Retrieve the accessReviewScheduleDefinition objects. A list of zero or more accessReviewScheduleDefinition objects are returned, including all of their nested properties, for each access review series created. This does not include the associated accessReviewInstance objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Create Definitions",
					"value": "Identity Governance Access Reviews Create Definitions",
					"action": "Create definitions",
					"description": "Create a new accessReviewScheduleDefinition object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Delete Definitions",
					"value": "Identity Governance Access Reviews Delete Definitions",
					"action": "Delete navigation property definitions for identityGovernance",
					"description": "Delete navigation property definitions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Get Definitions",
					"value": "Identity Governance Access Reviews Get Definitions",
					"action": "Get definitions from identityGovernance",
					"description": "Represents the template and scheduling for an access review.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Update Definitions",
					"value": "Identity Governance Access Reviews Update Definitions",
					"action": "Update the navigation property definitions in identityGovernance",
					"description": "Update the navigation property definitions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions List Instances",
					"value": "Identity Governance Access Reviews Definitions List Instances",
					"action": "List instances",
					"description": "Retrieve the accessReviewInstance objects for a specific accessReviewScheduleDefinition. A list of zero or more **accessReviewInstance** objects are returned, including all of their nested properties. Returned objects do not include associated accessReviewInstanceDecisionItems. To retrieve the decisions on the instance, use List accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Create Instances",
					"value": "Identity Governance Access Reviews Definitions Create Instances",
					"action": "Create new navigation property to instances for identityGovernance",
					"description": "Create new navigation property to instances for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Delete Instances",
					"value": "Identity Governance Access Reviews Definitions Delete Instances",
					"action": "Delete navigation property instances for identityGovernance",
					"description": "Delete navigation property instances for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Get Instances",
					"value": "Identity Governance Access Reviews Definitions Get Instances",
					"action": "Get instances from identityGovernance",
					"description": "Set of access reviews instances for this access review series. Access reviews that do not recur will only have one instance; otherwise, there is an instance for each recurrence.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Update Instances",
					"value": "Identity Governance Access Reviews Definitions Update Instances",
					"action": "Update the navigation property instances in identityGovernance",
					"description": "Update the navigation property instances in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances List Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances List Contacted Reviewers",
					"action": "List contactedReviewers",
					"description": "Get the reviewers for an access review instance, irrespective of whether or not they have received a notification. The reviewers are represented by an accessReviewReviewer object. A list of zero or more objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Create Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Create Contacted Reviewers",
					"action": "Create new navigation property to contactedReviewers for identityGovernance",
					"description": "Create new navigation property to contactedReviewers for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Delete Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Delete Contacted Reviewers",
					"action": "Delete navigation property contactedReviewers for identityGovernance",
					"description": "Delete navigation property contactedReviewers for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Get Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Get Contacted Reviewers",
					"action": "Get contactedReviewers from identityGovernance",
					"description": "Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Update Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Update Contacted Reviewers",
					"action": "Update the navigation property contactedReviewers in identityGovernance",
					"description": "Update the navigation property contactedReviewers in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances List Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances List Decisions",
					"action": "List decisions",
					"description": "Retrieve the accessReviewInstanceDecisionItem objects for a specific accessReviewInstance. A list of zero or more accessReviewInstanceDecisionItem objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Create Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Create Decisions",
					"action": "Create new navigation property to decisions for identityGovernance",
					"description": "Create new navigation property to decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Delete Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Delete Decisions",
					"action": "Delete navigation property decisions for identityGovernance",
					"description": "Delete navigation property decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Get Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Get Decisions",
					"action": "Get decisions from identityGovernance",
					"description": "Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Update Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Update Decisions",
					"action": "Update the navigation property decisions in identityGovernance",
					"description": "Update the navigation property decisions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions List Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions List Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Create Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Create Insights",
					"action": "Create new navigation property to insights for identityGovernance",
					"description": "Create new navigation property to insights for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Delete Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Delete Insights",
					"action": "Delete navigation property insights for identityGovernance",
					"description": "Delete navigation property insights for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Get Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Get Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Update Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Update Insights",
					"action": "Update the navigation property insights in identityGovernance",
					"description": "Update the navigation property insights in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Delete Instance",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Delete Instance",
					"action": "Delete navigation property instance for identityGovernance",
					"description": "Delete navigation property instance for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Get Instance",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Get Instance",
					"action": "Get instance from identityGovernance",
					"description": "There is exactly one accessReviewInstance associated with each decision. The instance is the parent of the decision item, representing the recurrence of the access review the decision is made on.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Update Instance",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Update Instance",
					"action": "Update the navigation property instance in identityGovernance",
					"description": "Update the navigation property instance in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers",
					"action": "List contactedReviewers",
					"description": "Get the reviewers for an access review instance, irrespective of whether or not they have received a notification. The reviewers are represented by an accessReviewReviewer object. A list of zero or more objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Create Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Create Contacted Reviewers",
					"action": "Create new navigation property to contactedReviewers for identityGovernance",
					"description": "Create new navigation property to contactedReviewers for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Delete Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Delete Contacted Reviewers",
					"action": "Delete navigation property contactedReviewers for identityGovernance",
					"description": "Delete navigation property contactedReviewers for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Get Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Get Contacted Reviewers",
					"action": "Get contactedReviewers from identityGovernance",
					"description": "Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Update Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Update Contacted Reviewers",
					"action": "Update the navigation property contactedReviewers in identityGovernance",
					"description": "Update the navigation property contactedReviewers in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Get Definition",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Get Definition",
					"action": "Get definition from identityGovernance",
					"description": "There is exactly one accessReviewScheduleDefinition associated with each instance. It is the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/definition"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages",
					"action": "List stages",
					"description": "Retrieve the stages in a multi-stage access review instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Create Stages",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Create Stages",
					"action": "Create new navigation property to stages for identityGovernance",
					"description": "Create new navigation property to stages for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Delete Stages",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Delete Stages",
					"action": "Delete navigation property stages for identityGovernance",
					"description": "Delete navigation property stages for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Get Stages",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Get Stages",
					"action": "Get stages from identityGovernance",
					"description": "If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Update Stages",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Update Stages",
					"action": "Update the navigation property stages in identityGovernance",
					"description": "Update the navigation property stages in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions",
					"action": "List decisions (from a multi-stage access review)",
					"description": "Get the decisions from a stage in a multi-stage access review. The decisions in an accessReviewStage object are represented by an accessReviewInstanceDecisionItem object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Create Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Create Decisions",
					"action": "Create new navigation property to decisions for identityGovernance",
					"description": "Create new navigation property to decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Delete Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Delete Decisions",
					"action": "Delete navigation property decisions for identityGovernance",
					"description": "Delete navigation property decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Get Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Get Decisions",
					"action": "Get decisions from identityGovernance",
					"description": "Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Update Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Update Decisions",
					"action": "Update the navigation property decisions in identityGovernance",
					"description": "Update the navigation property decisions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Create Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Create Insights",
					"action": "Create new navigation property to insights for identityGovernance",
					"description": "Create new navigation property to insights for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Delete Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Delete Insights",
					"action": "Delete navigation property insights for identityGovernance",
					"description": "Delete navigation property insights for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Get Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Get Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Update Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Update Insights",
					"action": "Update the navigation property insights in identityGovernance",
					"description": "Update the navigation property insights in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Get Definition",
					"value": "Identity Governance Access Reviews Definitions Instances Get Definition",
					"action": "Get definition from identityGovernance",
					"description": "There is exactly one accessReviewScheduleDefinition associated with each instance. It is the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/definition"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances List Stages",
					"value": "Identity Governance Access Reviews Definitions Instances List Stages",
					"action": "List stages",
					"description": "Retrieve the stages in a multi-stage access review instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Create Stages",
					"value": "Identity Governance Access Reviews Definitions Instances Create Stages",
					"action": "Create new navigation property to stages for identityGovernance",
					"description": "Create new navigation property to stages for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Delete Stages",
					"value": "Identity Governance Access Reviews Definitions Instances Delete Stages",
					"action": "Delete navigation property stages for identityGovernance",
					"description": "Delete navigation property stages for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Get Stages",
					"value": "Identity Governance Access Reviews Definitions Instances Get Stages",
					"action": "Get stages from identityGovernance",
					"description": "If the instance has multiple stages, this returns the collection of stages. A new stage will only be created when the previous stage ends. The existence, number, and settings of stages on a review instance are created based on the accessReviewStageSettings on the parent accessReviewScheduleDefinition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Update Stages",
					"value": "Identity Governance Access Reviews Definitions Instances Update Stages",
					"action": "Update the navigation property stages in identityGovernance",
					"description": "Update the navigation property stages in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages List Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages List Decisions",
					"action": "List decisions (from a multi-stage access review)",
					"description": "Get the decisions from a stage in a multi-stage access review. The decisions in an accessReviewStage object are represented by an accessReviewInstanceDecisionItem object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Create Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Create Decisions",
					"action": "Create new navigation property to decisions for identityGovernance",
					"description": "Create new navigation property to decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Delete Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Delete Decisions",
					"action": "Delete navigation property decisions for identityGovernance",
					"description": "Delete navigation property decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Get Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Get Decisions",
					"action": "Get decisions from identityGovernance",
					"description": "Each user reviewed in an accessReviewStage has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Update Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Update Decisions",
					"action": "Update the navigation property decisions in identityGovernance",
					"description": "Update the navigation property decisions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Create Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Create Insights",
					"action": "Create new navigation property to insights for identityGovernance",
					"description": "Create new navigation property to insights for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Delete Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Delete Insights",
					"action": "Delete navigation property insights for identityGovernance",
					"description": "Delete navigation property insights for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Get Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Get Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Update Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Update Insights",
					"action": "Update the navigation property insights in identityGovernance",
					"description": "Update the navigation property insights in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Delete Instance",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Delete Instance",
					"action": "Delete navigation property instance for identityGovernance",
					"description": "Delete navigation property instance for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Get Instance",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Get Instance",
					"action": "Get instance from identityGovernance",
					"description": "There is exactly one accessReviewInstance associated with each decision. The instance is the parent of the decision item, representing the recurrence of the access review the decision is made on.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Update Instance",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Update Instance",
					"action": "Update the navigation property instance in identityGovernance",
					"description": "Update the navigation property instance in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers",
					"action": "List contactedReviewers",
					"description": "Get the reviewers for an access review instance, irrespective of whether or not they have received a notification. The reviewers are represented by an accessReviewReviewer object. A list of zero or more objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Create Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Create Contacted Reviewers",
					"action": "Create new navigation property to contactedReviewers for identityGovernance",
					"description": "Create new navigation property to contactedReviewers for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Delete Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Delete Contacted Reviewers",
					"action": "Delete navigation property contactedReviewers for identityGovernance",
					"description": "Delete navigation property contactedReviewers for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Contacted Reviewers",
					"action": "Get contactedReviewers from identityGovernance",
					"description": "Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Update Contacted Reviewers",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Update Contacted Reviewers",
					"action": "Update the navigation property contactedReviewers in identityGovernance",
					"description": "Update the navigation property contactedReviewers in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/contactedReviewers/{{$parameter[\"accessReviewReviewer-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions",
					"action": "List decisions",
					"description": "Retrieve the accessReviewInstanceDecisionItem objects for a specific accessReviewInstance. A list of zero or more accessReviewInstanceDecisionItem objects are returned, including all of their nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Create Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Create Decisions",
					"action": "Create new navigation property to decisions for identityGovernance",
					"description": "Create new navigation property to decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Delete Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Delete Decisions",
					"action": "Delete navigation property decisions for identityGovernance",
					"description": "Delete navigation property decisions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Decisions",
					"action": "Get decisions from identityGovernance",
					"description": "Each user reviewed in an accessReviewInstance has a decision item representing if they were approved, denied, or not yet reviewed.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Update Decisions",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Update Decisions",
					"action": "Update the navigation property decisions in identityGovernance",
					"description": "Update the navigation property decisions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Create Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Create Insights",
					"action": "Create new navigation property to insights for identityGovernance",
					"description": "Create new navigation property to insights for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Delete Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Delete Insights",
					"action": "Delete navigation property insights for identityGovernance",
					"description": "Delete navigation property insights for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Get Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Get Insights",
					"action": "Get insights from identityGovernance",
					"description": "Insights are recommendations to reviewers on whether to approve or deny a decision. There can be multiple insights associated with an accessReviewInstanceDecisionItem.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Update Insights",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Update Insights",
					"action": "Update the navigation property insights in identityGovernance",
					"description": "Update the navigation property insights in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id1\"]}}/insights/{{$parameter[\"governanceInsight-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Definition",
					"value": "Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Definition",
					"action": "Get definition from identityGovernance",
					"description": "There is exactly one accessReviewScheduleDefinition associated with each instance. It is the parent schedule for the instance, where instances are created for each recurrence of a review definition and each group selected to review by the definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/definitions/{{$parameter[\"accessReviewScheduleDefinition-id\"]}}/instances/{{$parameter[\"accessReviewInstance-id\"]}}/stages/{{$parameter[\"accessReviewStage-id\"]}}/decisions/{{$parameter[\"accessReviewInstanceDecisionItem-id\"]}}/instance/definition"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews List History Definitions",
					"value": "Identity Governance Access Reviews List History Definitions",
					"action": "List historyDefinitions",
					"description": "Retrieve the accessReviewHistoryDefinition objects created in the last 30 days, including all nested properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/historyDefinitions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Create History Definitions",
					"value": "Identity Governance Access Reviews Create History Definitions",
					"action": "Create historyDefinitions",
					"description": "Create a new accessReviewHistoryDefinition object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/historyDefinitions"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Delete History Definitions",
					"value": "Identity Governance Access Reviews Delete History Definitions",
					"action": "Delete navigation property historyDefinitions for identityGovernance",
					"description": "Delete navigation property historyDefinitions for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/historyDefinitions/{{$parameter[\"accessReviewHistoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Get History Definitions",
					"value": "Identity Governance Access Reviews Get History Definitions",
					"action": "Get historyDefinitions from identityGovernance",
					"description": "Represents a collection of access review history data and the scopes used to collect that data.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/historyDefinitions/{{$parameter[\"accessReviewHistoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Update History Definitions",
					"value": "Identity Governance Access Reviews Update History Definitions",
					"action": "Update the navigation property historyDefinitions in identityGovernance",
					"description": "Update the navigation property historyDefinitions in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/historyDefinitions/{{$parameter[\"accessReviewHistoryDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews History Definitions List Instances",
					"value": "Identity Governance Access Reviews History Definitions List Instances",
					"action": "List instances (of an accessReviewHistoryDefinition)",
					"description": "Retrieve the instances of an access review history definition created in the last 30 days.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/historyDefinitions/{{$parameter[\"accessReviewHistoryDefinition-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews History Definitions Create Instances",
					"value": "Identity Governance Access Reviews History Definitions Create Instances",
					"action": "Create new navigation property to instances for identityGovernance",
					"description": "Create new navigation property to instances for identityGovernance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityGovernance/accessReviews/historyDefinitions/{{$parameter[\"accessReviewHistoryDefinition-id\"]}}/instances"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews History Definitions Delete Instances",
					"value": "Identity Governance Access Reviews History Definitions Delete Instances",
					"action": "Delete navigation property instances for identityGovernance",
					"description": "Delete navigation property instances for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/historyDefinitions/{{$parameter[\"accessReviewHistoryDefinition-id\"]}}/instances/{{$parameter[\"accessReviewHistoryInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews History Definitions Get Instances",
					"value": "Identity Governance Access Reviews History Definitions Get Instances",
					"action": "Get instances from identityGovernance",
					"description": "If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that does not recur will have exactly one instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/historyDefinitions/{{$parameter[\"accessReviewHistoryDefinition-id\"]}}/instances/{{$parameter[\"accessReviewHistoryInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews History Definitions Update Instances",
					"value": "Identity Governance Access Reviews History Definitions Update Instances",
					"action": "Update the navigation property instances in identityGovernance",
					"description": "Update the navigation property instances in identityGovernance",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/historyDefinitions/{{$parameter[\"accessReviewHistoryDefinition-id\"]}}/instances/{{$parameter[\"accessReviewHistoryInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Delete Policy",
					"value": "Identity Governance Access Reviews Delete Policy",
					"action": "Delete navigation property policy for identityGovernance",
					"description": "Delete navigation property policy for identityGovernance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityGovernance/accessReviews/policy"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Get Policy",
					"value": "Identity Governance Access Reviews Get Policy",
					"action": "Get accessReviewPolicy",
					"description": "Read the properties and relationships of an accessReviewPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityGovernance/accessReviews/policy"
						}
					}
				},
				{
					"name": "Identity Governance Access Reviews Update Policy",
					"value": "Identity Governance Access Reviews Update Policy",
					"action": "Update accessReviewPolicy",
					"description": "Update the properties of an accessReviewPolicy object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityGovernance/accessReviews/policy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Delete Access Reviews"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Delete Access Reviews"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Get Access Reviews"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Get Access Reviews"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Get Access Reviews"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Update Access Reviews"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Update Access Reviews"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Delete Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Delete Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Delete Instance"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Delete Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Get Instance"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Get Instance"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Get Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Delete Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Delete Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions Delete Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Definition"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Definition"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Create Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Create Stages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Delete Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Delete Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Get Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Update Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Update Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Delete Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions Delete Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Decisions Instance Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Create Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Create Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Delete Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Delete Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Update Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Update Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions List Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Create Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Create Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Delete Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Delete Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Get Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Get Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Get Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Update Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Update Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/contactedReviewers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Delete Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/contactedReviewers/{accessReviewReviewer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Delete Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Delete Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Delete Instance"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Delete Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Get Instance"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Get Instance"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Get Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Delete Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Get Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Get Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Get Definition"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Get Definition"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance List Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Create Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Create Stages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Delete Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Delete Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Get Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Get Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Get Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Update Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Update Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Delete Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Delete Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Decisions Instance Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Definition"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Definition"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances List Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Create Stages"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Create Stages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Delete Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Delete Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Stages"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Get Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Update Stages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Update Stages"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Delete Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Delete Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Delete Instance"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Delete Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Get Instance"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Get Instance"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Get Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Update Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Create Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Delete Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Delete Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Contacted Reviewers"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/contactedReviewers/{accessReviewReviewer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Update Contacted Reviewers"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance List Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Create Decisions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Delete Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Delete Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Decisions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Update Decisions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions List Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Create Insights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Delete Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Get Insights"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/decisions/{accessReviewInstanceDecisionItem-id1}/insights/{governanceInsight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Decisions Update Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition-id}/instances/{accessReviewInstance-id}/stages/{accessReviewStage-id}/decisions/{accessReviewInstanceDecisionItem-id}/instance/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Definition"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Definition"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Definitions Instances Stages Decisions Instance Get Definition"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/historyDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews List History Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/historyDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Create History Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/historyDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Create History Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Delete History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Delete History Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get History Definitions"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get History Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Update History Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Update History Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions List Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions List Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions Create Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions Create Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions Delete Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions Delete Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions Get Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions Get Instances"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions Get Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions Update Instances"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition-id}/instances/{accessReviewHistoryInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews History Definitions Update Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityGovernance/accessReviews/policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Delete Policy"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Delete Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /identityGovernance/accessReviews/policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get Policy"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get Policy"
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
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Get Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Update Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityGovernance/accessReviews/policy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Governance Access Review Set"
					],
					"operation": [
						"Identity Governance Access Reviews Update Policy"
					]
				}
			}
		},
];

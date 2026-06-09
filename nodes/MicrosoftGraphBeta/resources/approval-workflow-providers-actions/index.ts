import type { INodeProperties } from 'n8n-workflow';

export const approvalWorkflowProvidersActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Actions"
					]
				}
			},
			"options": [
				{
					"name": "Approval Workflow Providers Approval Workflow Provider Business Flows Business Flow Record Decisions",
					"value": "Approval Workflow Providers Approval Workflow Provider Business Flows Business Flow Record Decisions",
					"action": "Invoke action recordDecisions",
					"description": "Invoke action recordDecisions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlows/{{$parameter[\"businessFlow-id\"]}}/microsoft.graph.recordDecisions"
						}
					}
				},
				{
					"name": "Approval Workflow Providers Approval Workflow Provider Business Flows With Requests Awaiting My Decision Business Flow Record Decisions",
					"value": "Approval Workflow Providers Approval Workflow Provider Business Flows With Requests Awaiting My Decision Business Flow Record Decisions",
					"action": "Invoke action recordDecisions",
					"description": "Invoke action recordDecisions",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/approvalWorkflowProviders/{{$parameter[\"approvalWorkflowProvider-id\"]}}/businessFlowsWithRequestsAwaitingMyDecision/{{$parameter[\"businessFlow-id\"]}}/microsoft.graph.recordDecisions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlows/{businessFlow-id}/microsoft.graph.recordDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Actions"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Business Flows Business Flow Record Decisions"
					]
				}
			}
		},
		{
			"displayName": "Justification",
			"name": "justification",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "justification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Actions"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Business Flows Business Flow Record Decisions"
					]
				}
			}
		},
		{
			"displayName": "Review Result",
			"name": "reviewResult",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reviewResult",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Actions"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Business Flows Business Flow Record Decisions"
					]
				}
			}
		},
		{
			"displayName": "POST /approvalWorkflowProviders/{approvalWorkflowProvider-id}/businessFlowsWithRequestsAwaitingMyDecision/{businessFlow-id}/microsoft.graph.recordDecisions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Actions"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Business Flows With Requests Awaiting My Decision Business Flow Record Decisions"
					]
				}
			}
		},
		{
			"displayName": "Justification",
			"name": "justification",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "justification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Actions"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Business Flows With Requests Awaiting My Decision Business Flow Record Decisions"
					]
				}
			}
		},
		{
			"displayName": "Review Result",
			"name": "reviewResult",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reviewResult",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Approval Workflow Providers Actions"
					],
					"operation": [
						"Approval Workflow Providers Approval Workflow Provider Business Flows With Requests Awaiting My Decision Business Flow Record Decisions"
					]
				}
			}
		},
];

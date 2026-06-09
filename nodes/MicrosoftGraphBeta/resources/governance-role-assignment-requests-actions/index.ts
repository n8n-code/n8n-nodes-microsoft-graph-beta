import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleAssignmentRequestsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Actions"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Assignment Requests Governance Role Assignment Request Cancel",
					"value": "Governance Role Assignment Requests Governance Role Assignment Request Cancel",
					"action": "Invoke action cancel",
					"description": "Invoke action cancel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Governance Role Assignment Requests Governance Role Assignment Request Update Request",
					"value": "Governance Role Assignment Requests Governance Role Assignment Request Update Request",
					"action": "Invoke action updateRequest",
					"description": "Invoke action updateRequest",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/microsoft.graph.updateRequest"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Actions"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/microsoft.graph.updateRequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Actions"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Assignment State",
			"name": "assignmentState",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "assignmentState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Actions"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Decision",
			"name": "decision",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "decision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Actions"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "reason",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Actions"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
		{
			"displayName": "Schedule",
			"name": "schedule",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "schedule",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Actions"
					],
					"operation": [
						"Governance Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
];

import type { INodeProperties } from 'n8n-workflow';

export const governanceResourcesActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Actions"
					]
				}
			},
			"options": [
				{
					"name": "Governance Resources Register",
					"value": "Governance Resources Register",
					"action": "Invoke action register",
					"description": "Invoke action register",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceResources/microsoft.graph.register"
						}
					}
				},
				{
					"name": "Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Cancel",
					"value": "Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Cancel",
					"action": "Invoke action cancel",
					"description": "Invoke action cancel",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/microsoft.graph.cancel"
						}
					}
				},
				{
					"name": "Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request",
					"value": "Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request",
					"action": "Invoke action updateRequest",
					"description": "Invoke action updateRequest",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/governanceResources/{{$parameter[\"governanceResource-id\"]}}/roleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/microsoft.graph.updateRequest"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /governanceResources/microsoft.graph.register",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Actions"
					],
					"operation": [
						"Governance Resources Register"
					]
				}
			}
		},
		{
			"displayName": "External Id",
			"name": "externalId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "externalId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Actions"
					],
					"operation": [
						"Governance Resources Register"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/microsoft.graph.cancel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Actions"
					],
					"operation": [
						"Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Cancel"
					]
				}
			}
		},
		{
			"displayName": "POST /governanceResources/{governanceResource-id}/roleAssignmentRequests/{governanceRoleAssignmentRequest-id}/microsoft.graph.updateRequest",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Resources Actions"
					],
					"operation": [
						"Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
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
						"Governance Resources Actions"
					],
					"operation": [
						"Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
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
						"Governance Resources Actions"
					],
					"operation": [
						"Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
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
						"Governance Resources Actions"
					],
					"operation": [
						"Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
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
						"Governance Resources Actions"
					],
					"operation": [
						"Governance Resources Governance Resource Role Assignment Requests Governance Role Assignment Request Update Request"
					]
				}
			}
		},
];

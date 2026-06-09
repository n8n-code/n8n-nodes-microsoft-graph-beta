import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleAssignmentRequestsGovernanceResourceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Resource"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Assignment Requests Get Resource",
					"value": "Governance Role Assignment Requests Get Resource",
					"action": "Get resource from governanceRoleAssignmentRequests",
					"description": "Read-only. The resource that the request aims to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignmentRequests/{{$parameter[\"governanceRoleAssignmentRequest-id\"]}}/resource"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceRoleAssignmentRequests/{governanceRoleAssignmentRequest-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignment Requests Governance Resource"
					],
					"operation": [
						"Governance Role Assignment Requests Get Resource"
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
						"Governance Role Assignment Requests Governance Resource"
					],
					"operation": [
						"Governance Role Assignment Requests Get Resource"
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
						"Governance Role Assignment Requests Governance Resource"
					],
					"operation": [
						"Governance Role Assignment Requests Get Resource"
					]
				}
			}
		},
];

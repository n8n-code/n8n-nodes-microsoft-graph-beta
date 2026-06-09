import type { INodeProperties } from 'n8n-workflow';

export const privilegedApprovalPrivilegedRoleAssignmentRequestDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Approval Privileged Role Assignment Request"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Approval Get Request",
					"value": "Privileged Approval Get Request",
					"action": "Get request from privilegedApproval",
					"description": "Read-only. The role assignment request for this approval object",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedApproval/{{$parameter[\"privilegedApproval-id\"]}}/request"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedApproval/{privilegedApproval-id}/request",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Approval Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Approval Get Request"
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
						"Privileged Approval Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Approval Get Request"
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
						"Privileged Approval Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Approval Get Request"
					]
				}
			}
		},
];

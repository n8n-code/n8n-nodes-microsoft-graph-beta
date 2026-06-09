import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleAssignmentsGovernanceResourceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Resource"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Assignments Get Resource",
					"value": "Governance Role Assignments Get Resource",
					"action": "Get resource from governanceRoleAssignments",
					"description": "Read-only. The resource associated with the role assignment.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleAssignments/{{$parameter[\"governanceRoleAssignment-id\"]}}/resource"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceRoleAssignments/{governanceRoleAssignment-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Assignments Governance Resource"
					],
					"operation": [
						"Governance Role Assignments Get Resource"
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
						"Governance Role Assignments Governance Resource"
					],
					"operation": [
						"Governance Role Assignments Get Resource"
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
						"Governance Role Assignments Governance Resource"
					],
					"operation": [
						"Governance Role Assignments Get Resource"
					]
				}
			}
		},
];

import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleSettingsGovernanceResourceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Resource"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Settings Get Resource",
					"value": "Governance Role Settings Get Resource",
					"action": "Get resource from governanceRoleSettings",
					"description": "Read-only. The associated resource for this role setting.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleSettings/{{$parameter[\"governanceRoleSetting-id\"]}}/resource"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceRoleSettings/{governanceRoleSetting-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Settings Governance Resource"
					],
					"operation": [
						"Governance Role Settings Get Resource"
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
						"Governance Role Settings Governance Resource"
					],
					"operation": [
						"Governance Role Settings Get Resource"
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
						"Governance Role Settings Governance Resource"
					],
					"operation": [
						"Governance Role Settings Get Resource"
					]
				}
			}
		},
];

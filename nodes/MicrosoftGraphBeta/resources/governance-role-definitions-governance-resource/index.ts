import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleDefinitionsGovernanceResourceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Definitions Governance Resource"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Definitions Get Resource",
					"value": "Governance Role Definitions Get Resource",
					"action": "Get resource from governanceRoleDefinitions",
					"description": "Read-only. The associated resource for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}/resource"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Definitions Governance Resource"
					],
					"operation": [
						"Governance Role Definitions Get Resource"
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
						"Governance Role Definitions Governance Resource"
					],
					"operation": [
						"Governance Role Definitions Get Resource"
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
						"Governance Role Definitions Governance Resource"
					],
					"operation": [
						"Governance Role Definitions Get Resource"
					]
				}
			}
		},
];

import type { INodeProperties } from 'n8n-workflow';

export const governanceRoleDefinitionsGovernanceRoleSettingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Definitions Governance Role Setting"
					]
				}
			},
			"options": [
				{
					"name": "Governance Role Definitions Get Role Setting",
					"value": "Governance Role Definitions Get Role Setting",
					"action": "Get roleSetting from governanceRoleDefinitions",
					"description": "The associated role setting for the role definition.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/governanceRoleDefinitions/{{$parameter[\"governanceRoleDefinition-id\"]}}/roleSetting"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /governanceRoleDefinitions/{governanceRoleDefinition-id}/roleSetting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Governance Role Definitions Governance Role Setting"
					],
					"operation": [
						"Governance Role Definitions Get Role Setting"
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
						"Governance Role Definitions Governance Role Setting"
					],
					"operation": [
						"Governance Role Definitions Get Role Setting"
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
						"Governance Role Definitions Governance Role Setting"
					],
					"operation": [
						"Governance Role Definitions Get Role Setting"
					]
				}
			}
		},
];

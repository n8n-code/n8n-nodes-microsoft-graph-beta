import type { INodeProperties } from 'n8n-workflow';

export const officeConfigurationActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Actions"
					]
				}
			},
			"options": [
				{
					"name": "Office Configuration Client Configurations Update Priorities",
					"value": "Office Configuration Client Configurations Update Priorities",
					"action": "Invoke action updatePriorities",
					"description": "Invoke action updatePriorities",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/officeConfiguration/clientConfigurations/microsoft.graph.updatePriorities"
						}
					}
				},
				{
					"name": "Office Configuration Client Configurations Office Client Configuration Assign",
					"value": "Office Configuration Client Configurations Office Client Configuration Assign",
					"action": "Invoke action assign",
					"description": "Invoke action assign",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/officeConfiguration/clientConfigurations/{{$parameter[\"officeClientConfiguration-id\"]}}/microsoft.graph.assign"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /officeConfiguration/clientConfigurations/microsoft.graph.updatePriorities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Actions"
					],
					"operation": [
						"Office Configuration Client Configurations Update Priorities"
					]
				}
			}
		},
		{
			"displayName": "Office Configuration Policy Ids",
			"name": "officeConfigurationPolicyIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "officeConfigurationPolicyIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Actions"
					],
					"operation": [
						"Office Configuration Client Configurations Update Priorities"
					]
				}
			}
		},
		{
			"displayName": "Office Configuration Priorities",
			"name": "officeConfigurationPriorities",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "officeConfigurationPriorities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Actions"
					],
					"operation": [
						"Office Configuration Client Configurations Update Priorities"
					]
				}
			}
		},
		{
			"displayName": "POST /officeConfiguration/clientConfigurations/{officeClientConfiguration-id}/microsoft.graph.assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Actions"
					],
					"operation": [
						"Office Configuration Client Configurations Office Client Configuration Assign"
					]
				}
			}
		},
		{
			"displayName": "Office Configuration Assignments",
			"name": "officeConfigurationAssignments",
			"type": "json",
			"default": "[\n  {\n    \"target\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "officeConfigurationAssignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Office Configuration Actions"
					],
					"operation": [
						"Office Configuration Client Configurations Office Client Configuration Assign"
					]
				}
			}
		},
];

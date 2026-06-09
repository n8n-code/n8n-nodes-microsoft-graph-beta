import type { INodeProperties } from 'n8n-workflow';

export const informationProtectionInformationProtectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Information Protection"
					]
				}
			},
			"options": [
				{
					"name": "Information Protection Information Protection Get Information Protection",
					"value": "Information Protection Information Protection Get Information Protection",
					"action": "Get informationProtection",
					"description": "Get informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection"
						}
					}
				},
				{
					"name": "Information Protection Information Protection Update Information Protection",
					"value": "Information Protection Information Protection Update Information Protection",
					"action": "Update informationProtection",
					"description": "Update informationProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/informationProtection"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Information Protection"
					],
					"operation": [
						"Information Protection Information Protection Get Information Protection"
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
						"Information Protection Information Protection"
					],
					"operation": [
						"Information Protection Information Protection Get Information Protection"
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
						"Information Protection Information Protection"
					],
					"operation": [
						"Information Protection Information Protection Get Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Information Protection"
					],
					"operation": [
						"Information Protection Information Protection Update Information Protection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Information Protection"
					],
					"operation": [
						"Information Protection Information Protection Update Information Protection"
					]
				}
			}
		},
];

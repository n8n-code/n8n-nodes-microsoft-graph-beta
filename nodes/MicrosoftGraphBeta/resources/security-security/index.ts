import type { INodeProperties } from 'n8n-workflow';

export const securitySecurityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Security"
					]
				}
			},
			"options": [
				{
					"name": "Security Security Get Security",
					"value": "Security Security Get Security",
					"action": "Get security",
					"description": "Get security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security"
						}
					}
				},
				{
					"name": "Security Security Update Security",
					"value": "Security Security Update Security",
					"action": "Update security",
					"description": "Update security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Security"
					],
					"operation": [
						"Security Security Get Security"
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
						"Security Security"
					],
					"operation": [
						"Security Security Get Security"
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
						"Security Security"
					],
					"operation": [
						"Security Security Get Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Security"
					],
					"operation": [
						"Security Security Update Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Security"
					],
					"operation": [
						"Security Security Update Security"
					]
				}
			}
		},
];

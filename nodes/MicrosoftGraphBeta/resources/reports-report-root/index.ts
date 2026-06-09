import type { INodeProperties } from 'n8n-workflow';

export const reportsReportRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Report Root"
					]
				}
			},
			"options": [
				{
					"name": "Reports Report Root Get Report Root",
					"value": "Reports Report Root Get Report Root",
					"action": "Get reports",
					"description": "Get reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports"
						}
					}
				},
				{
					"name": "Reports Report Root Update Report Root",
					"value": "Reports Report Root Update Report Root",
					"action": "Update reports",
					"description": "Update reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Report Root"
					],
					"operation": [
						"Reports Report Root Get Report Root"
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
						"Reports Report Root"
					],
					"operation": [
						"Reports Report Root Get Report Root"
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
						"Reports Report Root"
					],
					"operation": [
						"Reports Report Root Get Report Root"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Report Root"
					],
					"operation": [
						"Reports Report Root Update Report Root"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Report Root"
					],
					"operation": [
						"Reports Report Root Update Report Root"
					]
				}
			}
		},
];

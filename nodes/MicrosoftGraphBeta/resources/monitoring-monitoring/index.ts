import type { INodeProperties } from 'n8n-workflow';

export const monitoringMonitoringDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Monitoring"
					]
				}
			},
			"options": [
				{
					"name": "Monitoring Monitoring Get Monitoring",
					"value": "Monitoring Monitoring Get Monitoring",
					"action": "Get monitoring",
					"description": "Get monitoring",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/monitoring"
						}
					}
				},
				{
					"name": "Monitoring Monitoring Update Monitoring",
					"value": "Monitoring Monitoring Update Monitoring",
					"action": "Update monitoring",
					"description": "Update monitoring",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/monitoring"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /monitoring",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Monitoring"
					],
					"operation": [
						"Monitoring Monitoring Get Monitoring"
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
						"Monitoring Monitoring"
					],
					"operation": [
						"Monitoring Monitoring Get Monitoring"
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
						"Monitoring Monitoring"
					],
					"operation": [
						"Monitoring Monitoring Get Monitoring"
					]
				}
			}
		},
		{
			"displayName": "PATCH /monitoring",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Monitoring"
					],
					"operation": [
						"Monitoring Monitoring Update Monitoring"
					]
				}
			}
		},
		{
			"displayName": "PATCH /monitoring<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Monitoring"
					],
					"operation": [
						"Monitoring Monitoring Update Monitoring"
					]
				}
			}
		},
];

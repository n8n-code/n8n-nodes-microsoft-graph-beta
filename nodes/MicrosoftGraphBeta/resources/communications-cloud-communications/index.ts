import type { INodeProperties } from 'n8n-workflow';

export const communicationsCloudCommunicationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Cloud Communications"
					]
				}
			},
			"options": [
				{
					"name": "Communications Cloud Communications Get Cloud Communications",
					"value": "Communications Cloud Communications Get Cloud Communications",
					"action": "Get communications",
					"description": "Get communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications"
						}
					}
				},
				{
					"name": "Communications Cloud Communications Update Cloud Communications",
					"value": "Communications Cloud Communications Update Cloud Communications",
					"action": "Update communications",
					"description": "Update communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /communications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Cloud Communications"
					],
					"operation": [
						"Communications Cloud Communications Get Cloud Communications"
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
						"Communications Cloud Communications"
					],
					"operation": [
						"Communications Cloud Communications Get Cloud Communications"
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
						"Communications Cloud Communications"
					],
					"operation": [
						"Communications Cloud Communications Get Cloud Communications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Cloud Communications"
					],
					"operation": [
						"Communications Cloud Communications Update Cloud Communications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Cloud Communications"
					],
					"operation": [
						"Communications Cloud Communications Update Cloud Communications"
					]
				}
			}
		},
];

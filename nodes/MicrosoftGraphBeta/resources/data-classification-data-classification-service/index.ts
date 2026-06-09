import type { INodeProperties } from 'n8n-workflow';

export const dataClassificationDataClassificationServiceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Data Classification Service"
					]
				}
			},
			"options": [
				{
					"name": "Data Classification Data Classification Service Get Data Classification Service",
					"value": "Data Classification Data Classification Service Get Data Classification Service",
					"action": "Get dataClassification",
					"description": "Get dataClassification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dataClassification"
						}
					}
				},
				{
					"name": "Data Classification Data Classification Service Update Data Classification Service",
					"value": "Data Classification Data Classification Service Update Data Classification Service",
					"action": "Update dataClassification",
					"description": "Update dataClassification",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dataClassification"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dataClassification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Data Classification Service"
					],
					"operation": [
						"Data Classification Data Classification Service Get Data Classification Service"
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
						"Data Classification Data Classification Service"
					],
					"operation": [
						"Data Classification Data Classification Service Get Data Classification Service"
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
						"Data Classification Data Classification Service"
					],
					"operation": [
						"Data Classification Data Classification Service Get Data Classification Service"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Data Classification Service"
					],
					"operation": [
						"Data Classification Data Classification Service Update Data Classification Service"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dataClassification<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Classification Data Classification Service"
					],
					"operation": [
						"Data Classification Data Classification Service Update Data Classification Service"
					]
				}
			}
		},
];

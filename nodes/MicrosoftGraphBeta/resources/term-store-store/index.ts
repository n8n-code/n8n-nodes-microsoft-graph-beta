import type { INodeProperties } from 'n8n-workflow';

export const termStoreStoreDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Store"
					]
				}
			},
			"options": [
				{
					"name": "Term Store Store Get Store",
					"value": "Term Store Store Get Store",
					"action": "Get store",
					"description": "Read the properties and relationships of a store object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/termStore"
						}
					}
				},
				{
					"name": "Term Store Store Update Store",
					"value": "Term Store Store Update Store",
					"action": "Update store",
					"description": "Update the properties of a store object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/termStore"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /termStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Store"
					],
					"operation": [
						"Term Store Store Get Store"
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
						"Term Store Store"
					],
					"operation": [
						"Term Store Store Get Store"
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
						"Term Store Store"
					],
					"operation": [
						"Term Store Store Get Store"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Store"
					],
					"operation": [
						"Term Store Store Update Store"
					]
				}
			}
		},
		{
			"displayName": "PATCH /termStore<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Term Store Store"
					],
					"operation": [
						"Term Store Store Update Store"
					]
				}
			}
		},
];

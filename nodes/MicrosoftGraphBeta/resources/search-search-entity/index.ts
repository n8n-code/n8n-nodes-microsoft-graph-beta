import type { INodeProperties } from 'n8n-workflow';

export const searchSearchEntityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search Search Entity"
					]
				}
			},
			"options": [
				{
					"name": "Search Search Entity Get Search Entity",
					"value": "Search Search Entity Get Search Entity",
					"action": "Get search",
					"description": "Get search",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search"
						}
					}
				},
				{
					"name": "Search Search Entity Update Search Entity",
					"value": "Search Search Entity Update Search Entity",
					"action": "Update search",
					"description": "Update search",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/search"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Search Entity"
					],
					"operation": [
						"Search Search Entity Get Search Entity"
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
						"Search Search Entity"
					],
					"operation": [
						"Search Search Entity Get Search Entity"
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
						"Search Search Entity"
					],
					"operation": [
						"Search Search Entity Get Search Entity"
					]
				}
			}
		},
		{
			"displayName": "PATCH /search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Search Entity"
					],
					"operation": [
						"Search Search Entity Update Search Entity"
					]
				}
			}
		},
		{
			"displayName": "PATCH /search<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Search Entity"
					],
					"operation": [
						"Search Search Entity Update Search Entity"
					]
				}
			}
		},
];

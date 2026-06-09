import type { INodeProperties } from 'n8n-workflow';

export const storageStorageDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Storage"
					]
				}
			},
			"options": [
				{
					"name": "Storage Storage Get Storage",
					"value": "Storage Storage Get Storage",
					"action": "Get storage",
					"description": "Get storage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/storage"
						}
					}
				},
				{
					"name": "Storage Storage Update Storage",
					"value": "Storage Storage Update Storage",
					"action": "Update storage",
					"description": "Update storage",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/storage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /storage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Storage"
					],
					"operation": [
						"Storage Storage Get Storage"
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
						"Storage Storage"
					],
					"operation": [
						"Storage Storage Get Storage"
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
						"Storage Storage"
					],
					"operation": [
						"Storage Storage Get Storage"
					]
				}
			}
		},
		{
			"displayName": "PATCH /storage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Storage"
					],
					"operation": [
						"Storage Storage Update Storage"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage Storage"
					],
					"operation": [
						"Storage Storage Update Storage"
					]
				}
			}
		},
];

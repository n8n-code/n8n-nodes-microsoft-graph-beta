import type { INodeProperties } from 'n8n-workflow';

export const directoryDirectoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory"
					]
				}
			},
			"options": [
				{
					"name": "Directory Directory Get Directory",
					"value": "Directory Directory Get Directory",
					"action": "Get directory",
					"description": "Get directory",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/directory"
						}
					}
				},
				{
					"name": "Directory Directory Update Directory",
					"value": "Directory Directory Update Directory",
					"action": "Update directory",
					"description": "Update directory",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/directory"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /directory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory"
					],
					"operation": [
						"Directory Directory Get Directory"
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
						"Directory Directory"
					],
					"operation": [
						"Directory Directory Get Directory"
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
						"Directory Directory"
					],
					"operation": [
						"Directory Directory Get Directory"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory"
					],
					"operation": [
						"Directory Directory Update Directory"
					]
				}
			}
		},
		{
			"displayName": "PATCH /directory<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Directory Directory"
					],
					"operation": [
						"Directory Directory Update Directory"
					]
				}
			}
		},
];

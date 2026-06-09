import type { INodeProperties } from 'n8n-workflow';

export const sharesListItemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List Item"
					]
				}
			},
			"options": [
				{
					"name": "Shares Get List Item",
					"value": "Shares Get List Item",
					"action": "Get listItem from shares",
					"description": "Used to access the underlying listItem",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/listItem"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/listItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares List Item"
					],
					"operation": [
						"Shares Get List Item"
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
						"Shares List Item"
					],
					"operation": [
						"Shares Get List Item"
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
						"Shares List Item"
					],
					"operation": [
						"Shares Get List Item"
					]
				}
			}
		},
];

import type { INodeProperties } from 'n8n-workflow';

export const sharesSiteDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Site"
					]
				}
			},
			"options": [
				{
					"name": "Shares Get Site",
					"value": "Shares Get Site",
					"action": "Get site from shares",
					"description": "Used to access the underlying site",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/site"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/site",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Site"
					],
					"operation": [
						"Shares Get Site"
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
						"Shares Site"
					],
					"operation": [
						"Shares Get Site"
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
						"Shares Site"
					],
					"operation": [
						"Shares Get Site"
					]
				}
			}
		},
];

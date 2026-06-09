import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementWindowsManagementAppDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Management App"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management Get Windows Management App",
					"value": "Device App Management Get Windows Management App",
					"action": "Get windowsManagementApp from deviceAppManagement",
					"description": "Windows management app.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/windowsManagementApp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement/windowsManagementApp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Windows Management App"
					],
					"operation": [
						"Device App Management Get Windows Management App"
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
						"Device App Management Windows Management App"
					],
					"operation": [
						"Device App Management Get Windows Management App"
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
						"Device App Management Windows Management App"
					],
					"operation": [
						"Device App Management Get Windows Management App"
					]
				}
			}
		},
];

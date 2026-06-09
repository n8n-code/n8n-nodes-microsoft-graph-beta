import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementDeviceAppManagementDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management Device App Management Get Device App Management",
					"value": "Device App Management Device App Management Get Device App Management",
					"action": "Get deviceAppManagement",
					"description": "Get deviceAppManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement"
						}
					}
				},
				{
					"name": "Device App Management Device App Management Update Device App Management",
					"value": "Device App Management Device App Management Update Device App Management",
					"action": "Update deviceAppManagement",
					"description": "Update deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceAppManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management"
					],
					"operation": [
						"Device App Management Device App Management Get Device App Management"
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
						"Device App Management Device App Management"
					],
					"operation": [
						"Device App Management Device App Management Get Device App Management"
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
						"Device App Management Device App Management"
					],
					"operation": [
						"Device App Management Device App Management Get Device App Management"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management"
					],
					"operation": [
						"Device App Management Device App Management Update Device App Management"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Device App Management"
					],
					"operation": [
						"Device App Management Device App Management Update Device App Management"
					]
				}
			}
		},
];

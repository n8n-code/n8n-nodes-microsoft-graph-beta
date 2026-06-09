import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Device Management Get Device Management",
					"value": "Device Management Device Management Get Device Management",
					"action": "Get deviceManagement",
					"description": "Get deviceManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement"
						}
					}
				},
				{
					"name": "Device Management Device Management Update Device Management",
					"value": "Device Management Device Management Update Device Management",
					"action": "Update deviceManagement",
					"description": "Update deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management"
					],
					"operation": [
						"Device Management Device Management Get Device Management"
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
						"Device Management Device Management"
					],
					"operation": [
						"Device Management Device Management Get Device Management"
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
						"Device Management Device Management"
					],
					"operation": [
						"Device Management Device Management Get Device Management"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management"
					],
					"operation": [
						"Device Management Device Management Update Device Management"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management"
					],
					"operation": [
						"Device Management Device Management Update Device Management"
					]
				}
			}
		},
];

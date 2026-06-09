import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementManagedDeviceOverviewDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Overview"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Get Managed Device Overview",
					"value": "Device Management Get Managed Device Overview",
					"action": "Get managedDeviceOverview from deviceManagement",
					"description": "Device overview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDeviceOverview"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/managedDeviceOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Overview"
					],
					"operation": [
						"Device Management Get Managed Device Overview"
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
						"Device Management Managed Device Overview"
					],
					"operation": [
						"Device Management Get Managed Device Overview"
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
						"Device Management Managed Device Overview"
					],
					"operation": [
						"Device Management Get Managed Device Overview"
					]
				}
			}
		},
];

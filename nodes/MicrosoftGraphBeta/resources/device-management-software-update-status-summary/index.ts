import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementSoftwareUpdateStatusSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Software Update Status Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Get Software Update Status Summary",
					"value": "Device Management Get Software Update Status Summary",
					"action": "Get softwareUpdateStatusSummary from deviceManagement",
					"description": "The software update status summary.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/softwareUpdateStatusSummary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/softwareUpdateStatusSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Software Update Status Summary"
					],
					"operation": [
						"Device Management Get Software Update Status Summary"
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
						"Device Management Software Update Status Summary"
					],
					"operation": [
						"Device Management Get Software Update Status Summary"
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
						"Device Management Software Update Status Summary"
					],
					"operation": [
						"Device Management Get Software Update Status Summary"
					]
				}
			}
		},
];

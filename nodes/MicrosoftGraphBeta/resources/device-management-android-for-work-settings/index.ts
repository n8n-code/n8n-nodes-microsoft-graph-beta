import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementAndroidForWorkSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Settings"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Android For Work Settings",
					"value": "Device Management Delete Android For Work Settings",
					"action": "Delete navigation property androidForWorkSettings for deviceManagement",
					"description": "Delete navigation property androidForWorkSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/androidForWorkSettings"
						}
					}
				},
				{
					"name": "Device Management Get Android For Work Settings",
					"value": "Device Management Get Android For Work Settings",
					"action": "Get androidForWorkSettings from deviceManagement",
					"description": "The singleton Android for Work settings entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidForWorkSettings"
						}
					}
				},
				{
					"name": "Device Management Update Android For Work Settings",
					"value": "Device Management Update Android For Work Settings",
					"action": "Update the navigation property androidForWorkSettings in deviceManagement",
					"description": "Update the navigation property androidForWorkSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/androidForWorkSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/androidForWorkSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Settings"
					],
					"operation": [
						"Device Management Delete Android For Work Settings"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Settings"
					],
					"operation": [
						"Device Management Delete Android For Work Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/androidForWorkSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Settings"
					],
					"operation": [
						"Device Management Get Android For Work Settings"
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
						"Device Management Android For Work Settings"
					],
					"operation": [
						"Device Management Get Android For Work Settings"
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
						"Device Management Android For Work Settings"
					],
					"operation": [
						"Device Management Get Android For Work Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidForWorkSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Settings"
					],
					"operation": [
						"Device Management Update Android For Work Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidForWorkSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work Settings"
					],
					"operation": [
						"Device Management Update Android For Work Settings"
					]
				}
			}
		},
];

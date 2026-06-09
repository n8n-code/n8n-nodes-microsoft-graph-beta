import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementRemoteAssistanceSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Settings"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Remote Assistance Settings",
					"value": "Device Management Delete Remote Assistance Settings",
					"action": "Delete navigation property remoteAssistanceSettings for deviceManagement",
					"description": "Delete navigation property remoteAssistanceSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/remoteAssistanceSettings"
						}
					}
				},
				{
					"name": "Device Management Get Remote Assistance Settings",
					"value": "Device Management Get Remote Assistance Settings",
					"action": "Get remoteAssistanceSettings from deviceManagement",
					"description": "The remote assistance settings singleton",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/remoteAssistanceSettings"
						}
					}
				},
				{
					"name": "Device Management Update Remote Assistance Settings",
					"value": "Device Management Update Remote Assistance Settings",
					"action": "Update the navigation property remoteAssistanceSettings in deviceManagement",
					"description": "Update the navigation property remoteAssistanceSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/remoteAssistanceSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/remoteAssistanceSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Settings"
					],
					"operation": [
						"Device Management Delete Remote Assistance Settings"
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
						"Device Management Remote Assistance Settings"
					],
					"operation": [
						"Device Management Delete Remote Assistance Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/remoteAssistanceSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Settings"
					],
					"operation": [
						"Device Management Get Remote Assistance Settings"
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
						"Device Management Remote Assistance Settings"
					],
					"operation": [
						"Device Management Get Remote Assistance Settings"
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
						"Device Management Remote Assistance Settings"
					],
					"operation": [
						"Device Management Get Remote Assistance Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/remoteAssistanceSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Settings"
					],
					"operation": [
						"Device Management Update Remote Assistance Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/remoteAssistanceSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Settings"
					],
					"operation": [
						"Device Management Update Remote Assistance Settings"
					]
				}
			}
		},
];

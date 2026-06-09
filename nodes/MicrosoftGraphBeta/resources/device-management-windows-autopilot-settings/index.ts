import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementWindowsAutopilotSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Settings"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Windows Autopilot Settings",
					"value": "Device Management Delete Windows Autopilot Settings",
					"action": "Delete navigation property windowsAutopilotSettings for deviceManagement",
					"description": "Delete navigation property windowsAutopilotSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsAutopilotSettings"
						}
					}
				},
				{
					"name": "Device Management Get Windows Autopilot Settings",
					"value": "Device Management Get Windows Autopilot Settings",
					"action": "Get windowsAutopilotSettings from deviceManagement",
					"description": "The Windows autopilot account settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsAutopilotSettings"
						}
					}
				},
				{
					"name": "Device Management Update Windows Autopilot Settings",
					"value": "Device Management Update Windows Autopilot Settings",
					"action": "Update the navigation property windowsAutopilotSettings in deviceManagement",
					"description": "Update the navigation property windowsAutopilotSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsAutopilotSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/windowsAutopilotSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Settings"
					],
					"operation": [
						"Device Management Delete Windows Autopilot Settings"
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
						"Device Management Windows Autopilot Settings"
					],
					"operation": [
						"Device Management Delete Windows Autopilot Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsAutopilotSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Settings"
					],
					"operation": [
						"Device Management Get Windows Autopilot Settings"
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
						"Device Management Windows Autopilot Settings"
					],
					"operation": [
						"Device Management Get Windows Autopilot Settings"
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
						"Device Management Windows Autopilot Settings"
					],
					"operation": [
						"Device Management Get Windows Autopilot Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Settings"
					],
					"operation": [
						"Device Management Update Windows Autopilot Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsAutopilotSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Autopilot Settings"
					],
					"operation": [
						"Device Management Update Windows Autopilot Settings"
					]
				}
			}
		},
];

import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceConfigurationDeviceStateSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Device State Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Device Configuration Device State Summaries",
					"value": "Device Management Delete Device Configuration Device State Summaries",
					"action": "Delete navigation property deviceConfigurationDeviceStateSummaries for deviceManagement",
					"description": "Delete navigation property deviceConfigurationDeviceStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurationDeviceStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Get Device Configuration Device State Summaries",
					"value": "Device Management Get Device Configuration Device State Summaries",
					"action": "Get deviceConfigurationDeviceStateSummaries from deviceManagement",
					"description": "The device configuration device state summary for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurationDeviceStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Update Device Configuration Device State Summaries",
					"value": "Device Management Update Device Configuration Device State Summaries",
					"action": "Update the navigation property deviceConfigurationDeviceStateSummaries in deviceManagement",
					"description": "Update the navigation property deviceConfigurationDeviceStateSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurationDeviceStateSummaries"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurationDeviceStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Device State Summary"
					],
					"operation": [
						"Device Management Delete Device Configuration Device State Summaries"
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
						"Device Management Device Configuration Device State Summary"
					],
					"operation": [
						"Device Management Delete Device Configuration Device State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurationDeviceStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Device State Summary"
					],
					"operation": [
						"Device Management Get Device Configuration Device State Summaries"
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
						"Device Management Device Configuration Device State Summary"
					],
					"operation": [
						"Device Management Get Device Configuration Device State Summaries"
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
						"Device Management Device Configuration Device State Summary"
					],
					"operation": [
						"Device Management Get Device Configuration Device State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Device State Summary"
					],
					"operation": [
						"Device Management Update Device Configuration Device State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationDeviceStateSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration Device State Summary"
					],
					"operation": [
						"Device Management Update Device Configuration Device State Summaries"
					]
				}
			}
		},
];

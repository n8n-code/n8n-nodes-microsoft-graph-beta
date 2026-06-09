import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceConfigurationUserStateSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration User State Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Device Configuration User State Summaries",
					"value": "Device Management Delete Device Configuration User State Summaries",
					"action": "Delete navigation property deviceConfigurationUserStateSummaries for deviceManagement",
					"description": "Delete navigation property deviceConfigurationUserStateSummaries for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurationUserStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Get Device Configuration User State Summaries",
					"value": "Device Management Get Device Configuration User State Summaries",
					"action": "Get deviceConfigurationUserStateSummaries from deviceManagement",
					"description": "The device configuration user state summary for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurationUserStateSummaries"
						}
					}
				},
				{
					"name": "Device Management Update Device Configuration User State Summaries",
					"value": "Device Management Update Device Configuration User State Summaries",
					"action": "Update the navigation property deviceConfigurationUserStateSummaries in deviceManagement",
					"description": "Update the navigation property deviceConfigurationUserStateSummaries in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurationUserStateSummaries"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurationUserStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration User State Summary"
					],
					"operation": [
						"Device Management Delete Device Configuration User State Summaries"
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
						"Device Management Device Configuration User State Summary"
					],
					"operation": [
						"Device Management Delete Device Configuration User State Summaries"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurationUserStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration User State Summary"
					],
					"operation": [
						"Device Management Get Device Configuration User State Summaries"
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
						"Device Management Device Configuration User State Summary"
					],
					"operation": [
						"Device Management Get Device Configuration User State Summaries"
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
						"Device Management Device Configuration User State Summary"
					],
					"operation": [
						"Device Management Get Device Configuration User State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationUserStateSummaries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration User State Summary"
					],
					"operation": [
						"Device Management Update Device Configuration User State Summaries"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationUserStateSummaries<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Configuration User State Summary"
					],
					"operation": [
						"Device Management Update Device Configuration User State Summaries"
					]
				}
			}
		},
];

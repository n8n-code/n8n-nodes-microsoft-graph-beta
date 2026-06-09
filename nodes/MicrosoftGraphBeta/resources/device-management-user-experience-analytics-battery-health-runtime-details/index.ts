import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsBatteryHealthRuntimeDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Runtime Details"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete User Experience Analytics Battery Health Runtime Details",
					"value": "Device Management Delete User Experience Analytics Battery Health Runtime Details",
					"action": "Delete navigation property userExperienceAnalyticsBatteryHealthRuntimeDetails for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsBatteryHealthRuntimeDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Battery Health Runtime Details",
					"value": "Device Management Get User Experience Analytics Battery Health Runtime Details",
					"action": "Get userExperienceAnalyticsBatteryHealthRuntimeDetails from deviceManagement",
					"description": "User Experience Analytics Battery Health Runtime Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Battery Health Runtime Details",
					"value": "Device Management Update User Experience Analytics Battery Health Runtime Details",
					"action": "Update the navigation property userExperienceAnalyticsBatteryHealthRuntimeDetails in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsBatteryHealthRuntimeDetails in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Runtime Details"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Runtime Details"
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
						"Device Management User Experience Analytics Battery Health Runtime Details"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Runtime Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Runtime Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Runtime Details"
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
						"Device Management User Experience Analytics Battery Health Runtime Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Runtime Details"
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
						"Device Management User Experience Analytics Battery Health Runtime Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Runtime Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Runtime Details"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Runtime Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthRuntimeDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Runtime Details"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Runtime Details"
					]
				}
			}
		},
];

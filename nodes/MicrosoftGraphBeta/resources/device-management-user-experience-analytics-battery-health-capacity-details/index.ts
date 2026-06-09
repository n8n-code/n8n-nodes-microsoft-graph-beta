import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsBatteryHealthCapacityDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Capacity Details"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete User Experience Analytics Battery Health Capacity Details",
					"value": "Device Management Delete User Experience Analytics Battery Health Capacity Details",
					"action": "Delete navigation property userExperienceAnalyticsBatteryHealthCapacityDetails for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsBatteryHealthCapacityDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Battery Health Capacity Details",
					"value": "Device Management Get User Experience Analytics Battery Health Capacity Details",
					"action": "Get userExperienceAnalyticsBatteryHealthCapacityDetails from deviceManagement",
					"description": "User Experience Analytics Battery Health Capacity Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Battery Health Capacity Details",
					"value": "Device Management Update User Experience Analytics Battery Health Capacity Details",
					"action": "Update the navigation property userExperienceAnalyticsBatteryHealthCapacityDetails in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsBatteryHealthCapacityDetails in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Capacity Details"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Capacity Details"
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
						"Device Management User Experience Analytics Battery Health Capacity Details"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Battery Health Capacity Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Capacity Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Capacity Details"
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
						"Device Management User Experience Analytics Battery Health Capacity Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Capacity Details"
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
						"Device Management User Experience Analytics Battery Health Capacity Details"
					],
					"operation": [
						"Device Management Get User Experience Analytics Battery Health Capacity Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Capacity Details"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Capacity Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsBatteryHealthCapacityDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Battery Health Capacity Details"
					],
					"operation": [
						"Device Management Update User Experience Analytics Battery Health Capacity Details"
					]
				}
			}
		},
];

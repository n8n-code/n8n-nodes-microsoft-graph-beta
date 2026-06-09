import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsOverviewDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Overview"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete User Experience Analytics Overview",
					"value": "Device Management Delete User Experience Analytics Overview",
					"action": "Delete navigation property userExperienceAnalyticsOverview for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsOverview for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsOverview"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Overview",
					"value": "Device Management Get User Experience Analytics Overview",
					"action": "Get userExperienceAnalyticsOverview from deviceManagement",
					"description": "User experience analytics overview",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsOverview"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Overview",
					"value": "Device Management Update User Experience Analytics Overview",
					"action": "Update the navigation property userExperienceAnalyticsOverview in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsOverview in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsOverview"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Overview"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Overview"
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
						"Device Management User Experience Analytics Overview"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Overview"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Overview"
					],
					"operation": [
						"Device Management Get User Experience Analytics Overview"
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
						"Device Management User Experience Analytics Overview"
					],
					"operation": [
						"Device Management Get User Experience Analytics Overview"
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
						"Device Management User Experience Analytics Overview"
					],
					"operation": [
						"Device Management Get User Experience Analytics Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsOverview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Overview"
					],
					"operation": [
						"Device Management Update User Experience Analytics Overview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsOverview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Overview"
					],
					"operation": [
						"Device Management Update User Experience Analytics Overview"
					]
				}
			}
		},
];

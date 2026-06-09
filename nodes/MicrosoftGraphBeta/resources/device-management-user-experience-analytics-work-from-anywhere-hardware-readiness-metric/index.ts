import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete User Experience Analytics Work From Anywhere Hardware Readiness Metric",
					"value": "Device Management Delete User Experience Analytics Work From Anywhere Hardware Readiness Metric",
					"action": "Delete navigation property userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric for deviceManagement",
					"description": "Delete navigation property userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric"
						}
					}
				},
				{
					"name": "Device Management Get User Experience Analytics Work From Anywhere Hardware Readiness Metric",
					"value": "Device Management Get User Experience Analytics Work From Anywhere Hardware Readiness Metric",
					"action": "Get userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric from deviceManagement",
					"description": "User experience analytics work from anywhere hardware readiness metrics.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric"
						}
					}
				},
				{
					"name": "Device Management Update User Experience Analytics Work From Anywhere Hardware Readiness Metric",
					"value": "Device Management Update User Experience Analytics Work From Anywhere Hardware Readiness Metric",
					"action": "Update the navigation property userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric in deviceManagement",
					"description": "Update the navigation property userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Work From Anywhere Hardware Readiness Metric"
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
						"Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					],
					"operation": [
						"Device Management Delete User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					],
					"operation": [
						"Device Management Get User Experience Analytics Work From Anywhere Hardware Readiness Metric"
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
						"Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					],
					"operation": [
						"Device Management Get User Experience Analytics Work From Anywhere Hardware Readiness Metric"
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
						"Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					],
					"operation": [
						"Device Management Get User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					],
					"operation": [
						"Device Management Update User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/userExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					],
					"operation": [
						"Device Management Update User Experience Analytics Work From Anywhere Hardware Readiness Metric"
					]
				}
			}
		},
];

import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementOnPremisesConditionalAccessSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management On Premises Conditional Access Settings"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Conditional Access Settings",
					"value": "Device Management Delete Conditional Access Settings",
					"action": "Delete navigation property conditionalAccessSettings for deviceManagement",
					"description": "Delete navigation property conditionalAccessSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/conditionalAccessSettings"
						}
					}
				},
				{
					"name": "Device Management Get Conditional Access Settings",
					"value": "Device Management Get Conditional Access Settings",
					"action": "Get conditionalAccessSettings from deviceManagement",
					"description": "The Exchange on premises conditional access settings. On premises conditional access will require devices to be both enrolled and compliant for mail access",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/conditionalAccessSettings"
						}
					}
				},
				{
					"name": "Device Management Update Conditional Access Settings",
					"value": "Device Management Update Conditional Access Settings",
					"action": "Update the navigation property conditionalAccessSettings in deviceManagement",
					"description": "Update the navigation property conditionalAccessSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/conditionalAccessSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/conditionalAccessSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management On Premises Conditional Access Settings"
					],
					"operation": [
						"Device Management Delete Conditional Access Settings"
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
						"Device Management On Premises Conditional Access Settings"
					],
					"operation": [
						"Device Management Delete Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/conditionalAccessSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management On Premises Conditional Access Settings"
					],
					"operation": [
						"Device Management Get Conditional Access Settings"
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
						"Device Management On Premises Conditional Access Settings"
					],
					"operation": [
						"Device Management Get Conditional Access Settings"
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
						"Device Management On Premises Conditional Access Settings"
					],
					"operation": [
						"Device Management Get Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/conditionalAccessSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management On Premises Conditional Access Settings"
					],
					"operation": [
						"Device Management Update Conditional Access Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/conditionalAccessSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management On Premises Conditional Access Settings"
					],
					"operation": [
						"Device Management Update Conditional Access Settings"
					]
				}
			}
		},
];

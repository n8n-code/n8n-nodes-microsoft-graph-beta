import type { INodeProperties } from 'n8n-workflow';

export const informationProtectionSensitivityPolicySettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Policy Settings"
					]
				}
			},
			"options": [
				{
					"name": "Information Protection Delete Sensitivity Policy Settings",
					"value": "Information Protection Delete Sensitivity Policy Settings",
					"action": "Delete navigation property sensitivityPolicySettings for informationProtection",
					"description": "Delete navigation property sensitivityPolicySettings for informationProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/informationProtection/sensitivityPolicySettings"
						}
					}
				},
				{
					"name": "Information Protection Get Sensitivity Policy Settings",
					"value": "Information Protection Get Sensitivity Policy Settings",
					"action": "Get sensitivityPolicySettings from informationProtection",
					"description": "Get sensitivityPolicySettings from informationProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/informationProtection/sensitivityPolicySettings"
						}
					}
				},
				{
					"name": "Information Protection Update Sensitivity Policy Settings",
					"value": "Information Protection Update Sensitivity Policy Settings",
					"action": "Update the navigation property sensitivityPolicySettings in informationProtection",
					"description": "Update the navigation property sensitivityPolicySettings in informationProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/informationProtection/sensitivityPolicySettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /informationProtection/sensitivityPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Policy Settings"
					],
					"operation": [
						"Information Protection Delete Sensitivity Policy Settings"
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
						"Information Protection Sensitivity Policy Settings"
					],
					"operation": [
						"Information Protection Delete Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /informationProtection/sensitivityPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Policy Settings"
					],
					"operation": [
						"Information Protection Get Sensitivity Policy Settings"
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
						"Information Protection Sensitivity Policy Settings"
					],
					"operation": [
						"Information Protection Get Sensitivity Policy Settings"
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
						"Information Protection Sensitivity Policy Settings"
					],
					"operation": [
						"Information Protection Get Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/sensitivityPolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Policy Settings"
					],
					"operation": [
						"Information Protection Update Sensitivity Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /informationProtection/sensitivityPolicySettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information Protection Sensitivity Policy Settings"
					],
					"operation": [
						"Information Protection Update Sensitivity Policy Settings"
					]
				}
			}
		},
];

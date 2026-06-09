import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementAndroidManagedStoreAccountEnterpriseSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store Account Enterprise Settings"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Android Managed Store Account Enterprise Settings",
					"value": "Device Management Delete Android Managed Store Account Enterprise Settings",
					"action": "Delete navigation property androidManagedStoreAccountEnterpriseSettings for deviceManagement",
					"description": "Delete navigation property androidManagedStoreAccountEnterpriseSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings"
						}
					}
				},
				{
					"name": "Device Management Get Android Managed Store Account Enterprise Settings",
					"value": "Device Management Get Android Managed Store Account Enterprise Settings",
					"action": "Get androidManagedStoreAccountEnterpriseSettings from deviceManagement",
					"description": "The singleton Android managed store account enterprise settings entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings"
						}
					}
				},
				{
					"name": "Device Management Update Android Managed Store Account Enterprise Settings",
					"value": "Device Management Update Android Managed Store Account Enterprise Settings",
					"action": "Update the navigation property androidManagedStoreAccountEnterpriseSettings in deviceManagement",
					"description": "Update the navigation property androidManagedStoreAccountEnterpriseSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/androidManagedStoreAccountEnterpriseSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/androidManagedStoreAccountEnterpriseSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store Account Enterprise Settings"
					],
					"operation": [
						"Device Management Delete Android Managed Store Account Enterprise Settings"
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
						"Device Management Android Managed Store Account Enterprise Settings"
					],
					"operation": [
						"Device Management Delete Android Managed Store Account Enterprise Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/androidManagedStoreAccountEnterpriseSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store Account Enterprise Settings"
					],
					"operation": [
						"Device Management Get Android Managed Store Account Enterprise Settings"
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
						"Device Management Android Managed Store Account Enterprise Settings"
					],
					"operation": [
						"Device Management Get Android Managed Store Account Enterprise Settings"
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
						"Device Management Android Managed Store Account Enterprise Settings"
					],
					"operation": [
						"Device Management Get Android Managed Store Account Enterprise Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store Account Enterprise Settings"
					],
					"operation": [
						"Device Management Update Android Managed Store Account Enterprise Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidManagedStoreAccountEnterpriseSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store Account Enterprise Settings"
					],
					"operation": [
						"Device Management Update Android Managed Store Account Enterprise Settings"
					]
				}
			}
		},
];

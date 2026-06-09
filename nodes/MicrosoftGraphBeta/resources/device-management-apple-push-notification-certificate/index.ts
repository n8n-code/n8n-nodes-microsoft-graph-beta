import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementApplePushNotificationCertificateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple Push Notification Certificate"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Apple Push Notification Certificate",
					"value": "Device Management Delete Apple Push Notification Certificate",
					"action": "Delete navigation property applePushNotificationCertificate for deviceManagement",
					"description": "Delete navigation property applePushNotificationCertificate for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/applePushNotificationCertificate"
						}
					}
				},
				{
					"name": "Device Management Get Apple Push Notification Certificate",
					"value": "Device Management Get Apple Push Notification Certificate",
					"action": "Get applePushNotificationCertificate from deviceManagement",
					"description": "Apple push notification certificate.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/applePushNotificationCertificate"
						}
					}
				},
				{
					"name": "Device Management Update Apple Push Notification Certificate",
					"value": "Device Management Update Apple Push Notification Certificate",
					"action": "Update the navigation property applePushNotificationCertificate in deviceManagement",
					"description": "Update the navigation property applePushNotificationCertificate in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/applePushNotificationCertificate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/applePushNotificationCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple Push Notification Certificate"
					],
					"operation": [
						"Device Management Delete Apple Push Notification Certificate"
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
						"Device Management Apple Push Notification Certificate"
					],
					"operation": [
						"Device Management Delete Apple Push Notification Certificate"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/applePushNotificationCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple Push Notification Certificate"
					],
					"operation": [
						"Device Management Get Apple Push Notification Certificate"
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
						"Device Management Apple Push Notification Certificate"
					],
					"operation": [
						"Device Management Get Apple Push Notification Certificate"
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
						"Device Management Apple Push Notification Certificate"
					],
					"operation": [
						"Device Management Get Apple Push Notification Certificate"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/applePushNotificationCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple Push Notification Certificate"
					],
					"operation": [
						"Device Management Update Apple Push Notification Certificate"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/applePushNotificationCertificate<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Apple Push Notification Certificate"
					],
					"operation": [
						"Device Management Update Apple Push Notification Certificate"
					]
				}
			}
		},
];

import type { INodeProperties } from 'n8n-workflow';

export const deviceAppManagementSymantecCodeSigningCertificateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Symantec Code Signing Certificate"
					]
				}
			},
			"options": [
				{
					"name": "Device App Management Delete Symantec Code Signing Certificate",
					"value": "Device App Management Delete Symantec Code Signing Certificate",
					"action": "Delete navigation property symantecCodeSigningCertificate for deviceAppManagement",
					"description": "Delete navigation property symantecCodeSigningCertificate for deviceAppManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceAppManagement/symantecCodeSigningCertificate"
						}
					}
				},
				{
					"name": "Device App Management Get Symantec Code Signing Certificate",
					"value": "Device App Management Get Symantec Code Signing Certificate",
					"action": "Get symantecCodeSigningCertificate from deviceAppManagement",
					"description": "The WinPhone Symantec Code Signing Certificate.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceAppManagement/symantecCodeSigningCertificate"
						}
					}
				},
				{
					"name": "Device App Management Update Symantec Code Signing Certificate",
					"value": "Device App Management Update Symantec Code Signing Certificate",
					"action": "Update the navigation property symantecCodeSigningCertificate in deviceAppManagement",
					"description": "Update the navigation property symantecCodeSigningCertificate in deviceAppManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceAppManagement/symantecCodeSigningCertificate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceAppManagement/symantecCodeSigningCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Symantec Code Signing Certificate"
					],
					"operation": [
						"Device App Management Delete Symantec Code Signing Certificate"
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
						"Device App Management Symantec Code Signing Certificate"
					],
					"operation": [
						"Device App Management Delete Symantec Code Signing Certificate"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceAppManagement/symantecCodeSigningCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Symantec Code Signing Certificate"
					],
					"operation": [
						"Device App Management Get Symantec Code Signing Certificate"
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
						"Device App Management Symantec Code Signing Certificate"
					],
					"operation": [
						"Device App Management Get Symantec Code Signing Certificate"
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
						"Device App Management Symantec Code Signing Certificate"
					],
					"operation": [
						"Device App Management Get Symantec Code Signing Certificate"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/symantecCodeSigningCertificate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Symantec Code Signing Certificate"
					],
					"operation": [
						"Device App Management Update Symantec Code Signing Certificate"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceAppManagement/symantecCodeSigningCertificate<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device App Management Symantec Code Signing Certificate"
					],
					"operation": [
						"Device App Management Update Symantec Code Signing Certificate"
					]
				}
			}
		},
];

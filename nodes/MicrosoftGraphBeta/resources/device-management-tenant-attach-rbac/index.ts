import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementTenantAttachRbacDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Tenant Attach RBAC"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Tenant Attach RBAC",
					"value": "Device Management Delete Tenant Attach RBAC",
					"action": "Delete navigation property tenantAttachRBAC for deviceManagement",
					"description": "Delete navigation property tenantAttachRBAC for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/tenantAttachRBAC"
						}
					}
				},
				{
					"name": "Device Management Get Tenant Attach RBAC",
					"value": "Device Management Get Tenant Attach RBAC",
					"action": "Get tenantAttachRBAC from deviceManagement",
					"description": "TenantAttach RBAC Enablement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/tenantAttachRBAC"
						}
					}
				},
				{
					"name": "Device Management Update Tenant Attach RBAC",
					"value": "Device Management Update Tenant Attach RBAC",
					"action": "Update the navigation property tenantAttachRBAC in deviceManagement",
					"description": "Update the navigation property tenantAttachRBAC in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/tenantAttachRBAC"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/tenantAttachRBAC",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Tenant Attach RBAC"
					],
					"operation": [
						"Device Management Delete Tenant Attach RBAC"
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
						"Device Management Tenant Attach RBAC"
					],
					"operation": [
						"Device Management Delete Tenant Attach RBAC"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/tenantAttachRBAC",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Tenant Attach RBAC"
					],
					"operation": [
						"Device Management Get Tenant Attach RBAC"
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
						"Device Management Tenant Attach RBAC"
					],
					"operation": [
						"Device Management Get Tenant Attach RBAC"
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
						"Device Management Tenant Attach RBAC"
					],
					"operation": [
						"Device Management Get Tenant Attach RBAC"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/tenantAttachRBAC",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Tenant Attach RBAC"
					],
					"operation": [
						"Device Management Update Tenant Attach RBAC"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/tenantAttachRBAC<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Tenant Attach RBAC"
					],
					"operation": [
						"Device Management Update Tenant Attach RBAC"
					]
				}
			}
		},
];

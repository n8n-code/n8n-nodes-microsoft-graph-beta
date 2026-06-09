import type { INodeProperties } from 'n8n-workflow';

export const policiesTenantAppManagementPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Tenant App Management Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete Default App Management Policy",
					"value": "Policies Delete Default App Management Policy",
					"action": "Delete navigation property defaultAppManagementPolicy for policies",
					"description": "Delete navigation property defaultAppManagementPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/defaultAppManagementPolicy"
						}
					}
				},
				{
					"name": "Policies Get Default App Management Policy",
					"value": "Policies Get Default App Management Policy",
					"action": "Get tenantAppManagementPolicy",
					"description": "Read the properties of a tenantAppManagementPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/defaultAppManagementPolicy"
						}
					}
				},
				{
					"name": "Policies Update Default App Management Policy",
					"value": "Policies Update Default App Management Policy",
					"action": "Update tenantAppManagementPolicy",
					"description": "Update the properties of a tenantAppManagementPolicy object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/defaultAppManagementPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/defaultAppManagementPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Tenant App Management Policy"
					],
					"operation": [
						"Policies Delete Default App Management Policy"
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
						"Policies Tenant App Management Policy"
					],
					"operation": [
						"Policies Delete Default App Management Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/defaultAppManagementPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Tenant App Management Policy"
					],
					"operation": [
						"Policies Get Default App Management Policy"
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
						"Policies Tenant App Management Policy"
					],
					"operation": [
						"Policies Get Default App Management Policy"
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
						"Policies Tenant App Management Policy"
					],
					"operation": [
						"Policies Get Default App Management Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/defaultAppManagementPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Tenant App Management Policy"
					],
					"operation": [
						"Policies Update Default App Management Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/defaultAppManagementPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Tenant App Management Policy"
					],
					"operation": [
						"Policies Update Default App Management Policy"
					]
				}
			}
		},
];

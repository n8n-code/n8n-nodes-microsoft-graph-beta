import type { INodeProperties } from 'n8n-workflow';

export const securityProviderTenantSettingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					]
				}
			},
			"options": [
				{
					"name": "Security List Provider Tenant Settings",
					"value": "Security List Provider Tenant Settings",
					"action": "Get providerTenantSettings from security",
					"description": "Get providerTenantSettings from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/providerTenantSettings"
						}
					}
				},
				{
					"name": "Security Create Provider Tenant Settings",
					"value": "Security Create Provider Tenant Settings",
					"action": "Create new navigation property to providerTenantSettings for security",
					"description": "Create new navigation property to providerTenantSettings for security",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/providerTenantSettings"
						}
					}
				},
				{
					"name": "Security Delete Provider Tenant Settings",
					"value": "Security Delete Provider Tenant Settings",
					"action": "Delete navigation property providerTenantSettings for security",
					"description": "Delete navigation property providerTenantSettings for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/providerTenantSettings/{{$parameter[\"providerTenantSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Security Get Provider Tenant Settings",
					"value": "Security Get Provider Tenant Settings",
					"action": "Get providerTenantSettings from security",
					"description": "Get providerTenantSettings from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/providerTenantSettings/{{$parameter[\"providerTenantSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Security Update Provider Tenant Settings",
					"value": "Security Update Provider Tenant Settings",
					"action": "Update the navigation property providerTenantSettings in security",
					"description": "Update the navigation property providerTenantSettings in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/providerTenantSettings/{{$parameter[\"providerTenantSetting-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /security/providerTenantSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security List Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security List Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security List Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security List Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security List Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security List Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security List Provider Tenant Settings"
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
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security List Provider Tenant Settings"
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
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security List Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /security/providerTenantSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security Create Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /security/providerTenantSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security Create Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/providerTenantSettings/{providerTenantSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security Delete Provider Tenant Settings"
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
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security Delete Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /security/providerTenantSettings/{providerTenantSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security Get Provider Tenant Settings"
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
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security Get Provider Tenant Settings"
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
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security Get Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/providerTenantSettings/{providerTenantSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security Update Provider Tenant Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/providerTenantSettings/{providerTenantSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Provider Tenant Setting"
					],
					"operation": [
						"Security Update Provider Tenant Settings"
					]
				}
			}
		},
];

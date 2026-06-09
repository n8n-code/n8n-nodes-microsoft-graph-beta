import type { INodeProperties } from 'n8n-workflow';

export const policiesCrossTenantAccessPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete Cross Tenant Access Policy",
					"value": "Policies Delete Cross Tenant Access Policy",
					"action": "Delete navigation property crossTenantAccessPolicy for policies",
					"description": "Delete navigation property crossTenantAccessPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/crossTenantAccessPolicy"
						}
					}
				},
				{
					"name": "Policies Get Cross Tenant Access Policy",
					"value": "Policies Get Cross Tenant Access Policy",
					"action": "Get crossTenantAccessPolicy",
					"description": "Read the properties and relationships of a crossTenantAccessPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/crossTenantAccessPolicy"
						}
					}
				},
				{
					"name": "Policies Update Cross Tenant Access Policy",
					"value": "Policies Update Cross Tenant Access Policy",
					"action": "Update crossTenantAccessPolicy",
					"description": "Update the properties of a cross-tenant access policy.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/crossTenantAccessPolicy"
						}
					}
				},
				{
					"name": "Policies Cross Tenant Access Policy Delete Default",
					"value": "Policies Cross Tenant Access Policy Delete Default",
					"action": "Delete navigation property default for policies",
					"description": "Delete navigation property default for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/crossTenantAccessPolicy/default"
						}
					}
				},
				{
					"name": "Policies Cross Tenant Access Policy Get Default",
					"value": "Policies Cross Tenant Access Policy Get Default",
					"action": "Get crossTenantAccessPolicyConfigurationDefault",
					"description": "Read the default configuration of a cross-tenant access policy. This default configuration may be the service default assigned by Azure AD (**isServiceDefault** is `true`) or may be customized in your tenant (**isServiceDefault** is `false`).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/crossTenantAccessPolicy/default"
						}
					}
				},
				{
					"name": "Policies Cross Tenant Access Policy Update Default",
					"value": "Policies Cross Tenant Access Policy Update Default",
					"action": "Update crossTenantAccessPolicyConfigurationDefault",
					"description": "Update the default configuration of a cross-tenant access policy.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/crossTenantAccessPolicy/default"
						}
					}
				},
				{
					"name": "Policies Cross Tenant Access Policy List Partners",
					"value": "Policies Cross Tenant Access Policy List Partners",
					"action": "List partners",
					"description": "Get a list of all partner configurations within a cross-tenant access policy. You can also use the `$expand` parameter to list the user synchronization policy for all partner configurations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/crossTenantAccessPolicy/partners"
						}
					}
				},
				{
					"name": "Policies Cross Tenant Access Policy Create Partners",
					"value": "Policies Cross Tenant Access Policy Create Partners",
					"action": "Create crossTenantAccessPolicyConfigurationPartner",
					"description": "Create a new partner configuration in a cross-tenant access policy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/crossTenantAccessPolicy/partners"
						}
					}
				},
				{
					"name": "Policies Cross Tenant Access Policy Delete Partners",
					"value": "Policies Cross Tenant Access Policy Delete Partners",
					"action": "Delete navigation property partners for policies",
					"description": "Delete navigation property partners for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/crossTenantAccessPolicy/partners/{{$parameter[\"crossTenantAccessPolicyConfigurationPartner-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Policies Cross Tenant Access Policy Get Partners",
					"value": "Policies Cross Tenant Access Policy Get Partners",
					"action": "Get partners from policies",
					"description": "Defines partner-specific configurations for external Azure Active Directory organizations.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/crossTenantAccessPolicy/partners/{{$parameter[\"crossTenantAccessPolicyConfigurationPartner-tenantId\"]}}"
						}
					}
				},
				{
					"name": "Policies Cross Tenant Access Policy Update Partners",
					"value": "Policies Cross Tenant Access Policy Update Partners",
					"action": "Update the navigation property partners in policies",
					"description": "Update the navigation property partners in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/crossTenantAccessPolicy/partners/{{$parameter[\"crossTenantAccessPolicyConfigurationPartner-tenantId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/crossTenantAccessPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Delete Cross Tenant Access Policy"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Delete Cross Tenant Access Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/crossTenantAccessPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Get Cross Tenant Access Policy"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Get Cross Tenant Access Policy"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Get Cross Tenant Access Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/crossTenantAccessPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Update Cross Tenant Access Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/crossTenantAccessPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Update Cross Tenant Access Policy"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/crossTenantAccessPolicy/default",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Delete Default"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Delete Default"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/crossTenantAccessPolicy/default",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Get Default"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Get Default"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Get Default"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/crossTenantAccessPolicy/default",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Default"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/crossTenantAccessPolicy/default<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Default"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/crossTenantAccessPolicy/partners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy List Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy List Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy List Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy List Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy List Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy List Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy List Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy List Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy List Partners"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/crossTenantAccessPolicy/partners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "Automatic User Consent Settings",
			"name": "automaticUserConsentSettings",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "automaticUserConsentSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "B 2 B Collaboration Inbound",
			"name": "b2bCollaborationInbound",
			"type": "json",
			"default": "{\n  \"applications\": {\n    \"targets\": [\n      {}\n    ]\n  },\n  \"usersAndGroups\": {}\n}",
			"routing": {
				"send": {
					"property": "b2bCollaborationInbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "B 2 B Collaboration Outbound",
			"name": "b2bCollaborationOutbound",
			"type": "json",
			"default": "{\n  \"applications\": {\n    \"targets\": [\n      {}\n    ]\n  },\n  \"usersAndGroups\": {}\n}",
			"routing": {
				"send": {
					"property": "b2bCollaborationOutbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "B 2 B Direct Connect Inbound",
			"name": "b2bDirectConnectInbound",
			"type": "json",
			"default": "{\n  \"applications\": {\n    \"targets\": [\n      {}\n    ]\n  },\n  \"usersAndGroups\": {}\n}",
			"routing": {
				"send": {
					"property": "b2bDirectConnectInbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "B 2 B Direct Connect Outbound",
			"name": "b2bDirectConnectOutbound",
			"type": "json",
			"default": "{\n  \"applications\": {\n    \"targets\": [\n      {}\n    ]\n  },\n  \"usersAndGroups\": {}\n}",
			"routing": {
				"send": {
					"property": "b2bDirectConnectOutbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "Identity Synchronization",
			"name": "identitySynchronization",
			"type": "json",
			"default": "{\n  \"userSyncInbound\": {}\n}",
			"routing": {
				"send": {
					"property": "identitySynchronization",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "Inbound Trust",
			"name": "inboundTrust",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inboundTrust",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "Is Service Provider",
			"name": "isServiceProvider",
			"type": "boolean",
			"default": true,
			"description": "Identifies whether the partner-specific configuration is a Cloud Service Provider for your organization.",
			"routing": {
				"send": {
					"property": "isServiceProvider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"description": "The tenant identifier for the partner Azure AD organization. Read-only. Key.",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "Tenant Restrictions",
			"name": "tenantRestrictions",
			"type": "string",
			"default": {
				"@odata.type": "#microsoft.graph.crossTenantAccessPolicyTenantRestrictions",
				"devices": {}
			},
			"routing": {
				"send": {
					"property": "tenantRestrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Create Partners"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Delete Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Delete Partners"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Get Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Get Partners"
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
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Get Partners"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/crossTenantAccessPolicy/partners/{crossTenantAccessPolicyConfigurationPartner-tenantId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Odata Type",
			"name": "@odata-type",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "Automatic User Consent Settings",
			"name": "automaticUserConsentSettings",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "automaticUserConsentSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "B 2 B Collaboration Inbound",
			"name": "b2bCollaborationInbound",
			"type": "json",
			"default": "{\n  \"applications\": {\n    \"targets\": [\n      {}\n    ]\n  },\n  \"usersAndGroups\": {}\n}",
			"routing": {
				"send": {
					"property": "b2bCollaborationInbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "B 2 B Collaboration Outbound",
			"name": "b2bCollaborationOutbound",
			"type": "json",
			"default": "{\n  \"applications\": {\n    \"targets\": [\n      {}\n    ]\n  },\n  \"usersAndGroups\": {}\n}",
			"routing": {
				"send": {
					"property": "b2bCollaborationOutbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "B 2 B Direct Connect Inbound",
			"name": "b2bDirectConnectInbound",
			"type": "json",
			"default": "{\n  \"applications\": {\n    \"targets\": [\n      {}\n    ]\n  },\n  \"usersAndGroups\": {}\n}",
			"routing": {
				"send": {
					"property": "b2bDirectConnectInbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "B 2 B Direct Connect Outbound",
			"name": "b2bDirectConnectOutbound",
			"type": "json",
			"default": "{\n  \"applications\": {\n    \"targets\": [\n      {}\n    ]\n  },\n  \"usersAndGroups\": {}\n}",
			"routing": {
				"send": {
					"property": "b2bDirectConnectOutbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "Identity Synchronization",
			"name": "identitySynchronization",
			"type": "json",
			"default": "{\n  \"userSyncInbound\": {}\n}",
			"routing": {
				"send": {
					"property": "identitySynchronization",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "Inbound Trust",
			"name": "inboundTrust",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "inboundTrust",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "Is Service Provider",
			"name": "isServiceProvider",
			"type": "boolean",
			"default": true,
			"description": "Identifies whether the partner-specific configuration is a Cloud Service Provider for your organization.",
			"routing": {
				"send": {
					"property": "isServiceProvider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "Tenant Id",
			"name": "tenantId",
			"type": "string",
			"default": "",
			"description": "The tenant identifier for the partner Azure AD organization. Read-only. Key.",
			"routing": {
				"send": {
					"property": "tenantId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
		{
			"displayName": "Tenant Restrictions",
			"name": "tenantRestrictions",
			"type": "string",
			"default": {
				"@odata.type": "#microsoft.graph.crossTenantAccessPolicyTenantRestrictions",
				"devices": {}
			},
			"routing": {
				"send": {
					"property": "tenantRestrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Cross Tenant Access Policy"
					],
					"operation": [
						"Policies Cross Tenant Access Policy Update Partners"
					]
				}
			}
		},
];

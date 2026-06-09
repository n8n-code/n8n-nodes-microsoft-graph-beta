import type { INodeProperties } from 'n8n-workflow';

export const policiesUnifiedRoleManagementPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Role Management Policies",
					"value": "Policies List Role Management Policies",
					"action": "List roleManagementPolicies",
					"description": "Get role management policies and their details. This API only applies to Azure AD roles. To retrieve policies that apply to Azure RBAC, use the Azure REST PIM API for role management policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/roleManagementPolicies"
						}
					}
				},
				{
					"name": "Policies Create Role Management Policies",
					"value": "Policies Create Role Management Policies",
					"action": "Create new navigation property to roleManagementPolicies for policies",
					"description": "Create new navigation property to roleManagementPolicies for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/roleManagementPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Role Management Policies",
					"value": "Policies Delete Role Management Policies",
					"action": "Delete navigation property roleManagementPolicies for policies",
					"description": "Delete navigation property roleManagementPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Role Management Policies",
					"value": "Policies Get Role Management Policies",
					"action": "Get roleManagementPolicies from policies",
					"description": "Represents the role management policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Role Management Policies",
					"value": "Policies Update Role Management Policies",
					"action": "Update the navigation property roleManagementPolicies in policies",
					"description": "Update the navigation property roleManagementPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Role Management Policies List Effective Rules",
					"value": "Policies Role Management Policies List Effective Rules",
					"action": "List effectiveRules",
					"description": "Get the unifiedRoleManagementPolicyRule resources from the effectiveRules navigation property. To retrieve rules for a policy that applies to Azure RBAC, use the Azure REST PIM API for role management policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/effectiveRules"
						}
					}
				},
				{
					"name": "Policies Role Management Policies Create Effective Rules",
					"value": "Policies Role Management Policies Create Effective Rules",
					"action": "Create new navigation property to effectiveRules for policies",
					"description": "Create new navigation property to effectiveRules for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/effectiveRules"
						}
					}
				},
				{
					"name": "Policies Role Management Policies Delete Effective Rules",
					"value": "Policies Role Management Policies Delete Effective Rules",
					"action": "Delete navigation property effectiveRules for policies",
					"description": "Delete navigation property effectiveRules for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/effectiveRules/{{$parameter[\"unifiedRoleManagementPolicyRule-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Role Management Policies Get Effective Rules",
					"value": "Policies Role Management Policies Get Effective Rules",
					"action": "Get effectiveRules from policies",
					"description": "The list of effective rules like approval rules and expiration rules evaluated based on inherited referenced rules. For example, if there is a tenant-wide policy to enforce enabling an approval rule, the effective rule will be to enable approval even if the policy has a rule to disable approval. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/effectiveRules/{{$parameter[\"unifiedRoleManagementPolicyRule-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Role Management Policies Update Effective Rules",
					"value": "Policies Role Management Policies Update Effective Rules",
					"action": "Update the navigation property effectiveRules in policies",
					"description": "Update the navigation property effectiveRules in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/effectiveRules/{{$parameter[\"unifiedRoleManagementPolicyRule-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Role Management Policies List Rules",
					"value": "Policies Role Management Policies List Rules",
					"action": "List rules (for a role management policy)",
					"description": "Get the rules defined for a role management policy. The rules are a collection of following types that are derived from the unifiedRoleManagementPolicyRule object:\n+ unifiedRoleManagementPolicyApprovalRule\n+ unifiedRoleManagementPolicyAuthenticationContextRule\n+ unifiedRoleManagementPolicyEnablementRule\n+ unifiedRoleManagementPolicyExpirationRule\n+ unifiedRoleManagementPolicyNotificationRule To retrieve rules for a policy that applies to Azure RBAC, use the Azure REST PIM API for role management policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/rules"
						}
					}
				},
				{
					"name": "Policies Role Management Policies Create Rules",
					"value": "Policies Role Management Policies Create Rules",
					"action": "Create new navigation property to rules for policies",
					"description": "Create new navigation property to rules for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/rules"
						}
					}
				},
				{
					"name": "Policies Role Management Policies Delete Rules",
					"value": "Policies Role Management Policies Delete Rules",
					"action": "Delete navigation property rules for policies",
					"description": "Delete navigation property rules for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/rules/{{$parameter[\"unifiedRoleManagementPolicyRule-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Role Management Policies Get Rules",
					"value": "Policies Role Management Policies Get Rules",
					"action": "Get rules from policies",
					"description": "The collection of rules like approval rules and expiration rules. Supports $expand.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/rules/{{$parameter[\"unifiedRoleManagementPolicyRule-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Role Management Policies Update Rules",
					"value": "Policies Role Management Policies Update Rules",
					"action": "Update the navigation property rules in policies",
					"description": "Update the navigation property rules in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/roleManagementPolicies/{{$parameter[\"unifiedRoleManagementPolicy-id\"]}}/rules/{{$parameter[\"unifiedRoleManagementPolicyRule-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/roleManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies List Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies List Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies List Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies List Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies List Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies List Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies List Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies List Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies List Role Management Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/roleManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Create Role Management Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/roleManagementPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Create Role Management Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Delete Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Delete Role Management Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Get Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Get Role Management Policies"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Get Role Management Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Update Role Management Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Update Role Management Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Effective Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Create Effective Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Create Effective Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Delete Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Delete Effective Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Get Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Get Effective Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Get Effective Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Update Effective Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/effectiveRules/{unifiedRoleManagementPolicyRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Update Effective Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies List Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Create Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Create Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Delete Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Delete Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Get Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Get Rules"
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
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Get Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Update Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/roleManagementPolicies/{unifiedRoleManagementPolicy-id}/rules/{unifiedRoleManagementPolicyRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy"
					],
					"operation": [
						"Policies Role Management Policies Update Rules"
					]
				}
			}
		},
];

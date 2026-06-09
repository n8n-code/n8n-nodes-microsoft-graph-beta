import type { INodeProperties } from 'n8n-workflow';

export const policiesUnifiedRoleManagementPolicyAssignmentDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy Assignment"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Role Management Policy Assignments",
					"value": "Policies List Role Management Policy Assignments",
					"action": "List roleManagementPolicyAssignments",
					"description": "Get the details of all role management policy assignments including the policies and rules associated with the Azure AD roles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/roleManagementPolicyAssignments"
						}
					}
				},
				{
					"name": "Policies Create Role Management Policy Assignments",
					"value": "Policies Create Role Management Policy Assignments",
					"action": "Create new navigation property to roleManagementPolicyAssignments for policies",
					"description": "Create new navigation property to roleManagementPolicyAssignments for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/roleManagementPolicyAssignments"
						}
					}
				},
				{
					"name": "Policies Delete Role Management Policy Assignments",
					"value": "Policies Delete Role Management Policy Assignments",
					"action": "Delete navigation property roleManagementPolicyAssignments for policies",
					"description": "Delete navigation property roleManagementPolicyAssignments for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/roleManagementPolicyAssignments/{{$parameter[\"unifiedRoleManagementPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Role Management Policy Assignments",
					"value": "Policies Get Role Management Policy Assignments",
					"action": "Get roleManagementPolicyAssignments from policies",
					"description": "Represents the role management policy assignments.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/roleManagementPolicyAssignments/{{$parameter[\"unifiedRoleManagementPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Role Management Policy Assignments",
					"value": "Policies Update Role Management Policy Assignments",
					"action": "Update the navigation property roleManagementPolicyAssignments in policies",
					"description": "Update the navigation property roleManagementPolicyAssignments in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/roleManagementPolicyAssignments/{{$parameter[\"unifiedRoleManagementPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Role Management Policy Assignments Get Policy",
					"value": "Policies Role Management Policy Assignments Get Policy",
					"action": "Get policy from policies",
					"description": "The policy that's associated with a policy assignment. Supports $expand and a nested $expand of the rules and effectiveRules relationships for the policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/roleManagementPolicyAssignments/{{$parameter[\"unifiedRoleManagementPolicyAssignment-id\"]}}/policy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/roleManagementPolicyAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies List Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies List Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies List Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies List Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies List Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies List Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies List Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies List Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies List Role Management Policy Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/roleManagementPolicyAssignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Create Role Management Policy Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/roleManagementPolicyAssignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Create Role Management Policy Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Delete Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Delete Role Management Policy Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Get Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Get Role Management Policy Assignments"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Get Role Management Policy Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Update Role Management Policy Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Update Role Management Policy Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment-id}/policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Role Management Policy Assignments Get Policy"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Role Management Policy Assignments Get Policy"
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
						"Policies Unified Role Management Policy Assignment"
					],
					"operation": [
						"Policies Role Management Policy Assignments Get Policy"
					]
				}
			}
		},
];

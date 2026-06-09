import type { INodeProperties } from 'n8n-workflow';

export const administrativeUnitsScopedRoleMembershipDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Scoped Role Membership"
					]
				}
			},
			"options": [
				{
					"name": "Administrative Units List Scoped Role Members",
					"value": "Administrative Units List Scoped Role Members",
					"action": "List scopedRoleMembers",
					"description": "List Azure Active Directory (Azure AD) role assignments with administrative unit scope.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers"
						}
					}
				},
				{
					"name": "Administrative Units Create Scoped Role Members",
					"value": "Administrative Units Create Scoped Role Members",
					"action": "Add a scopedRoleMember",
					"description": "Assign an Azure Active Directory (Azure AD) role with administrative unit scope. For a list of roles that can be assigned with administrative unit scope, see Assign Azure AD roles with administrative unit scope.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers"
						}
					}
				},
				{
					"name": "Administrative Units Delete Scoped Role Members",
					"value": "Administrative Units Delete Scoped Role Members",
					"action": "Delete navigation property scopedRoleMembers for administrativeUnits",
					"description": "Delete navigation property scopedRoleMembers for administrativeUnits",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Administrative Units Get Scoped Role Members",
					"value": "Administrative Units Get Scoped Role Members",
					"action": "Get scopedRoleMembers from administrativeUnits",
					"description": "Scoped-role members of this administrative unit.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Administrative Units Update Scoped Role Members",
					"value": "Administrative Units Update Scoped Role Members",
					"action": "Update the navigation property scopedRoleMembers in administrativeUnits",
					"description": "Update the navigation property scopedRoleMembers in administrativeUnits",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/administrativeUnits/{{$parameter[\"administrativeUnit-id\"]}}/scopedRoleMembers/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units List Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units List Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units List Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units List Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units List Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units List Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units List Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units List Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units List Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "POST /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units Create Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "POST /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units Create Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units Delete Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units Delete Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "GET /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units Get Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units Get Scoped Role Members"
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
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units Get Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units Update Scoped Role Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /administrativeUnits/{administrativeUnit-id}/scopedRoleMembers/{scopedRoleMembership-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Administrative Units Scoped Role Membership"
					],
					"operation": [
						"Administrative Units Update Scoped Role Members"
					]
				}
			}
		},
];

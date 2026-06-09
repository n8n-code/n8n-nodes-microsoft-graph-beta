import type { INodeProperties } from 'n8n-workflow';

export const meScopedRoleMembershipDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Scoped Role Membership"
					]
				}
			},
			"options": [
				{
					"name": "Me List Scoped Role Member Of",
					"value": "Me List Scoped Role Member Of",
					"action": "List scopedAdministratorOf",
					"description": "Retrieve a list of scopedRoleMembership for the user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/scopedRoleMemberOf"
						}
					}
				},
				{
					"name": "Me Create Scoped Role Member Of",
					"value": "Me Create Scoped Role Member Of",
					"action": "Create new navigation property to scopedRoleMemberOf for me",
					"description": "Create new navigation property to scopedRoleMemberOf for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/scopedRoleMemberOf"
						}
					}
				},
				{
					"name": "Me Delete Scoped Role Member Of",
					"value": "Me Delete Scoped Role Member Of",
					"action": "Delete navigation property scopedRoleMemberOf for me",
					"description": "Delete navigation property scopedRoleMemberOf for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/scopedRoleMemberOf/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Scoped Role Member Of",
					"value": "Me Get Scoped Role Member Of",
					"action": "Get scopedRoleMemberOf from me",
					"description": "The scoped-role administrative unit memberships for this user. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/scopedRoleMemberOf/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Scoped Role Member Of",
					"value": "Me Update Scoped Role Member Of",
					"action": "Update the navigation property scopedRoleMemberOf in me",
					"description": "Update the navigation property scopedRoleMemberOf in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/scopedRoleMemberOf/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/scopedRoleMemberOf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me List Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me List Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me List Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me List Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me List Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me List Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me List Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me List Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me List Scoped Role Member Of"
					]
				}
			}
		},
		{
			"displayName": "POST /me/scopedRoleMemberOf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me Create Scoped Role Member Of"
					]
				}
			}
		},
		{
			"displayName": "POST /me/scopedRoleMemberOf<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me Create Scoped Role Member Of"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/scopedRoleMemberOf/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me Delete Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me Delete Scoped Role Member Of"
					]
				}
			}
		},
		{
			"displayName": "GET /me/scopedRoleMemberOf/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me Get Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me Get Scoped Role Member Of"
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
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me Get Scoped Role Member Of"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me Update Scoped Role Member Of"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/scopedRoleMemberOf/{scopedRoleMembership-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Scoped Role Membership"
					],
					"operation": [
						"Me Update Scoped Role Member Of"
					]
				}
			}
		},
];

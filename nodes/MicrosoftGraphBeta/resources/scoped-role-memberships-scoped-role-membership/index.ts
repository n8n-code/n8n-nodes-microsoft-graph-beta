import type { INodeProperties } from 'n8n-workflow';

export const scopedRoleMembershipsScopedRoleMembershipDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Scoped Role Memberships Scoped Role Membership"
					]
				}
			},
			"options": [
				{
					"name": "Scoped Role Memberships Scoped Role Membership List Scoped Role Membership",
					"value": "Scoped Role Memberships Scoped Role Membership List Scoped Role Membership",
					"action": "Get entities from scopedRoleMemberships",
					"description": "Get entities from scopedRoleMemberships",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/scopedRoleMemberships"
						}
					}
				},
				{
					"name": "Scoped Role Memberships Scoped Role Membership Create Scoped Role Membership",
					"value": "Scoped Role Memberships Scoped Role Membership Create Scoped Role Membership",
					"action": "Add new entity to scopedRoleMemberships",
					"description": "Add new entity to scopedRoleMemberships",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/scopedRoleMemberships"
						}
					}
				},
				{
					"name": "Scoped Role Memberships Scoped Role Membership Delete Scoped Role Membership",
					"value": "Scoped Role Memberships Scoped Role Membership Delete Scoped Role Membership",
					"action": "Delete entity from scopedRoleMemberships",
					"description": "Delete entity from scopedRoleMemberships",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/scopedRoleMemberships/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Scoped Role Memberships Scoped Role Membership Get Scoped Role Membership",
					"value": "Scoped Role Memberships Scoped Role Membership Get Scoped Role Membership",
					"action": "Get entity from scopedRoleMemberships by key",
					"description": "Get entity from scopedRoleMemberships by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/scopedRoleMemberships/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				},
				{
					"name": "Scoped Role Memberships Scoped Role Membership Update Scoped Role Membership",
					"value": "Scoped Role Memberships Scoped Role Membership Update Scoped Role Membership",
					"action": "Update entity in scopedRoleMemberships",
					"description": "Update entity in scopedRoleMemberships",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/scopedRoleMemberships/{{$parameter[\"scopedRoleMembership-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /scopedRoleMemberships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership List Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership List Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership List Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership List Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership List Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership List Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership List Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership List Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership List Scoped Role Membership"
					]
				}
			}
		},
		{
			"displayName": "POST /scopedRoleMemberships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership Create Scoped Role Membership"
					]
				}
			}
		},
		{
			"displayName": "POST /scopedRoleMemberships<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership Create Scoped Role Membership"
					]
				}
			}
		},
		{
			"displayName": "DELETE /scopedRoleMemberships/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership Delete Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership Delete Scoped Role Membership"
					]
				}
			}
		},
		{
			"displayName": "GET /scopedRoleMemberships/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership Get Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership Get Scoped Role Membership"
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
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership Get Scoped Role Membership"
					]
				}
			}
		},
		{
			"displayName": "PATCH /scopedRoleMemberships/{scopedRoleMembership-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership Update Scoped Role Membership"
					]
				}
			}
		},
		{
			"displayName": "PATCH /scopedRoleMemberships/{scopedRoleMembership-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Scoped Role Memberships Scoped Role Membership"
					],
					"operation": [
						"Scoped Role Memberships Scoped Role Membership Update Scoped Role Membership"
					]
				}
			}
		},
];

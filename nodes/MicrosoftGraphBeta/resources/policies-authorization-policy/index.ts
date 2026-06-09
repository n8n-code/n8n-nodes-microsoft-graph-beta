import type { INodeProperties } from 'n8n-workflow';

export const policiesAuthorizationPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Authorization Policy",
					"value": "Policies List Authorization Policy",
					"action": "Get authorizationPolicy from policies",
					"description": "The policy that controls Azure AD authorization settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authorizationPolicy"
						}
					}
				},
				{
					"name": "Policies Create Authorization Policy",
					"value": "Policies Create Authorization Policy",
					"action": "Create new navigation property to authorizationPolicy for policies",
					"description": "Create new navigation property to authorizationPolicy for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/authorizationPolicy"
						}
					}
				},
				{
					"name": "Policies Delete Authorization Policy",
					"value": "Policies Delete Authorization Policy",
					"action": "Delete navigation property authorizationPolicy for policies",
					"description": "Delete navigation property authorizationPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/authorizationPolicy/{{$parameter[\"authorizationPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Authorization Policy",
					"value": "Policies Get Authorization Policy",
					"action": "Get authorizationPolicy from policies",
					"description": "The policy that controls Azure AD authorization settings.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authorizationPolicy/{{$parameter[\"authorizationPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Authorization Policy",
					"value": "Policies Update Authorization Policy",
					"action": "Update the navigation property authorizationPolicy in policies",
					"description": "Update the navigation property authorizationPolicy in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/authorizationPolicy/{{$parameter[\"authorizationPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Authorization Policy List Default User Role Overrides",
					"value": "Policies Authorization Policy List Default User Role Overrides",
					"action": "Get defaultUserRoleOverrides from policies",
					"description": "Get defaultUserRoleOverrides from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authorizationPolicy/{{$parameter[\"authorizationPolicy-id\"]}}/defaultUserRoleOverrides"
						}
					}
				},
				{
					"name": "Policies Authorization Policy Create Default User Role Overrides",
					"value": "Policies Authorization Policy Create Default User Role Overrides",
					"action": "Create new navigation property to defaultUserRoleOverrides for policies",
					"description": "Create new navigation property to defaultUserRoleOverrides for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/authorizationPolicy/{{$parameter[\"authorizationPolicy-id\"]}}/defaultUserRoleOverrides"
						}
					}
				},
				{
					"name": "Policies Authorization Policy Delete Default User Role Overrides",
					"value": "Policies Authorization Policy Delete Default User Role Overrides",
					"action": "Delete navigation property defaultUserRoleOverrides for policies",
					"description": "Delete navigation property defaultUserRoleOverrides for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/authorizationPolicy/{{$parameter[\"authorizationPolicy-id\"]}}/defaultUserRoleOverrides/{{$parameter[\"defaultUserRoleOverride-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Authorization Policy Get Default User Role Overrides",
					"value": "Policies Authorization Policy Get Default User Role Overrides",
					"action": "Get defaultUserRoleOverrides from policies",
					"description": "Get defaultUserRoleOverrides from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authorizationPolicy/{{$parameter[\"authorizationPolicy-id\"]}}/defaultUserRoleOverrides/{{$parameter[\"defaultUserRoleOverride-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Authorization Policy Update Default User Role Overrides",
					"value": "Policies Authorization Policy Update Default User Role Overrides",
					"action": "Update the navigation property defaultUserRoleOverrides in policies",
					"description": "Update the navigation property defaultUserRoleOverrides in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/authorizationPolicy/{{$parameter[\"authorizationPolicy-id\"]}}/defaultUserRoleOverrides/{{$parameter[\"defaultUserRoleOverride-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/authorizationPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies List Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies List Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies List Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies List Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies List Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies List Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies List Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies List Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies List Authorization Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authorizationPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Create Authorization Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authorizationPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Create Authorization Policy"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/authorizationPolicy/{authorizationPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Delete Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Delete Authorization Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authorizationPolicy/{authorizationPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Get Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Get Authorization Policy"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Get Authorization Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authorizationPolicy/{authorizationPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Update Authorization Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authorizationPolicy/{authorizationPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Update Authorization Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy List Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy List Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy List Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy List Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy List Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy List Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy List Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy List Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy List Default User Role Overrides"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy Create Default User Role Overrides"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy Create Default User Role Overrides"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy Delete Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy Delete Default User Role Overrides"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy Get Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy Get Default User Role Overrides"
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
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy Get Default User Role Overrides"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy Update Default User Role Overrides"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authorizationPolicy/{authorizationPolicy-id}/defaultUserRoleOverrides/{defaultUserRoleOverride-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authorization Policy"
					],
					"operation": [
						"Policies Authorization Policy Update Default User Role Overrides"
					]
				}
			}
		},
];

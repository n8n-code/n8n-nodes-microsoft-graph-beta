import type { INodeProperties } from 'n8n-workflow';

export const policiesHomeRealmDiscoveryPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Home Realm Discovery Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Home Realm Discovery Policies",
					"value": "Policies List Home Realm Discovery Policies",
					"action": "List homeRealmDiscoveryPolicies",
					"description": "Get a list of homeRealmDiscoveryPolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/homeRealmDiscoveryPolicies"
						}
					}
				},
				{
					"name": "Policies Create Home Realm Discovery Policies",
					"value": "Policies Create Home Realm Discovery Policies",
					"action": "Create homeRealmDiscoveryPolicy",
					"description": "Create a new homeRealmDiscoveryPolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/homeRealmDiscoveryPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Home Realm Discovery Policies",
					"value": "Policies Delete Home Realm Discovery Policies",
					"action": "Delete navigation property homeRealmDiscoveryPolicies for policies",
					"description": "Delete navigation property homeRealmDiscoveryPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/homeRealmDiscoveryPolicies/{{$parameter[\"homeRealmDiscoveryPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Home Realm Discovery Policies",
					"value": "Policies Get Home Realm Discovery Policies",
					"action": "Get homeRealmDiscoveryPolicies from policies",
					"description": "The policy to control Azure AD authentication behavior for federated users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/homeRealmDiscoveryPolicies/{{$parameter[\"homeRealmDiscoveryPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Home Realm Discovery Policies",
					"value": "Policies Update Home Realm Discovery Policies",
					"action": "Update the navigation property homeRealmDiscoveryPolicies in policies",
					"description": "Update the navigation property homeRealmDiscoveryPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/homeRealmDiscoveryPolicies/{{$parameter[\"homeRealmDiscoveryPolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/homeRealmDiscoveryPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies List Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies List Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies List Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies List Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies List Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies List Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies List Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies List Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies List Home Realm Discovery Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/homeRealmDiscoveryPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies Create Home Realm Discovery Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/homeRealmDiscoveryPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies Create Home Realm Discovery Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies Delete Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies Delete Home Realm Discovery Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies Get Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies Get Home Realm Discovery Policies"
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
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies Get Home Realm Discovery Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies Update Home Realm Discovery Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/homeRealmDiscoveryPolicies/{homeRealmDiscoveryPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Home Realm Discovery Policy"
					],
					"operation": [
						"Policies Update Home Realm Discovery Policies"
					]
				}
			}
		},
];

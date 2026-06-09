import type { INodeProperties } from 'n8n-workflow';

export const policiesActivityBasedTimeoutPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Activity Based Timeout Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Activity Based Timeout Policies",
					"value": "Policies List Activity Based Timeout Policies",
					"action": "List activityBasedTimeoutPolicies",
					"description": "Get a list of activityBasedTimeoutPolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/activityBasedTimeoutPolicies"
						}
					}
				},
				{
					"name": "Policies Create Activity Based Timeout Policies",
					"value": "Policies Create Activity Based Timeout Policies",
					"action": "Create activityBasedTimeoutPolicy",
					"description": "Create a new activityBasedTimeoutPolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/activityBasedTimeoutPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Activity Based Timeout Policies",
					"value": "Policies Delete Activity Based Timeout Policies",
					"action": "Delete navigation property activityBasedTimeoutPolicies for policies",
					"description": "Delete navigation property activityBasedTimeoutPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/activityBasedTimeoutPolicies/{{$parameter[\"activityBasedTimeoutPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Activity Based Timeout Policies",
					"value": "Policies Get Activity Based Timeout Policies",
					"action": "Get activityBasedTimeoutPolicies from policies",
					"description": "The policy that controls the idle time out for web sessions for applications.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/activityBasedTimeoutPolicies/{{$parameter[\"activityBasedTimeoutPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Activity Based Timeout Policies",
					"value": "Policies Update Activity Based Timeout Policies",
					"action": "Update the navigation property activityBasedTimeoutPolicies in policies",
					"description": "Update the navigation property activityBasedTimeoutPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/activityBasedTimeoutPolicies/{{$parameter[\"activityBasedTimeoutPolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/activityBasedTimeoutPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies List Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies List Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies List Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies List Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies List Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies List Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies List Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies List Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies List Activity Based Timeout Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/activityBasedTimeoutPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies Create Activity Based Timeout Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/activityBasedTimeoutPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies Create Activity Based Timeout Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies Delete Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies Delete Activity Based Timeout Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies Get Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies Get Activity Based Timeout Policies"
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
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies Get Activity Based Timeout Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies Update Activity Based Timeout Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Activity Based Timeout Policy"
					],
					"operation": [
						"Policies Update Activity Based Timeout Policies"
					]
				}
			}
		},
];

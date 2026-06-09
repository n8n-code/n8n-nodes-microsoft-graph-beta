import type { INodeProperties } from 'n8n-workflow';

export const policiesClaimsMappingPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Claims Mapping Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Claims Mapping Policies",
					"value": "Policies List Claims Mapping Policies",
					"action": "List claimsMappingPolicies",
					"description": "Get a list of claimsMappingPolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/claimsMappingPolicies"
						}
					}
				},
				{
					"name": "Policies Create Claims Mapping Policies",
					"value": "Policies Create Claims Mapping Policies",
					"action": "Create claimsMappingPolicy",
					"description": "Create a new claimsMappingPolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/claimsMappingPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Claims Mapping Policies",
					"value": "Policies Delete Claims Mapping Policies",
					"action": "Delete navigation property claimsMappingPolicies for policies",
					"description": "Delete navigation property claimsMappingPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/claimsMappingPolicies/{{$parameter[\"claimsMappingPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Claims Mapping Policies",
					"value": "Policies Get Claims Mapping Policies",
					"action": "Get claimsMappingPolicies from policies",
					"description": "The claim-mapping policies for WS-Fed, SAML, OAuth 2.0, and OpenID Connect protocols, for tokens issued to a specific application.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/claimsMappingPolicies/{{$parameter[\"claimsMappingPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Claims Mapping Policies",
					"value": "Policies Update Claims Mapping Policies",
					"action": "Update the navigation property claimsMappingPolicies in policies",
					"description": "Update the navigation property claimsMappingPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/claimsMappingPolicies/{{$parameter[\"claimsMappingPolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/claimsMappingPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies List Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies List Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies List Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies List Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies List Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies List Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies List Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies List Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies List Claims Mapping Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/claimsMappingPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies Create Claims Mapping Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/claimsMappingPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies Create Claims Mapping Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/claimsMappingPolicies/{claimsMappingPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies Delete Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies Delete Claims Mapping Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/claimsMappingPolicies/{claimsMappingPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies Get Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies Get Claims Mapping Policies"
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
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies Get Claims Mapping Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies Update Claims Mapping Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/claimsMappingPolicies/{claimsMappingPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Claims Mapping Policy"
					],
					"operation": [
						"Policies Update Claims Mapping Policies"
					]
				}
			}
		},
];

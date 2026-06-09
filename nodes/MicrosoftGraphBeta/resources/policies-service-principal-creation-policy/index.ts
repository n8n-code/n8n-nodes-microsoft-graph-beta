import type { INodeProperties } from 'n8n-workflow';

export const policiesServicePrincipalCreationPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Service Principal Creation Policies",
					"value": "Policies List Service Principal Creation Policies",
					"action": "Get servicePrincipalCreationPolicies from policies",
					"description": "Get servicePrincipalCreationPolicies from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/servicePrincipalCreationPolicies"
						}
					}
				},
				{
					"name": "Policies Create Service Principal Creation Policies",
					"value": "Policies Create Service Principal Creation Policies",
					"action": "Create new navigation property to servicePrincipalCreationPolicies for policies",
					"description": "Create new navigation property to servicePrincipalCreationPolicies for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/servicePrincipalCreationPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Service Principal Creation Policies",
					"value": "Policies Delete Service Principal Creation Policies",
					"action": "Delete navigation property servicePrincipalCreationPolicies for policies",
					"description": "Delete navigation property servicePrincipalCreationPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Service Principal Creation Policies",
					"value": "Policies Get Service Principal Creation Policies",
					"action": "Get servicePrincipalCreationPolicies from policies",
					"description": "Get servicePrincipalCreationPolicies from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Service Principal Creation Policies",
					"value": "Policies Update Service Principal Creation Policies",
					"action": "Update the navigation property servicePrincipalCreationPolicies in policies",
					"description": "Update the navigation property servicePrincipalCreationPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies List Excludes",
					"value": "Policies Service Principal Creation Policies List Excludes",
					"action": "Get excludes from policies",
					"description": "Get excludes from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/excludes"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies Create Excludes",
					"value": "Policies Service Principal Creation Policies Create Excludes",
					"action": "Create new navigation property to excludes for policies",
					"description": "Create new navigation property to excludes for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/excludes"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies Delete Excludes",
					"value": "Policies Service Principal Creation Policies Delete Excludes",
					"action": "Delete navigation property excludes for policies",
					"description": "Delete navigation property excludes for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/excludes/{{$parameter[\"servicePrincipalCreationConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies Get Excludes",
					"value": "Policies Service Principal Creation Policies Get Excludes",
					"action": "Get excludes from policies",
					"description": "Get excludes from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/excludes/{{$parameter[\"servicePrincipalCreationConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies Update Excludes",
					"value": "Policies Service Principal Creation Policies Update Excludes",
					"action": "Update the navigation property excludes in policies",
					"description": "Update the navigation property excludes in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/excludes/{{$parameter[\"servicePrincipalCreationConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies List Includes",
					"value": "Policies Service Principal Creation Policies List Includes",
					"action": "Get includes from policies",
					"description": "Get includes from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/includes"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies Create Includes",
					"value": "Policies Service Principal Creation Policies Create Includes",
					"action": "Create new navigation property to includes for policies",
					"description": "Create new navigation property to includes for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/includes"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies Delete Includes",
					"value": "Policies Service Principal Creation Policies Delete Includes",
					"action": "Delete navigation property includes for policies",
					"description": "Delete navigation property includes for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/includes/{{$parameter[\"servicePrincipalCreationConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies Get Includes",
					"value": "Policies Service Principal Creation Policies Get Includes",
					"action": "Get includes from policies",
					"description": "Get includes from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/includes/{{$parameter[\"servicePrincipalCreationConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Service Principal Creation Policies Update Includes",
					"value": "Policies Service Principal Creation Policies Update Includes",
					"action": "Update the navigation property includes in policies",
					"description": "Update the navigation property includes in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/servicePrincipalCreationPolicies/{{$parameter[\"servicePrincipalCreationPolicy-id\"]}}/includes/{{$parameter[\"servicePrincipalCreationConditionSet-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/servicePrincipalCreationPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies List Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies List Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies List Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies List Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies List Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies List Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies List Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies List Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies List Service Principal Creation Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/servicePrincipalCreationPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Create Service Principal Creation Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/servicePrincipalCreationPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Create Service Principal Creation Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Delete Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Delete Service Principal Creation Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Get Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Get Service Principal Creation Policies"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Get Service Principal Creation Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Update Service Principal Creation Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Update Service Principal Creation Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Excludes"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Create Excludes"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Create Excludes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Delete Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Delete Excludes"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Get Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Get Excludes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Get Excludes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Update Excludes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/excludes/{servicePrincipalCreationConditionSet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Update Excludes"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies List Includes"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Create Includes"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Create Includes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Delete Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Delete Includes"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Get Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Get Includes"
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
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Get Includes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Update Includes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy-id}/includes/{servicePrincipalCreationConditionSet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Service Principal Creation Policy"
					],
					"operation": [
						"Policies Service Principal Creation Policies Update Includes"
					]
				}
			}
		},
];

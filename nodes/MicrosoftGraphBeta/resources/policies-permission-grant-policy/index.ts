import type { INodeProperties } from 'n8n-workflow';

export const policiesPermissionGrantPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Permission Grant Policies",
					"value": "Policies List Permission Grant Policies",
					"action": "List permissionGrantPolicies",
					"description": "Retrieve the list of permissionGrantPolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/permissionGrantPolicies"
						}
					}
				},
				{
					"name": "Policies Create Permission Grant Policies",
					"value": "Policies Create Permission Grant Policies",
					"action": "Create permissionGrantPolicy",
					"description": "Creates a permissionGrantPolicy. A permission grant policy is used to describe the conditions under which permissions can be granted (for example, during application consent). After creating the permission grant policy, you can add include condition sets to add matching rules, and add exclude condition sets to add exclusion rules.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/permissionGrantPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Permission Grant Policies",
					"value": "Policies Delete Permission Grant Policies",
					"action": "Delete navigation property permissionGrantPolicies for policies",
					"description": "Delete navigation property permissionGrantPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Permission Grant Policies",
					"value": "Policies Get Permission Grant Policies",
					"action": "Get permissionGrantPolicies from policies",
					"description": "The policy that specifies the conditions under which consent can be granted.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Permission Grant Policies",
					"value": "Policies Update Permission Grant Policies",
					"action": "Update the navigation property permissionGrantPolicies in policies",
					"description": "Update the navigation property permissionGrantPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies List Excludes",
					"value": "Policies Permission Grant Policies List Excludes",
					"action": "List excludes collection of permissionGrantPolicy",
					"description": "Retrieve the condition sets which are *excluded* in a permissionGrantPolicy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/excludes"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies Create Excludes",
					"value": "Policies Permission Grant Policies Create Excludes",
					"action": "Create permissionGrantConditionSet in excludes collection of permissionGrantPolicy",
					"description": "Add conditions under which a permission grant event is *excluded* in a permission grant policy. You do this by adding a permissionGrantConditionSet to the **excludes** collection of a  permissionGrantPolicy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/excludes"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies Delete Excludes",
					"value": "Policies Permission Grant Policies Delete Excludes",
					"action": "Delete navigation property excludes for policies",
					"description": "Delete navigation property excludes for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/excludes/{{$parameter[\"permissionGrantConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies Get Excludes",
					"value": "Policies Permission Grant Policies Get Excludes",
					"action": "Get excludes from policies",
					"description": "Condition sets which are excluded in this permission grant policy. Automatically expanded on GET.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/excludes/{{$parameter[\"permissionGrantConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies Update Excludes",
					"value": "Policies Permission Grant Policies Update Excludes",
					"action": "Update the navigation property excludes in policies",
					"description": "Update the navigation property excludes in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/excludes/{{$parameter[\"permissionGrantConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies List Includes",
					"value": "Policies Permission Grant Policies List Includes",
					"action": "List includes collection of permissionGrantPolicy",
					"description": "Retrieve the condition sets which are *included* in a permissionGrantPolicy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/includes"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies Create Includes",
					"value": "Policies Permission Grant Policies Create Includes",
					"action": "Create permissionGrantConditionSet in includes collection of permissionGrantPolicy",
					"description": "Add conditions under which a permission grant event is *included* in a permission grant policy. You do this by adding a permissionGrantConditionSet to the **includes** collection of a  permissionGrantPolicy.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/includes"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies Delete Includes",
					"value": "Policies Permission Grant Policies Delete Includes",
					"action": "Delete navigation property includes for policies",
					"description": "Delete navigation property includes for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/includes/{{$parameter[\"permissionGrantConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies Get Includes",
					"value": "Policies Permission Grant Policies Get Includes",
					"action": "Get includes from policies",
					"description": "Condition sets which are included in this permission grant policy. Automatically expanded on GET.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/includes/{{$parameter[\"permissionGrantConditionSet-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Permission Grant Policies Update Includes",
					"value": "Policies Permission Grant Policies Update Includes",
					"action": "Update the navigation property includes in policies",
					"description": "Update the navigation property includes in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/permissionGrantPolicies/{{$parameter[\"permissionGrantPolicy-id\"]}}/includes/{{$parameter[\"permissionGrantConditionSet-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/permissionGrantPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies List Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies List Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies List Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies List Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies List Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies List Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies List Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies List Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies List Permission Grant Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/permissionGrantPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Create Permission Grant Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/permissionGrantPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Create Permission Grant Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Delete Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Delete Permission Grant Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Get Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Get Permission Grant Policies"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Get Permission Grant Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Update Permission Grant Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Update Permission Grant Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Excludes"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Create Excludes"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Create Excludes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Delete Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Delete Excludes"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Get Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Get Excludes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Get Excludes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Update Excludes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/excludes/{permissionGrantConditionSet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Update Excludes"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies List Includes"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Create Includes"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Create Includes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Delete Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Delete Includes"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Get Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Get Includes"
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
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Get Includes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Update Includes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/permissionGrantPolicies/{permissionGrantPolicy-id}/includes/{permissionGrantConditionSet-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Permission Grant Policy"
					],
					"operation": [
						"Policies Permission Grant Policies Update Includes"
					]
				}
			}
		},
];

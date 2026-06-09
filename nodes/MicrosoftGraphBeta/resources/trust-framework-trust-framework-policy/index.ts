import type { INodeProperties } from 'n8n-workflow';

export const trustFrameworkTrustFrameworkPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					]
				}
			},
			"options": [
				{
					"name": "Trust Framework List Policies",
					"value": "Trust Framework List Policies",
					"action": "List trustFrameworkPolicies",
					"description": "Retrieve a list of trustFrameworkPolicies in the tenant/directory.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trustFramework/policies"
						}
					}
				},
				{
					"name": "Trust Framework Create Policies",
					"value": "Trust Framework Create Policies",
					"action": "Create new navigation property to policies for trustFramework",
					"description": "Create new navigation property to policies for trustFramework",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/trustFramework/policies"
						}
					}
				},
				{
					"name": "Trust Framework Delete Policies",
					"value": "Trust Framework Delete Policies",
					"action": "Delete navigation property policies for trustFramework",
					"description": "Delete navigation property policies for trustFramework",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/trustFramework/policies/{{$parameter[\"trustFrameworkPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Trust Framework Get Policies",
					"value": "Trust Framework Get Policies",
					"action": "Get policies from trustFramework",
					"description": "Get policies from trustFramework",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trustFramework/policies/{{$parameter[\"trustFrameworkPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Trust Framework Update Policies",
					"value": "Trust Framework Update Policies",
					"action": "Update the navigation property policies in trustFramework",
					"description": "Update the navigation property policies in trustFramework",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/trustFramework/policies/{{$parameter[\"trustFrameworkPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Trust Framework Get Policies Content",
					"value": "Trust Framework Get Policies Content",
					"action": "Get media content for the navigation property policies from trustFramework",
					"description": "Get media content for the navigation property policies from trustFramework",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trustFramework/policies/{{$parameter[\"trustFrameworkPolicy-id\"]}}/$value"
						}
					}
				},
				{
					"name": "Trust Framework Update Policies Content",
					"value": "Trust Framework Update Policies Content",
					"action": "Update media content for the navigation property policies in trustFramework",
					"description": "Update media content for the navigation property policies in trustFramework",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/trustFramework/policies/{{$parameter[\"trustFrameworkPolicy-id\"]}}/$value"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /trustFramework/policies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework List Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework List Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework List Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework List Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework List Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework List Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework List Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework List Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework List Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /trustFramework/policies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Create Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /trustFramework/policies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Create Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /trustFramework/policies/{trustFrameworkPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Delete Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Delete Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /trustFramework/policies/{trustFrameworkPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Get Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Get Policies"
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
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Get Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /trustFramework/policies/{trustFrameworkPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Update Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /trustFramework/policies/{trustFrameworkPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Update Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /trustFramework/policies/{trustFrameworkPolicy-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Get Policies Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /trustFramework/policies/{trustFrameworkPolicy-id}/$value",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Update Policies Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /trustFramework/policies/{trustFrameworkPolicy-id}/$value<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Trust Framework Policy"
					],
					"operation": [
						"Trust Framework Update Policies Content"
					]
				}
			}
		},
];

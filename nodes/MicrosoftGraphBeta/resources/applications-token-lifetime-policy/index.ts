import type { INodeProperties } from 'n8n-workflow';

export const applicationsTokenLifetimePolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Token Lifetime Policy"
					]
				}
			},
			"options": [
				{
					"name": "Applications List Token Lifetime Policies",
					"value": "Applications List Token Lifetime Policies",
					"action": "List assigned tokenLifetimePolicy",
					"description": "List the tokenLifetimePolicy objects that are assigned to an application or servicePrincipal..",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/tokenLifetimePolicies"
						}
					}
				},
				{
					"name": "Applications List Ref Token Lifetime Policies",
					"value": "Applications List Ref Token Lifetime Policies",
					"action": "List assigned tokenLifetimePolicy",
					"description": "List the tokenLifetimePolicy objects that are assigned to an application or servicePrincipal..",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/tokenLifetimePolicies/$ref"
						}
					}
				},
				{
					"name": "Applications Create Ref Token Lifetime Policies",
					"value": "Applications Create Ref Token Lifetime Policies",
					"action": "Assign tokenLifetimePolicy",
					"description": "Assign a tokenLifetimePolicy to an application or servicePrincipal.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/tokenLifetimePolicies/$ref"
						}
					}
				},
				{
					"name": "Applications Delete Ref Token Lifetime Policies",
					"value": "Applications Delete Ref Token Lifetime Policies",
					"action": "Delete ref of navigation property tokenLifetimePolicies for applications",
					"description": "Delete ref of navigation property tokenLifetimePolicies for applications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/applications/{{$parameter[\"application-id\"]}}/tokenLifetimePolicies/{{$parameter[\"tokenLifetimePolicy-id\"]}}/$ref"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /applications/{application-id}/tokenLifetimePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /applications/{application-id}/tokenLifetimePolicies/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Ref Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Ref Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Ref Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Ref Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Ref Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Ref Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications List Ref Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /applications/{application-id}/tokenLifetimePolicies/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications Create Ref Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "Odata Id",
			"name": "@odata-id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "@odata.id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications Create Ref Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /applications/{application-id}/tokenLifetimePolicies/{tokenLifetimePolicy-id}/$ref",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications Delete Ref Token Lifetime Policies"
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
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications Delete Ref Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "%40id",
			"description": "Delete Uri",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "@id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applications Token Lifetime Policy"
					],
					"operation": [
						"Applications Delete Ref Token Lifetime Policies"
					]
				}
			}
		},
];

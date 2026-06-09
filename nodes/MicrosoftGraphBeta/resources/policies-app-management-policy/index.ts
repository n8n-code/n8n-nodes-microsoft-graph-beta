import type { INodeProperties } from 'n8n-workflow';

export const policiesAppManagementPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List App Management Policies",
					"value": "Policies List App Management Policies",
					"action": "List appManagementPolicies",
					"description": "Retrieve a list of appManagementPolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/appManagementPolicies"
						}
					}
				},
				{
					"name": "Policies Create App Management Policies",
					"value": "Policies Create App Management Policies",
					"action": "Create appManagementPolicy",
					"description": "Create an appManagementPolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/appManagementPolicies"
						}
					}
				},
				{
					"name": "Policies Delete App Management Policies",
					"value": "Policies Delete App Management Policies",
					"action": "Delete navigation property appManagementPolicies for policies",
					"description": "Delete navigation property appManagementPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/appManagementPolicies/{{$parameter[\"appManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get App Management Policies",
					"value": "Policies Get App Management Policies",
					"action": "Get appManagementPolicies from policies",
					"description": "The policies that enforce app management restrictions for specific applications and service principals, overriding the defaultAppManagementPolicy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/appManagementPolicies/{{$parameter[\"appManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update App Management Policies",
					"value": "Policies Update App Management Policies",
					"action": "Update the navigation property appManagementPolicies in policies",
					"description": "Update the navigation property appManagementPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/appManagementPolicies/{{$parameter[\"appManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies App Management Policies List Applies To",
					"value": "Policies App Management Policies List Applies To",
					"action": "List appliesTo",
					"description": "List application and service principal objects assigned an appManagementPolicy policy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/appManagementPolicies/{{$parameter[\"appManagementPolicy-id\"]}}/appliesTo"
						}
					}
				},
				{
					"name": "Policies App Management Policies Get Applies To",
					"value": "Policies App Management Policies Get Applies To",
					"action": "Get appliesTo from policies",
					"description": "Get appliesTo from policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/appManagementPolicies/{{$parameter[\"appManagementPolicy-id\"]}}/appliesTo/{{$parameter[\"directoryObject-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/appManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					],
					"operation": [
						"Policies List App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies List App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies List App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies List App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies List App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies List App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies List App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies List App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies List App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/appManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					],
					"operation": [
						"Policies Create App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/appManagementPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					],
					"operation": [
						"Policies Create App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/appManagementPolicies/{appManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					],
					"operation": [
						"Policies Delete App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies Delete App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/appManagementPolicies/{appManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					],
					"operation": [
						"Policies Get App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies Get App Management Policies"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies Get App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/appManagementPolicies/{appManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					],
					"operation": [
						"Policies Update App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/appManagementPolicies/{appManagementPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					],
					"operation": [
						"Policies Update App Management Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies List Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies List Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies List Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies List Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies List Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies List Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies List Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies List Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies List Applies To"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/appManagementPolicies/{appManagementPolicy-id}/appliesTo/{directoryObject-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies Get Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies Get Applies To"
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
						"Policies App Management Policy"
					],
					"operation": [
						"Policies App Management Policies Get Applies To"
					]
				}
			}
		},
];

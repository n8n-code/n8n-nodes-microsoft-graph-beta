import type { INodeProperties } from 'n8n-workflow';

export const mobilityManagementPoliciesMobilityManagementPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Mobility Management Policy"
					]
				}
			},
			"options": [
				{
					"name": "Mobility Management Policies Mobility Management Policy List Mobility Management Policy",
					"value": "Mobility Management Policies Mobility Management Policy List Mobility Management Policy",
					"action": "Get entities from mobilityManagementPolicies",
					"description": "Get entities from mobilityManagementPolicies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mobilityManagementPolicies"
						}
					}
				},
				{
					"name": "Mobility Management Policies Mobility Management Policy Create Mobility Management Policy",
					"value": "Mobility Management Policies Mobility Management Policy Create Mobility Management Policy",
					"action": "Add new entity to mobilityManagementPolicies",
					"description": "Add new entity to mobilityManagementPolicies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/mobilityManagementPolicies"
						}
					}
				},
				{
					"name": "Mobility Management Policies Mobility Management Policy Delete Mobility Management Policy",
					"value": "Mobility Management Policies Mobility Management Policy Delete Mobility Management Policy",
					"action": "Delete entity from mobilityManagementPolicies",
					"description": "Delete entity from mobilityManagementPolicies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/mobilityManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Mobility Management Policies Mobility Management Policy Get Mobility Management Policy",
					"value": "Mobility Management Policies Mobility Management Policy Get Mobility Management Policy",
					"action": "Get entity from mobilityManagementPolicies by key",
					"description": "Get entity from mobilityManagementPolicies by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/mobilityManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Mobility Management Policies Mobility Management Policy Update Mobility Management Policy",
					"value": "Mobility Management Policies Mobility Management Policy Update Mobility Management Policy",
					"action": "Update entity in mobilityManagementPolicies",
					"description": "Update entity in mobilityManagementPolicies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/mobilityManagementPolicies/{{$parameter[\"mobilityManagementPolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /mobilityManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy List Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy List Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy List Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy List Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy List Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy List Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy List Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy List Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy List Mobility Management Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /mobilityManagementPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy Create Mobility Management Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /mobilityManagementPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy Create Mobility Management Policy"
					]
				}
			}
		},
		{
			"displayName": "DELETE /mobilityManagementPolicies/{mobilityManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy Delete Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy Delete Mobility Management Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /mobilityManagementPolicies/{mobilityManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy Get Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy Get Mobility Management Policy"
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
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy Get Mobility Management Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /mobilityManagementPolicies/{mobilityManagementPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy Update Mobility Management Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /mobilityManagementPolicies/{mobilityManagementPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Mobility Management Policies Mobility Management Policy"
					],
					"operation": [
						"Mobility Management Policies Mobility Management Policy Update Mobility Management Policy"
					]
				}
			}
		},
];

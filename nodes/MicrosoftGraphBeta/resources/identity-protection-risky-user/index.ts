import type { INodeProperties } from 'n8n-workflow';

export const identityProtectionRiskyUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					]
				}
			},
			"options": [
				{
					"name": "Identity Protection List Risky Users",
					"value": "Identity Protection List Risky Users",
					"action": "Get riskyUser",
					"description": "Retrieve the properties and relationships of a **riskyUser** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskyUsers"
						}
					}
				},
				{
					"name": "Identity Protection Create Risky Users",
					"value": "Identity Protection Create Risky Users",
					"action": "Create new navigation property to riskyUsers for identityProtection",
					"description": "Create new navigation property to riskyUsers for identityProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/riskyUsers"
						}
					}
				},
				{
					"name": "Identity Protection Delete Risky Users",
					"value": "Identity Protection Delete Risky Users",
					"action": "Delete navigation property riskyUsers for identityProtection",
					"description": "Delete navigation property riskyUsers for identityProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityProtection/riskyUsers/{{$parameter[\"riskyUser-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Get Risky Users",
					"value": "Identity Protection Get Risky Users",
					"action": "Get riskyUsers from identityProtection",
					"description": "Users that are flagged as at-risk by Azure AD Identity Protection.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskyUsers/{{$parameter[\"riskyUser-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Update Risky Users",
					"value": "Identity Protection Update Risky Users",
					"action": "Update the navigation property riskyUsers in identityProtection",
					"description": "Update the navigation property riskyUsers in identityProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityProtection/riskyUsers/{{$parameter[\"riskyUser-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Risky Users List History",
					"value": "Identity Protection Risky Users List History",
					"action": "List history of riskyUser",
					"description": "Get the risk history of a riskyUser resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history"
						}
					}
				},
				{
					"name": "Identity Protection Risky Users Create History",
					"value": "Identity Protection Risky Users Create History",
					"action": "Create new navigation property to history for identityProtection",
					"description": "Create new navigation property to history for identityProtection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/identityProtection/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history"
						}
					}
				},
				{
					"name": "Identity Protection Risky Users Delete History",
					"value": "Identity Protection Risky Users Delete History",
					"action": "Delete navigation property history for identityProtection",
					"description": "Delete navigation property history for identityProtection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/identityProtection/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history/{{$parameter[\"riskyUserHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Risky Users Get History",
					"value": "Identity Protection Risky Users Get History",
					"action": "Get history from identityProtection",
					"description": "Get history from identityProtection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identityProtection/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history/{{$parameter[\"riskyUserHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Identity Protection Risky Users Update History",
					"value": "Identity Protection Risky Users Update History",
					"action": "Update the navigation property history in identityProtection",
					"description": "Update the navigation property history in identityProtection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/identityProtection/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history/{{$parameter[\"riskyUserHistoryItem-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identityProtection/riskyUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection List Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection List Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection List Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection List Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection List Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection List Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection List Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection List Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection List Risky Users"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Create Risky Users"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyUsers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Create Risky Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityProtection/riskyUsers/{riskyUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Delete Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Delete Risky Users"
					]
				}
			}
		},
		{
			"displayName": "GET /identityProtection/riskyUsers/{riskyUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Get Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Get Risky Users"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Get Risky Users"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskyUsers/{riskyUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Update Risky Users"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskyUsers/{riskyUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Update Risky Users"
					]
				}
			}
		},
		{
			"displayName": "GET /identityProtection/riskyUsers/{riskyUser-id}/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users List History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users List History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users List History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users List History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users List History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users List History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users List History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users List History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users List History"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyUsers/{riskyUser-id}/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users Create History"
					]
				}
			}
		},
		{
			"displayName": "POST /identityProtection/riskyUsers/{riskyUser-id}/history<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users Create History"
					]
				}
			}
		},
		{
			"displayName": "DELETE /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users Delete History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users Delete History"
					]
				}
			}
		},
		{
			"displayName": "GET /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users Get History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users Get History"
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
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users Get History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users Update History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /identityProtection/riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Protection Risky User"
					],
					"operation": [
						"Identity Protection Risky Users Update History"
					]
				}
			}
		},
];

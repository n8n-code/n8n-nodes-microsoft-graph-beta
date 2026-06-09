import type { INodeProperties } from 'n8n-workflow';

export const riskyUsersRiskyUserHistoryItemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User History Item"
					]
				}
			},
			"options": [
				{
					"name": "Risky Users List History",
					"value": "Risky Users List History",
					"action": "List history of riskyUser",
					"description": "Get the risk history of a riskyUser resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history"
						}
					}
				},
				{
					"name": "Risky Users Create History",
					"value": "Risky Users Create History",
					"action": "Create new navigation property to history for riskyUsers",
					"description": "Create new navigation property to history for riskyUsers",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history"
						}
					}
				},
				{
					"name": "Risky Users Delete History",
					"value": "Risky Users Delete History",
					"action": "Delete navigation property history for riskyUsers",
					"description": "Delete navigation property history for riskyUsers",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history/{{$parameter[\"riskyUserHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Risky Users Get History",
					"value": "Risky Users Get History",
					"action": "Get history from riskyUsers",
					"description": "Get history from riskyUsers",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history/{{$parameter[\"riskyUserHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Risky Users Update History",
					"value": "Risky Users Update History",
					"action": "Update the navigation property history in riskyUsers",
					"description": "Update the navigation property history in riskyUsers",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/riskyUsers/{{$parameter[\"riskyUser-id\"]}}/history/{{$parameter[\"riskyUserHistoryItem-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /riskyUsers/{riskyUser-id}/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users List History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users List History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users List History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users List History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users List History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users List History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users List History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users List History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users List History"
					]
				}
			}
		},
		{
			"displayName": "POST /riskyUsers/{riskyUser-id}/history",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users Create History"
					]
				}
			}
		},
		{
			"displayName": "POST /riskyUsers/{riskyUser-id}/history<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users Create History"
					]
				}
			}
		},
		{
			"displayName": "DELETE /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users Delete History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users Delete History"
					]
				}
			}
		},
		{
			"displayName": "GET /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users Get History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users Get History"
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
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users Get History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users Update History"
					]
				}
			}
		},
		{
			"displayName": "PATCH /riskyUsers/{riskyUser-id}/history/{riskyUserHistoryItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User History Item"
					],
					"operation": [
						"Risky Users Update History"
					]
				}
			}
		},
];

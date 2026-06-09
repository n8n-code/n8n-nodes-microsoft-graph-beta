import type { INodeProperties } from 'n8n-workflow';

export const riskyUsersRiskyUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User"
					]
				}
			},
			"options": [
				{
					"name": "Risky Users Risky User List Risky User",
					"value": "Risky Users Risky User List Risky User",
					"action": "List riskyUsers",
					"description": "Retrieve the properties and relationships of a collection of **riskyUser** objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/riskyUsers"
						}
					}
				},
				{
					"name": "Risky Users Risky User Create Risky User",
					"value": "Risky Users Risky User Create Risky User",
					"action": "Add new entity to riskyUsers",
					"description": "Add new entity to riskyUsers",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/riskyUsers"
						}
					}
				},
				{
					"name": "Risky Users Risky User Delete Risky User",
					"value": "Risky Users Risky User Delete Risky User",
					"action": "Delete entity from riskyUsers",
					"description": "Delete entity from riskyUsers",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/riskyUsers/{{$parameter[\"riskyUser-id\"]}}"
						}
					}
				},
				{
					"name": "Risky Users Risky User Get Risky User",
					"value": "Risky Users Risky User Get Risky User",
					"action": "Get riskyUser",
					"description": "Retrieve the properties and relationships of a **riskyUser** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/riskyUsers/{{$parameter[\"riskyUser-id\"]}}"
						}
					}
				},
				{
					"name": "Risky Users Risky User Update Risky User",
					"value": "Risky Users Risky User Update Risky User",
					"action": "Update entity in riskyUsers",
					"description": "Update entity in riskyUsers",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/riskyUsers/{{$parameter[\"riskyUser-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /riskyUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User List Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User List Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User List Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User List Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User List Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User List Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User List Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User List Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User List Risky User"
					]
				}
			}
		},
		{
			"displayName": "POST /riskyUsers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User Create Risky User"
					]
				}
			}
		},
		{
			"displayName": "POST /riskyUsers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User Create Risky User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /riskyUsers/{riskyUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User Delete Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User Delete Risky User"
					]
				}
			}
		},
		{
			"displayName": "GET /riskyUsers/{riskyUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User Get Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User Get Risky User"
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
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User Get Risky User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /riskyUsers/{riskyUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User Update Risky User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /riskyUsers/{riskyUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Risky User"
					],
					"operation": [
						"Risky Users Risky User Update Risky User"
					]
				}
			}
		},
];

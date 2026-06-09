import type { INodeProperties } from 'n8n-workflow';

export const teamsTeamsAsyncOperationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams Async Operation"
					]
				}
			},
			"options": [
				{
					"name": "Teams List Operations",
					"value": "Teams List Operations",
					"action": "Get operations from teams",
					"description": "The async operations that ran or are running on this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Teams Create Operations",
					"value": "Teams Create Operations",
					"action": "Create new navigation property to operations for teams",
					"description": "Create new navigation property to operations for teams",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Teams Delete Operations",
					"value": "Teams Delete Operations",
					"action": "Delete navigation property operations for teams",
					"description": "Delete navigation property operations for teams",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Get Operations",
					"value": "Teams Get Operations",
					"action": "Get operations from teams",
					"description": "The async operations that ran or are running on this team.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Teams Update Operations",
					"value": "Teams Update Operations",
					"action": "Update the navigation property operations in teams",
					"description": "Update the navigation property operations in teams",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teams/{{$parameter[\"team-id\"]}}/operations/{{$parameter[\"teamsAsyncOperation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teams/{team-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams List Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams List Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams List Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams List Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams List Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams List Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams List Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams List Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /teams/{team-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /teams/{team-id}/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams Delete Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /teams/{team-id}/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams Get Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams Get Operations"
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
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teams/{team-id}/operations/{teamsAsyncOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teams Teams Async Operation"
					],
					"operation": [
						"Teams Update Operations"
					]
				}
			}
		},
];

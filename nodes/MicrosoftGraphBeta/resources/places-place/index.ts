import type { INodeProperties } from 'n8n-workflow';

export const placesPlaceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Places Place"
					]
				}
			},
			"options": [
				{
					"name": "Places Place List Place",
					"value": "Places Place List Place",
					"action": "Get place",
					"description": "Get the properties and relationships of a place object specified by either its ID or email address.  The **place** object can be one of the following types: The **room**, **workspace**, and **roomList** resources are derived from the **place** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/places"
						}
					}
				},
				{
					"name": "Places Place Create Place",
					"value": "Places Place Create Place",
					"action": "Add new entity to places",
					"description": "Add new entity to places",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/places"
						}
					}
				},
				{
					"name": "Places Place Delete Place",
					"value": "Places Place Delete Place",
					"action": "Delete entity from places",
					"description": "Delete entity from places",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/places/{{$parameter[\"place-id\"]}}"
						}
					}
				},
				{
					"name": "Places Place Get Place",
					"value": "Places Place Get Place",
					"action": "Get place",
					"description": "Get the properties and relationships of a place object specified by either its ID or email address.  The **place** object can be one of the following types: The **room**, **workspace**, and **roomList** resources are derived from the **place** object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/places/{{$parameter[\"place-id\"]}}"
						}
					}
				},
				{
					"name": "Places Place Update Place",
					"value": "Places Place Update Place",
					"action": "Update place",
					"description": "Update the properties of place object, which can be a room, workspace, or roomList. You can identify the **room**, **workspace**, or **roomList** by specifying the **id** or **emailAddress** property.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/places/{{$parameter[\"place-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /places",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Places Place"
					],
					"operation": [
						"Places Place List Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place List Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place List Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place List Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place List Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place List Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place List Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place List Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place List Place"
					]
				}
			}
		},
		{
			"displayName": "POST /places",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Places Place"
					],
					"operation": [
						"Places Place Create Place"
					]
				}
			}
		},
		{
			"displayName": "POST /places<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Places Place"
					],
					"operation": [
						"Places Place Create Place"
					]
				}
			}
		},
		{
			"displayName": "DELETE /places/{place-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Places Place"
					],
					"operation": [
						"Places Place Delete Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place Delete Place"
					]
				}
			}
		},
		{
			"displayName": "GET /places/{place-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Places Place"
					],
					"operation": [
						"Places Place Get Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place Get Place"
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
						"Places Place"
					],
					"operation": [
						"Places Place Get Place"
					]
				}
			}
		},
		{
			"displayName": "PATCH /places/{place-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Places Place"
					],
					"operation": [
						"Places Place Update Place"
					]
				}
			}
		},
		{
			"displayName": "PATCH /places/{place-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Places Place"
					],
					"operation": [
						"Places Place Update Place"
					]
				}
			}
		},
];

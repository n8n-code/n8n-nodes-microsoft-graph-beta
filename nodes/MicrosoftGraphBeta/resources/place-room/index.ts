import type { INodeProperties } from 'n8n-workflow';

export const placeRoomDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Place Room"
					]
				}
			},
			"options": [
				{
					"name": "Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96",
					"value": "Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96",
					"action": "Get the items of type microsoft.graph.room in the microsoft.graph.place collection",
					"description": "Get the items of type microsoft.graph.room in the microsoft.graph.place collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/places/microsoft.graph.room"
						}
					}
				},
				{
					"name": "Get Microsoft Graph Place Item As Microsoft Graph Room Ac 92",
					"value": "Get Microsoft Graph Place Item As Microsoft Graph Room Ac 92",
					"action": "Get the item of type microsoft.graph.place as microsoft.graph.room",
					"description": "Get the item of type microsoft.graph.place as microsoft.graph.room",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/places/{{$parameter[\"place-id\"]}}/microsoft.graph.room"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /places/microsoft.graph.room",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Items As Microsoft Graph Room 0 A 96"
					]
				}
			}
		},
		{
			"displayName": "GET /places/{place-id}/microsoft.graph.room",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Item As Microsoft Graph Room Ac 92"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Item As Microsoft Graph Room Ac 92"
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
						"Place Room"
					],
					"operation": [
						"Get Microsoft Graph Place Item As Microsoft Graph Room Ac 92"
					]
				}
			}
		},
];

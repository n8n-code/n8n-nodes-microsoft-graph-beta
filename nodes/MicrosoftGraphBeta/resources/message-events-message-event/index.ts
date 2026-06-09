import type { INodeProperties } from 'n8n-workflow';

export const messageEventsMessageEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Message Events Message Event"
					]
				}
			},
			"options": [
				{
					"name": "Message Events Message Event List Message Event",
					"value": "Message Events Message Event List Message Event",
					"action": "Get entities from messageEvents",
					"description": "Get entities from messageEvents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageEvents"
						}
					}
				},
				{
					"name": "Message Events Message Event Create Message Event",
					"value": "Message Events Message Event Create Message Event",
					"action": "Add new entity to messageEvents",
					"description": "Add new entity to messageEvents",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messageEvents"
						}
					}
				},
				{
					"name": "Message Events Message Event Delete Message Event",
					"value": "Message Events Message Event Delete Message Event",
					"action": "Delete entity from messageEvents",
					"description": "Delete entity from messageEvents",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/messageEvents/{{$parameter[\"messageEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Message Events Message Event Get Message Event",
					"value": "Message Events Message Event Get Message Event",
					"action": "Get entity from messageEvents by key",
					"description": "Get entity from messageEvents by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageEvents/{{$parameter[\"messageEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Message Events Message Event Update Message Event",
					"value": "Message Events Message Event Update Message Event",
					"action": "Update entity in messageEvents",
					"description": "Update entity in messageEvents",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/messageEvents/{{$parameter[\"messageEvent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /messageEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event List Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event List Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event List Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event List Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event List Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event List Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event List Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event List Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event List Message Event"
					]
				}
			}
		},
		{
			"displayName": "POST /messageEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event Create Message Event"
					]
				}
			}
		},
		{
			"displayName": "POST /messageEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event Create Message Event"
					]
				}
			}
		},
		{
			"displayName": "DELETE /messageEvents/{messageEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event Delete Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event Delete Message Event"
					]
				}
			}
		},
		{
			"displayName": "GET /messageEvents/{messageEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event Get Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event Get Message Event"
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
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event Get Message Event"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageEvents/{messageEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event Update Message Event"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageEvents/{messageEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Events Message Event"
					],
					"operation": [
						"Message Events Message Event Update Message Event"
					]
				}
			}
		},
];

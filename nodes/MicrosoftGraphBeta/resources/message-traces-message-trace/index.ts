import type { INodeProperties } from 'n8n-workflow';

export const messageTracesMessageTraceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Trace"
					]
				}
			},
			"options": [
				{
					"name": "Message Traces Message Trace List Message Trace",
					"value": "Message Traces Message Trace List Message Trace",
					"action": "Get entities from messageTraces",
					"description": "Get entities from messageTraces",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageTraces"
						}
					}
				},
				{
					"name": "Message Traces Message Trace Create Message Trace",
					"value": "Message Traces Message Trace Create Message Trace",
					"action": "Add new entity to messageTraces",
					"description": "Add new entity to messageTraces",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messageTraces"
						}
					}
				},
				{
					"name": "Message Traces Message Trace Delete Message Trace",
					"value": "Message Traces Message Trace Delete Message Trace",
					"action": "Delete entity from messageTraces",
					"description": "Delete entity from messageTraces",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}"
						}
					}
				},
				{
					"name": "Message Traces Message Trace Get Message Trace",
					"value": "Message Traces Message Trace Get Message Trace",
					"action": "Get entity from messageTraces by key",
					"description": "Get entity from messageTraces by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}"
						}
					}
				},
				{
					"name": "Message Traces Message Trace Update Message Trace",
					"value": "Message Traces Message Trace Update Message Trace",
					"action": "Update entity in messageTraces",
					"description": "Update entity in messageTraces",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /messageTraces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace List Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace List Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace List Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace List Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace List Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace List Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace List Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace List Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace List Message Trace"
					]
				}
			}
		},
		{
			"displayName": "POST /messageTraces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace Create Message Trace"
					]
				}
			}
		},
		{
			"displayName": "POST /messageTraces<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace Create Message Trace"
					]
				}
			}
		},
		{
			"displayName": "DELETE /messageTraces/{messageTrace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace Delete Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace Delete Message Trace"
					]
				}
			}
		},
		{
			"displayName": "GET /messageTraces/{messageTrace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace Get Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace Get Message Trace"
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
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace Get Message Trace"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageTraces/{messageTrace-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace Update Message Trace"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageTraces/{messageTrace-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Trace"
					],
					"operation": [
						"Message Traces Message Trace Update Message Trace"
					]
				}
			}
		},
];

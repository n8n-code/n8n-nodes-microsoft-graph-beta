import type { INodeProperties } from 'n8n-workflow';

export const commandsCommandDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Command"
					]
				}
			},
			"options": [
				{
					"name": "Commands Command List Command",
					"value": "Commands Command List Command",
					"action": "Get entities from commands",
					"description": "Get entities from commands",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commands"
						}
					}
				},
				{
					"name": "Commands Command Create Command",
					"value": "Commands Command Create Command",
					"action": "Add new entity to commands",
					"description": "Add new entity to commands",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/commands"
						}
					}
				},
				{
					"name": "Commands Command Delete Command",
					"value": "Commands Command Delete Command",
					"action": "Delete entity from commands",
					"description": "Delete entity from commands",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/commands/{{$parameter[\"command-id\"]}}"
						}
					}
				},
				{
					"name": "Commands Command Get Command",
					"value": "Commands Command Get Command",
					"action": "Get entity from commands by key",
					"description": "Get entity from commands by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commands/{{$parameter[\"command-id\"]}}"
						}
					}
				},
				{
					"name": "Commands Command Update Command",
					"value": "Commands Command Update Command",
					"action": "Update entity in commands",
					"description": "Update entity in commands",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/commands/{{$parameter[\"command-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /commands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Command"
					],
					"operation": [
						"Commands Command List Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command List Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command List Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command List Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command List Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command List Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command List Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command List Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command List Command"
					]
				}
			}
		},
		{
			"displayName": "POST /commands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Command"
					],
					"operation": [
						"Commands Command Create Command"
					]
				}
			}
		},
		{
			"displayName": "POST /commands<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Command"
					],
					"operation": [
						"Commands Command Create Command"
					]
				}
			}
		},
		{
			"displayName": "DELETE /commands/{command-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Command"
					],
					"operation": [
						"Commands Command Delete Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command Delete Command"
					]
				}
			}
		},
		{
			"displayName": "GET /commands/{command-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Command"
					],
					"operation": [
						"Commands Command Get Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command Get Command"
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
						"Commands Command"
					],
					"operation": [
						"Commands Command Get Command"
					]
				}
			}
		},
		{
			"displayName": "PATCH /commands/{command-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Command"
					],
					"operation": [
						"Commands Command Update Command"
					]
				}
			}
		},
		{
			"displayName": "PATCH /commands/{command-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Command"
					],
					"operation": [
						"Commands Command Update Command"
					]
				}
			}
		},
];

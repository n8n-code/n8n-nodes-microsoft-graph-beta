import type { INodeProperties } from 'n8n-workflow';

export const chatsChatDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat"
					]
				}
			},
			"options": [
				{
					"name": "Chats Chat List Chat",
					"value": "Chats Chat List Chat",
					"action": "List chats",
					"description": "Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats"
						}
					}
				},
				{
					"name": "Chats Chat Create Chat",
					"value": "Chats Chat Create Chat",
					"action": "Create chat",
					"description": "Create a new chat object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats"
						}
					}
				},
				{
					"name": "Chats Chat Delete Chat",
					"value": "Chats Chat Delete Chat",
					"action": "Delete entity from chats",
					"description": "Delete entity from chats",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Chat Get Chat",
					"value": "Chats Chat Get Chat",
					"action": "Get chat",
					"description": "Retrieve a single chat (without its messages). This method supports federation. To access a chat, at least one chat member must belong to the tenant the request initiated from.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Chat Update Chat",
					"value": "Chats Chat Update Chat",
					"action": "Update chat",
					"description": "Update the properties of a chat object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /chats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat"
					],
					"operation": [
						"Chats Chat List Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat List Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat List Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat List Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat List Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat List Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat List Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat List Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat List Chat"
					]
				}
			}
		},
		{
			"displayName": "POST /chats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat"
					],
					"operation": [
						"Chats Chat Create Chat"
					]
				}
			}
		},
		{
			"displayName": "POST /chats<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat"
					],
					"operation": [
						"Chats Chat Create Chat"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chats/{chat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat"
					],
					"operation": [
						"Chats Chat Delete Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat Delete Chat"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat"
					],
					"operation": [
						"Chats Chat Get Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat Get Chat"
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
						"Chats Chat"
					],
					"operation": [
						"Chats Chat Get Chat"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat"
					],
					"operation": [
						"Chats Chat Update Chat"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat"
					],
					"operation": [
						"Chats Chat Update Chat"
					]
				}
			}
		},
];

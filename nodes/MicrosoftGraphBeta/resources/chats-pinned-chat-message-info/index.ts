import type { INodeProperties } from 'n8n-workflow';

export const chatsPinnedChatMessageInfoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Pinned Chat Message Info"
					]
				}
			},
			"options": [
				{
					"name": "Chats List Pinned Messages",
					"value": "Chats List Pinned Messages",
					"action": "List pinnedChatMessages in a chat",
					"description": "Get a list of pinnedChatMessages in a chat.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages"
						}
					}
				},
				{
					"name": "Chats Create Pinned Messages",
					"value": "Chats Create Pinned Messages",
					"action": "Pin a message in a chat",
					"description": "Pin a chat message in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can pin a chat message.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages"
						}
					}
				},
				{
					"name": "Chats Delete Pinned Messages",
					"value": "Chats Delete Pinned Messages",
					"action": "Delete navigation property pinnedMessages for chats",
					"description": "Delete navigation property pinnedMessages for chats",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Get Pinned Messages",
					"value": "Chats Get Pinned Messages",
					"action": "Get pinnedMessages from chats",
					"description": "A collection of all the pinned messages in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Update Pinned Messages",
					"value": "Chats Update Pinned Messages",
					"action": "Update the navigation property pinnedMessages in chats",
					"description": "Update the navigation property pinnedMessages in chats",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Pinned Messages Get Message",
					"value": "Chats Pinned Messages Get Message",
					"action": "Get message from chats",
					"description": "Represents details about the chat message that is pinned.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/pinnedMessages/{{$parameter[\"pinnedChatMessageInfo-id\"]}}/message"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /chats/{chat-id}/pinnedMessages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats List Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats List Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats List Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats List Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats List Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats List Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats List Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats List Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats List Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/pinnedMessages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Create Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/pinnedMessages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Create Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Delete Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Delete Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Get Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Get Pinned Messages"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Get Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Update Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Update Pinned Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}/message",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Pinned Messages Get Message"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Pinned Messages Get Message"
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
						"Chats Pinned Chat Message Info"
					],
					"operation": [
						"Chats Pinned Messages Get Message"
					]
				}
			}
		},
];

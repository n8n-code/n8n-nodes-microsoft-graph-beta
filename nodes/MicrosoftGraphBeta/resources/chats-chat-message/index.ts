import type { INodeProperties } from 'n8n-workflow';

export const chatsChatMessageDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					]
				}
			},
			"options": [
				{
					"name": "Chats List Messages",
					"value": "Chats List Messages",
					"action": "List messages in a chat",
					"description": "Retrieve the list of messages in a chat. This method supports federation. To list chat messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the **tenantId** property on the channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Chats Create Messages",
					"value": "Chats Create Messages",
					"action": "Send message in a chat",
					"description": "Send a new chatMessage in the specified chat. This API cannot create a new chat; you must use the list chats method to retrieve the ID of an existing chat before creating a chat message.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages"
						}
					}
				},
				{
					"name": "Chats Delete Messages",
					"value": "Chats Delete Messages",
					"action": "Delete navigation property messages for chats",
					"description": "Delete navigation property messages for chats",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Get Messages",
					"value": "Chats Get Messages",
					"action": "Get messages from chats",
					"description": "A collection of all the messages in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Update Messages",
					"value": "Chats Update Messages",
					"action": "Update the navigation property messages in chats",
					"description": "Update the navigation property messages in chats",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Messages List Hosted Contents",
					"value": "Chats Messages List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Chats Messages Create Hosted Contents",
					"value": "Chats Messages Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for chats",
					"description": "Create new navigation property to hostedContents for chats",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Chats Messages Delete Hosted Contents",
					"value": "Chats Messages Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for chats",
					"description": "Delete navigation property hostedContents for chats",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Messages Get Hosted Contents",
					"value": "Chats Messages Get Hosted Contents",
					"action": "Get hostedContents from chats",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Messages Update Hosted Contents",
					"value": "Chats Messages Update Hosted Contents",
					"action": "Update the navigation property hostedContents in chats",
					"description": "Update the navigation property hostedContents in chats",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Messages List Replies",
					"value": "Chats Messages List Replies",
					"action": "List replies",
					"description": "List all the replies to a message in a channel of a team. This method lists only the replies of the specified message, if any. To get the message itself, simply call get channel message.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Chats Messages Create Replies",
					"value": "Chats Messages Create Replies",
					"action": "Send replies to a message in a channel",
					"description": "Send a new reply to a chatMessage in a specified channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies"
						}
					}
				},
				{
					"name": "Chats Messages Delete Replies",
					"value": "Chats Messages Delete Replies",
					"action": "Delete navigation property replies for chats",
					"description": "Delete navigation property replies for chats",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Chats Messages Get Replies",
					"value": "Chats Messages Get Replies",
					"action": "Get replies from chats",
					"description": "Replies for a specified message. Supports $expand for channel messages.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Chats Messages Update Replies",
					"value": "Chats Messages Update Replies",
					"action": "Update the navigation property replies in chats",
					"description": "Update the navigation property replies in chats",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}"
						}
					}
				},
				{
					"name": "Chats Messages Replies List Hosted Contents",
					"value": "Chats Messages Replies List Hosted Contents",
					"action": "List hostedContents",
					"description": "Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Chats Messages Replies Create Hosted Contents",
					"value": "Chats Messages Replies Create Hosted Contents",
					"action": "Create new navigation property to hostedContents for chats",
					"description": "Create new navigation property to hostedContents for chats",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents"
						}
					}
				},
				{
					"name": "Chats Messages Replies Delete Hosted Contents",
					"value": "Chats Messages Replies Delete Hosted Contents",
					"action": "Delete navigation property hostedContents for chats",
					"description": "Delete navigation property hostedContents for chats",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Messages Replies Get Hosted Contents",
					"value": "Chats Messages Replies Get Hosted Contents",
					"action": "Get hostedContents from chats",
					"description": "Content in a message hosted by Microsoft Teams - for example, images or code snippets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Messages Replies Update Hosted Contents",
					"value": "Chats Messages Replies Update Hosted Contents",
					"action": "Update the navigation property hostedContents in chats",
					"description": "Update the navigation property hostedContents in chats",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/messages/{{$parameter[\"chatMessage-id\"]}}/replies/{{$parameter[\"chatMessage-id1\"]}}/hostedContents/{{$parameter[\"chatMessageHostedContent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /chats/{chat-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats List Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats List Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats List Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats List Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats List Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats List Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats List Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats List Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats List Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Create Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Create Messages"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chats/{chat-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Delete Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Delete Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Get Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Get Messages"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Get Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/messages/{chatMessage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Update Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/messages/{chatMessage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Update Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Delete Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Get Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Get Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages List Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/replies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/replies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Create Replies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Delete Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Delete Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Get Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Get Replies"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Get Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Update Replies"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies List Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies List Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies Create Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies Delete Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies Delete Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies Get Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies Get Hosted Contents"
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
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies Get Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies Update Hosted Contents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message"
					],
					"operation": [
						"Chats Messages Replies Update Hosted Contents"
					]
				}
			}
		},
];

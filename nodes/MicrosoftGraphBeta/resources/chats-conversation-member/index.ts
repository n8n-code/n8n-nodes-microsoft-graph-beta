import type { INodeProperties } from 'n8n-workflow';

export const chatsConversationMemberDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Conversation Member"
					]
				}
			},
			"options": [
				{
					"name": "Chats List Members",
					"value": "Chats List Members",
					"action": "List members of a chat",
					"description": "List all conversation members in a chat. This method supports federation. For one-on-one chats, at least one chat member must belong to the tenant the request initiates from. For group chats, the chat must be initiated by a user in the tenant the request initiates from.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/members"
						}
					}
				},
				{
					"name": "Chats Create Members",
					"value": "Chats Create Members",
					"action": "Add member to a chat",
					"description": "Add a conversationMember to a chat.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/members"
						}
					}
				},
				{
					"name": "Chats Delete Members",
					"value": "Chats Delete Members",
					"action": "Delete navigation property members for chats",
					"description": "Delete navigation property members for chats",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Get Members",
					"value": "Chats Get Members",
					"action": "Get members from chats",
					"description": "A collection of all the members in the chat. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				},
				{
					"name": "Chats Update Members",
					"value": "Chats Update Members",
					"action": "Update the navigation property members in chats",
					"description": "Update the navigation property members in chats",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/members/{{$parameter[\"conversationMember-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /chats/{chat-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Conversation Member"
					],
					"operation": [
						"Chats List Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats List Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats List Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats List Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats List Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats List Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats List Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats List Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats List Members"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/members",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Conversation Member"
					],
					"operation": [
						"Chats Create Members"
					]
				}
			}
		},
		{
			"displayName": "POST /chats/{chat-id}/members<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Conversation Member"
					],
					"operation": [
						"Chats Create Members"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chats/{chat-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Conversation Member"
					],
					"operation": [
						"Chats Delete Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats Delete Members"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Conversation Member"
					],
					"operation": [
						"Chats Get Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats Get Members"
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
						"Chats Conversation Member"
					],
					"operation": [
						"Chats Get Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/members/{conversationMember-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Conversation Member"
					],
					"operation": [
						"Chats Update Members"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/members/{conversationMember-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Conversation Member"
					],
					"operation": [
						"Chats Update Members"
					]
				}
			}
		},
];

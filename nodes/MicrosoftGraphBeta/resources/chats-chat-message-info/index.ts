import type { INodeProperties } from 'n8n-workflow';

export const chatsChatMessageInfoDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message Info"
					]
				}
			},
			"options": [
				{
					"name": "Chats Delete Last Message Preview",
					"value": "Chats Delete Last Message Preview",
					"action": "Delete navigation property lastMessagePreview for chats",
					"description": "Delete navigation property lastMessagePreview for chats",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/lastMessagePreview"
						}
					}
				},
				{
					"name": "Chats Get Last Message Preview",
					"value": "Chats Get Last Message Preview",
					"action": "Get lastMessagePreview from chats",
					"description": "Preview of the last message sent in the chat. Null if no messages have been sent in the chat. Currently, only the list chats operation supports this property.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/lastMessagePreview"
						}
					}
				},
				{
					"name": "Chats Update Last Message Preview",
					"value": "Chats Update Last Message Preview",
					"action": "Update the navigation property lastMessagePreview in chats",
					"description": "Update the navigation property lastMessagePreview in chats",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/chats/{{$parameter[\"chat-id\"]}}/lastMessagePreview"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /chats/{chat-id}/lastMessagePreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message Info"
					],
					"operation": [
						"Chats Delete Last Message Preview"
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
						"Chats Chat Message Info"
					],
					"operation": [
						"Chats Delete Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /chats/{chat-id}/lastMessagePreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message Info"
					],
					"operation": [
						"Chats Get Last Message Preview"
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
						"Chats Chat Message Info"
					],
					"operation": [
						"Chats Get Last Message Preview"
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
						"Chats Chat Message Info"
					],
					"operation": [
						"Chats Get Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/lastMessagePreview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message Info"
					],
					"operation": [
						"Chats Update Last Message Preview"
					]
				}
			}
		},
		{
			"displayName": "PATCH /chats/{chat-id}/lastMessagePreview<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chats Chat Message Info"
					],
					"operation": [
						"Chats Update Last Message Preview"
					]
				}
			}
		},
];

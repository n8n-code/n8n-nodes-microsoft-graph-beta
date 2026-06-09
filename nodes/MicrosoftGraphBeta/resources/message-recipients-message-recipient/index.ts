import type { INodeProperties } from 'n8n-workflow';

export const messageRecipientsMessageRecipientDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Recipient"
					]
				}
			},
			"options": [
				{
					"name": "Message Recipients Message Recipient List Message Recipient",
					"value": "Message Recipients Message Recipient List Message Recipient",
					"action": "Get entities from messageRecipients",
					"description": "Get entities from messageRecipients",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageRecipients"
						}
					}
				},
				{
					"name": "Message Recipients Message Recipient Create Message Recipient",
					"value": "Message Recipients Message Recipient Create Message Recipient",
					"action": "Add new entity to messageRecipients",
					"description": "Add new entity to messageRecipients",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messageRecipients"
						}
					}
				},
				{
					"name": "Message Recipients Message Recipient Delete Message Recipient",
					"value": "Message Recipients Message Recipient Delete Message Recipient",
					"action": "Delete entity from messageRecipients",
					"description": "Delete entity from messageRecipients",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/messageRecipients/{{$parameter[\"messageRecipient-id\"]}}"
						}
					}
				},
				{
					"name": "Message Recipients Message Recipient Get Message Recipient",
					"value": "Message Recipients Message Recipient Get Message Recipient",
					"action": "Get entity from messageRecipients by key",
					"description": "Get entity from messageRecipients by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageRecipients/{{$parameter[\"messageRecipient-id\"]}}"
						}
					}
				},
				{
					"name": "Message Recipients Message Recipient Update Message Recipient",
					"value": "Message Recipients Message Recipient Update Message Recipient",
					"action": "Update entity in messageRecipients",
					"description": "Update entity in messageRecipients",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/messageRecipients/{{$parameter[\"messageRecipient-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /messageRecipients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient List Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient List Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient List Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient List Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient List Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient List Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient List Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient List Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient List Message Recipient"
					]
				}
			}
		},
		{
			"displayName": "POST /messageRecipients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient Create Message Recipient"
					]
				}
			}
		},
		{
			"displayName": "POST /messageRecipients<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient Create Message Recipient"
					]
				}
			}
		},
		{
			"displayName": "DELETE /messageRecipients/{messageRecipient-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient Delete Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient Delete Message Recipient"
					]
				}
			}
		},
		{
			"displayName": "GET /messageRecipients/{messageRecipient-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient Get Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient Get Message Recipient"
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
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient Get Message Recipient"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageRecipients/{messageRecipient-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient Update Message Recipient"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageRecipients/{messageRecipient-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Recipient"
					],
					"operation": [
						"Message Recipients Message Recipient Update Message Recipient"
					]
				}
			}
		},
];

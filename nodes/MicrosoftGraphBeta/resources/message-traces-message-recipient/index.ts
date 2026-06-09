import type { INodeProperties } from 'n8n-workflow';

export const messageTracesMessageRecipientDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					]
				}
			},
			"options": [
				{
					"name": "Message Traces List Recipients",
					"value": "Message Traces List Recipients",
					"action": "Get recipients from messageTraces",
					"description": "Get recipients from messageTraces",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients"
						}
					}
				},
				{
					"name": "Message Traces Create Recipients",
					"value": "Message Traces Create Recipients",
					"action": "Create new navigation property to recipients for messageTraces",
					"description": "Create new navigation property to recipients for messageTraces",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients"
						}
					}
				},
				{
					"name": "Message Traces Delete Recipients",
					"value": "Message Traces Delete Recipients",
					"action": "Delete navigation property recipients for messageTraces",
					"description": "Delete navigation property recipients for messageTraces",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients/{{$parameter[\"messageRecipient-id\"]}}"
						}
					}
				},
				{
					"name": "Message Traces Get Recipients",
					"value": "Message Traces Get Recipients",
					"action": "Get recipients from messageTraces",
					"description": "Get recipients from messageTraces",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients/{{$parameter[\"messageRecipient-id\"]}}"
						}
					}
				},
				{
					"name": "Message Traces Update Recipients",
					"value": "Message Traces Update Recipients",
					"action": "Update the navigation property recipients in messageTraces",
					"description": "Update the navigation property recipients in messageTraces",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients/{{$parameter[\"messageRecipient-id\"]}}"
						}
					}
				},
				{
					"name": "Message Traces Recipients List Events",
					"value": "Message Traces Recipients List Events",
					"action": "Get events from messageTraces",
					"description": "Get events from messageTraces",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients/{{$parameter[\"messageRecipient-id\"]}}/events"
						}
					}
				},
				{
					"name": "Message Traces Recipients Create Events",
					"value": "Message Traces Recipients Create Events",
					"action": "Create new navigation property to events for messageTraces",
					"description": "Create new navigation property to events for messageTraces",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients/{{$parameter[\"messageRecipient-id\"]}}/events"
						}
					}
				},
				{
					"name": "Message Traces Recipients Delete Events",
					"value": "Message Traces Recipients Delete Events",
					"action": "Delete navigation property events for messageTraces",
					"description": "Delete navigation property events for messageTraces",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients/{{$parameter[\"messageRecipient-id\"]}}/events/{{$parameter[\"messageEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Message Traces Recipients Get Events",
					"value": "Message Traces Recipients Get Events",
					"action": "Get events from messageTraces",
					"description": "Get events from messageTraces",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients/{{$parameter[\"messageRecipient-id\"]}}/events/{{$parameter[\"messageEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Message Traces Recipients Update Events",
					"value": "Message Traces Recipients Update Events",
					"action": "Update the navigation property events in messageTraces",
					"description": "Update the navigation property events in messageTraces",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/messageTraces/{{$parameter[\"messageTrace-id\"]}}/recipients/{{$parameter[\"messageRecipient-id\"]}}/events/{{$parameter[\"messageEvent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /messageTraces/{messageTrace-id}/recipients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces List Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces List Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces List Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces List Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces List Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces List Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces List Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces List Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces List Recipients"
					]
				}
			}
		},
		{
			"displayName": "POST /messageTraces/{messageTrace-id}/recipients",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Create Recipients"
					]
				}
			}
		},
		{
			"displayName": "POST /messageTraces/{messageTrace-id}/recipients<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Create Recipients"
					]
				}
			}
		},
		{
			"displayName": "DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Delete Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Delete Recipients"
					]
				}
			}
		},
		{
			"displayName": "GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Get Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Get Recipients"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Get Recipients"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Update Recipients"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Update Recipients"
					]
				}
			}
		},
		{
			"displayName": "GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients List Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients List Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients List Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients List Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients List Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients List Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients List Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients List Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients List Events"
					]
				}
			}
		},
		{
			"displayName": "POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients Create Events"
					]
				}
			}
		},
		{
			"displayName": "POST /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients Create Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients Delete Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients Delete Events"
					]
				}
			}
		},
		{
			"displayName": "GET /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients Get Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients Get Events"
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
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients Get Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients Update Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageTraces/{messageTrace-id}/recipients/{messageRecipient-id}/events/{messageEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Traces Message Recipient"
					],
					"operation": [
						"Message Traces Recipients Update Events"
					]
				}
			}
		},
];

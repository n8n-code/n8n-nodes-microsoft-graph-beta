import type { INodeProperties } from 'n8n-workflow';

export const messageRecipientsMessageEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Event"
					]
				}
			},
			"options": [
				{
					"name": "Message Recipients List Events",
					"value": "Message Recipients List Events",
					"action": "Get events from messageRecipients",
					"description": "Get events from messageRecipients",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageRecipients/{{$parameter[\"messageRecipient-id\"]}}/events"
						}
					}
				},
				{
					"name": "Message Recipients Create Events",
					"value": "Message Recipients Create Events",
					"action": "Create new navigation property to events for messageRecipients",
					"description": "Create new navigation property to events for messageRecipients",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/messageRecipients/{{$parameter[\"messageRecipient-id\"]}}/events"
						}
					}
				},
				{
					"name": "Message Recipients Delete Events",
					"value": "Message Recipients Delete Events",
					"action": "Delete navigation property events for messageRecipients",
					"description": "Delete navigation property events for messageRecipients",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/messageRecipients/{{$parameter[\"messageRecipient-id\"]}}/events/{{$parameter[\"messageEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Message Recipients Get Events",
					"value": "Message Recipients Get Events",
					"action": "Get events from messageRecipients",
					"description": "Get events from messageRecipients",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/messageRecipients/{{$parameter[\"messageRecipient-id\"]}}/events/{{$parameter[\"messageEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Message Recipients Update Events",
					"value": "Message Recipients Update Events",
					"action": "Update the navigation property events in messageRecipients",
					"description": "Update the navigation property events in messageRecipients",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/messageRecipients/{{$parameter[\"messageRecipient-id\"]}}/events/{{$parameter[\"messageEvent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /messageRecipients/{messageRecipient-id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients List Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients List Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients List Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients List Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients List Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients List Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients List Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients List Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients List Events"
					]
				}
			}
		},
		{
			"displayName": "POST /messageRecipients/{messageRecipient-id}/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients Create Events"
					]
				}
			}
		},
		{
			"displayName": "POST /messageRecipients/{messageRecipient-id}/events<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients Create Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients Delete Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients Delete Events"
					]
				}
			}
		},
		{
			"displayName": "GET /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients Get Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients Get Events"
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
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients Get Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients Update Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /messageRecipients/{messageRecipient-id}/events/{messageEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Recipients Message Event"
					],
					"operation": [
						"Message Recipients Update Events"
					]
				}
			}
		},
];

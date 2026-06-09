import type { INodeProperties } from 'n8n-workflow';

export const subscriptionsSubscriptionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Subscription"
					]
				}
			},
			"options": [
				{
					"name": "Subscriptions Subscription List Subscription",
					"value": "Subscriptions Subscription List Subscription",
					"action": "List subscriptions",
					"description": "Retrieve a list of webhook subscriptions.  The content of the response depends on the context in which the app is calling; for details, see the scenarios in the Permissions section.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions"
						}
					}
				},
				{
					"name": "Subscriptions Subscription Create Subscription",
					"value": "Subscriptions Subscription Create Subscription",
					"action": "Create subscription",
					"description": "Subscribes a listener application to receive change notifications when the requested type of changes occur to the specified resource in Microsoft Graph. See the table in the Permissions section for the list of resources that support subscribing to change notifications. Some resources support the option to include encrypted resource data in change notifications. These resources include chatMessage, contact, event, message, onlineMeetings and presence. For more information, see Set up change notifications that include resource data and Change notifications for Outlook resources in Microsoft Graph.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/subscriptions"
						}
					}
				},
				{
					"name": "Subscriptions Subscription Delete Subscription",
					"value": "Subscriptions Subscription Delete Subscription",
					"action": "Delete subscription",
					"description": "Delete a subscription. For the list of resources that support subscribing to change notifications, see the table in the Permissions section.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Subscriptions Subscription Get Subscription",
					"value": "Subscriptions Subscription Get Subscription",
					"action": "Get subscription",
					"description": "Retrieve the properties and relationships of a subscription. See the table in the Permissions section for the list of resources that support subscribing to change notifications.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				},
				{
					"name": "Subscriptions Subscription Update Subscription",
					"value": "Subscriptions Subscription Update Subscription",
					"action": "Update subscription",
					"description": "Renew a subscription by extending its expiry time. The table in the Permissions section lists the resources that support subscribing to change notifications. Subscriptions expire after a length of time that varies by resource type. In order to avoid missing change notifications, an app should renew its subscriptions well in advance of their expiry date. See subscription for maximum length of a subscription for each resource type.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/subscriptions/{{$parameter[\"subscription-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription List Subscription"
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
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription List Subscription"
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
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription List Subscription"
					]
				}
			}
		},
		{
			"displayName": "POST /subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "POST /subscriptions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription Create Subscription"
					]
				}
			}
		},
		{
			"displayName": "DELETE /subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription Delete Subscription"
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
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription Delete Subscription"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription Get Subscription"
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
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription Get Subscription"
					]
				}
			}
		},
		{
			"displayName": "PATCH /subscriptions/{subscription-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription Update Subscription"
					]
				}
			}
		},
		{
			"displayName": "PATCH /subscriptions/{subscription-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions Subscription"
					],
					"operation": [
						"Subscriptions Subscription Update Subscription"
					]
				}
			}
		},
];

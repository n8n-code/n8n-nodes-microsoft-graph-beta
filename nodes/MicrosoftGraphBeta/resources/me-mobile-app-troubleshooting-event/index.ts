import type { INodeProperties } from 'n8n-workflow';

export const meMobileAppTroubleshootingEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					]
				}
			},
			"options": [
				{
					"name": "Me List Mobile App Troubleshooting Events",
					"value": "Me List Mobile App Troubleshooting Events",
					"action": "Get mobileAppTroubleshootingEvents from me",
					"description": "The list of mobile app troubleshooting events for this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mobileAppTroubleshootingEvents"
						}
					}
				},
				{
					"name": "Me Create Mobile App Troubleshooting Events",
					"value": "Me Create Mobile App Troubleshooting Events",
					"action": "Create new navigation property to mobileAppTroubleshootingEvents for me",
					"description": "Create new navigation property to mobileAppTroubleshootingEvents for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mobileAppTroubleshootingEvents"
						}
					}
				},
				{
					"name": "Me Delete Mobile App Troubleshooting Events",
					"value": "Me Delete Mobile App Troubleshooting Events",
					"action": "Delete navigation property mobileAppTroubleshootingEvents for me",
					"description": "Delete navigation property mobileAppTroubleshootingEvents for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Mobile App Troubleshooting Events",
					"value": "Me Get Mobile App Troubleshooting Events",
					"action": "Get mobileAppTroubleshootingEvents from me",
					"description": "The list of mobile app troubleshooting events for this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Mobile App Troubleshooting Events",
					"value": "Me Update Mobile App Troubleshooting Events",
					"action": "Update the navigation property mobileAppTroubleshootingEvents in me",
					"description": "Update the navigation property mobileAppTroubleshootingEvents in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mobile App Troubleshooting Events List App Log Collection Requests",
					"value": "Me Mobile App Troubleshooting Events List App Log Collection Requests",
					"action": "Get appLogCollectionRequests from me",
					"description": "The collection property of AppLogUploadRequest.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests"
						}
					}
				},
				{
					"name": "Me Mobile App Troubleshooting Events Create App Log Collection Requests",
					"value": "Me Mobile App Troubleshooting Events Create App Log Collection Requests",
					"action": "Create new navigation property to appLogCollectionRequests for me",
					"description": "Create new navigation property to appLogCollectionRequests for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests"
						}
					}
				},
				{
					"name": "Me Mobile App Troubleshooting Events Delete App Log Collection Requests",
					"value": "Me Mobile App Troubleshooting Events Delete App Log Collection Requests",
					"action": "Delete navigation property appLogCollectionRequests for me",
					"description": "Delete navigation property appLogCollectionRequests for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mobile App Troubleshooting Events Get App Log Collection Requests",
					"value": "Me Mobile App Troubleshooting Events Get App Log Collection Requests",
					"action": "Get appLogCollectionRequests from me",
					"description": "The collection property of AppLogUploadRequest.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Me Mobile App Troubleshooting Events Update App Log Collection Requests",
					"value": "Me Mobile App Troubleshooting Events Update App Log Collection Requests",
					"action": "Update the navigation property appLogCollectionRequests in me",
					"description": "Update the navigation property appLogCollectionRequests in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/mobileAppTroubleshootingEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me List Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me List Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me List Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me List Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me List Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me List Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me List Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me List Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me List Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mobileAppTroubleshootingEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Create Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mobileAppTroubleshootingEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Create Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Delete Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Delete Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Get Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Get Mobile App Troubleshooting Events"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Get Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Update Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Update Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events List App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events Create App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events Create App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events Delete App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events Delete App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events Get App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events Get App Log Collection Requests"
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
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events Get App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events Update App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Mobile App Troubleshooting Event"
					],
					"operation": [
						"Me Mobile App Troubleshooting Events Update App Log Collection Requests"
					]
				}
			}
		},
];

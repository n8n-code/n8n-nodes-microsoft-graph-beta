import type { INodeProperties } from 'n8n-workflow';

export const usersMobileAppTroubleshootingEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					]
				}
			},
			"options": [
				{
					"name": "Users List Mobile App Troubleshooting Events",
					"value": "Users List Mobile App Troubleshooting Events",
					"action": "Get mobileAppTroubleshootingEvents from users",
					"description": "The list of mobile app troubleshooting events for this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents"
						}
					}
				},
				{
					"name": "Users Create Mobile App Troubleshooting Events",
					"value": "Users Create Mobile App Troubleshooting Events",
					"action": "Create new navigation property to mobileAppTroubleshootingEvents for users",
					"description": "Create new navigation property to mobileAppTroubleshootingEvents for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents"
						}
					}
				},
				{
					"name": "Users Delete Mobile App Troubleshooting Events",
					"value": "Users Delete Mobile App Troubleshooting Events",
					"action": "Delete navigation property mobileAppTroubleshootingEvents for users",
					"description": "Delete navigation property mobileAppTroubleshootingEvents for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Mobile App Troubleshooting Events",
					"value": "Users Get Mobile App Troubleshooting Events",
					"action": "Get mobileAppTroubleshootingEvents from users",
					"description": "The list of mobile app troubleshooting events for this user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Mobile App Troubleshooting Events",
					"value": "Users Update Mobile App Troubleshooting Events",
					"action": "Update the navigation property mobileAppTroubleshootingEvents in users",
					"description": "Update the navigation property mobileAppTroubleshootingEvents in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mobile App Troubleshooting Events List App Log Collection Requests",
					"value": "Users Mobile App Troubleshooting Events List App Log Collection Requests",
					"action": "Get appLogCollectionRequests from users",
					"description": "The collection property of AppLogUploadRequest.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests"
						}
					}
				},
				{
					"name": "Users Mobile App Troubleshooting Events Create App Log Collection Requests",
					"value": "Users Mobile App Troubleshooting Events Create App Log Collection Requests",
					"action": "Create new navigation property to appLogCollectionRequests for users",
					"description": "Create new navigation property to appLogCollectionRequests for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests"
						}
					}
				},
				{
					"name": "Users Mobile App Troubleshooting Events Delete App Log Collection Requests",
					"value": "Users Mobile App Troubleshooting Events Delete App Log Collection Requests",
					"action": "Delete navigation property appLogCollectionRequests for users",
					"description": "Delete navigation property appLogCollectionRequests for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mobile App Troubleshooting Events Get App Log Collection Requests",
					"value": "Users Mobile App Troubleshooting Events Get App Log Collection Requests",
					"action": "Get appLogCollectionRequests from users",
					"description": "The collection property of AppLogUploadRequest.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Users Mobile App Troubleshooting Events Update App Log Collection Requests",
					"value": "Users Mobile App Troubleshooting Events Update App Log Collection Requests",
					"action": "Update the navigation property appLogCollectionRequests in users",
					"description": "Update the navigation property appLogCollectionRequests in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/mobileAppTroubleshootingEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users List Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users List Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users List Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users List Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users List Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users List Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users List Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users List Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users List Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mobileAppTroubleshootingEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Create Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mobileAppTroubleshootingEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Create Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Delete Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Delete Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Get Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Get Mobile App Troubleshooting Events"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Get Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Update Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Update Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events List App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events Create App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events Create App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events Delete App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events Delete App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events Get App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events Get App Log Collection Requests"
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
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events Get App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events Update App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Mobile App Troubleshooting Event"
					],
					"operation": [
						"Users Mobile App Troubleshooting Events Update App Log Collection Requests"
					]
				}
			}
		},
];

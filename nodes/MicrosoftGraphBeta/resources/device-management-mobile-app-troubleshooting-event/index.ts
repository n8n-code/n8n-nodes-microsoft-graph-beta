import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementMobileAppTroubleshootingEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Mobile App Troubleshooting Events",
					"value": "Device Management List Mobile App Troubleshooting Events",
					"action": "Get mobileAppTroubleshootingEvents from deviceManagement",
					"description": "The collection property of MobileAppTroubleshootingEvent.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents"
						}
					}
				},
				{
					"name": "Device Management Create Mobile App Troubleshooting Events",
					"value": "Device Management Create Mobile App Troubleshooting Events",
					"action": "Create new navigation property to mobileAppTroubleshootingEvents for deviceManagement",
					"description": "Create new navigation property to mobileAppTroubleshootingEvents for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents"
						}
					}
				},
				{
					"name": "Device Management Delete Mobile App Troubleshooting Events",
					"value": "Device Management Delete Mobile App Troubleshooting Events",
					"action": "Delete navigation property mobileAppTroubleshootingEvents for deviceManagement",
					"description": "Delete navigation property mobileAppTroubleshootingEvents for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Mobile App Troubleshooting Events",
					"value": "Device Management Get Mobile App Troubleshooting Events",
					"action": "Get mobileAppTroubleshootingEvents from deviceManagement",
					"description": "The collection property of MobileAppTroubleshootingEvent.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Mobile App Troubleshooting Events",
					"value": "Device Management Update Mobile App Troubleshooting Events",
					"action": "Update the navigation property mobileAppTroubleshootingEvents in deviceManagement",
					"description": "Update the navigation property mobileAppTroubleshootingEvents in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Mobile App Troubleshooting Events List App Log Collection Requests",
					"value": "Device Management Mobile App Troubleshooting Events List App Log Collection Requests",
					"action": "Get appLogCollectionRequests from deviceManagement",
					"description": "The collection property of AppLogUploadRequest.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests"
						}
					}
				},
				{
					"name": "Device Management Mobile App Troubleshooting Events Create App Log Collection Requests",
					"value": "Device Management Mobile App Troubleshooting Events Create App Log Collection Requests",
					"action": "Create new navigation property to appLogCollectionRequests for deviceManagement",
					"description": "Create new navigation property to appLogCollectionRequests for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests"
						}
					}
				},
				{
					"name": "Device Management Mobile App Troubleshooting Events Delete App Log Collection Requests",
					"value": "Device Management Mobile App Troubleshooting Events Delete App Log Collection Requests",
					"action": "Delete navigation property appLogCollectionRequests for deviceManagement",
					"description": "Delete navigation property appLogCollectionRequests for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Mobile App Troubleshooting Events Get App Log Collection Requests",
					"value": "Device Management Mobile App Troubleshooting Events Get App Log Collection Requests",
					"action": "Get appLogCollectionRequests from deviceManagement",
					"description": "The collection property of AppLogUploadRequest.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Mobile App Troubleshooting Events Update App Log Collection Requests",
					"value": "Device Management Mobile App Troubleshooting Events Update App Log Collection Requests",
					"action": "Update the navigation property appLogCollectionRequests in deviceManagement",
					"description": "Update the navigation property appLogCollectionRequests in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/mobileAppTroubleshootingEvents/{{$parameter[\"mobileAppTroubleshootingEvent-id\"]}}/appLogCollectionRequests/{{$parameter[\"appLogCollectionRequest-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/mobileAppTroubleshootingEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management List Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management List Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management List Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management List Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management List Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management List Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management List Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management List Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management List Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/mobileAppTroubleshootingEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Create Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/mobileAppTroubleshootingEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Create Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Delete Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Delete Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Get Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Get Mobile App Troubleshooting Events"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Get Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Update Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Update Mobile App Troubleshooting Events"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events List App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events List App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Create App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Create App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Delete App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Delete App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Get App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Get App Log Collection Requests"
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
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Get App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Update App Log Collection Requests"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent-id}/appLogCollectionRequests/{appLogCollectionRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Mobile App Troubleshooting Event"
					],
					"operation": [
						"Device Management Mobile App Troubleshooting Events Update App Log Collection Requests"
					]
				}
			}
		},
];

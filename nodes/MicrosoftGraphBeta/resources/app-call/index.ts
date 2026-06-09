import type { INodeProperties } from 'n8n-workflow';

export const appCallDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					]
				}
			},
			"options": [
				{
					"name": "App List Calls",
					"value": "App List Calls",
					"action": "Get calls from app",
					"description": "Get calls from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls"
						}
					}
				},
				{
					"name": "App Create Calls",
					"value": "App Create Calls",
					"action": "Create new navigation property to calls for app",
					"description": "Create new navigation property to calls for app",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls"
						}
					}
				},
				{
					"name": "App Delete Calls",
					"value": "App Delete Calls",
					"action": "Delete navigation property calls for app",
					"description": "Delete navigation property calls for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}"
						}
					}
				},
				{
					"name": "App Get Calls",
					"value": "App Get Calls",
					"action": "Get calls from app",
					"description": "Get calls from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}"
						}
					}
				},
				{
					"name": "App Update Calls",
					"value": "App Update Calls",
					"action": "Update the navigation property calls in app",
					"description": "Update the navigation property calls in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls List Audio Routing Groups",
					"value": "App Calls List Audio Routing Groups",
					"action": "List audio routing groups",
					"description": "Retrieve a list of **audioRoutingGroup** objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups"
						}
					}
				},
				{
					"name": "App Calls Create Audio Routing Groups",
					"value": "App Calls Create Audio Routing Groups",
					"action": "Create audio routing group",
					"description": "Create a new **audioRoutingGroup**.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups"
						}
					}
				},
				{
					"name": "App Calls Delete Audio Routing Groups",
					"value": "App Calls Delete Audio Routing Groups",
					"action": "Delete navigation property audioRoutingGroups for app",
					"description": "Delete navigation property audioRoutingGroups for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups/{{$parameter[\"audioRoutingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls Get Audio Routing Groups",
					"value": "App Calls Get Audio Routing Groups",
					"action": "Get audioRoutingGroups from app",
					"description": "Get audioRoutingGroups from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups/{{$parameter[\"audioRoutingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls Update Audio Routing Groups",
					"value": "App Calls Update Audio Routing Groups",
					"action": "Update the navigation property audioRoutingGroups in app",
					"description": "Update the navigation property audioRoutingGroups in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups/{{$parameter[\"audioRoutingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls List Content Sharing Sessions",
					"value": "App Calls List Content Sharing Sessions",
					"action": "List contentSharingSessions",
					"description": "Retrieve a list of contentSharingSession objects in a call.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions"
						}
					}
				},
				{
					"name": "App Calls Create Content Sharing Sessions",
					"value": "App Calls Create Content Sharing Sessions",
					"action": "Create new navigation property to contentSharingSessions for app",
					"description": "Create new navigation property to contentSharingSessions for app",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions"
						}
					}
				},
				{
					"name": "App Calls Delete Content Sharing Sessions",
					"value": "App Calls Delete Content Sharing Sessions",
					"action": "Delete navigation property contentSharingSessions for app",
					"description": "Delete navigation property contentSharingSessions for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions/{{$parameter[\"contentSharingSession-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls Get Content Sharing Sessions",
					"value": "App Calls Get Content Sharing Sessions",
					"action": "Get contentSharingSessions from app",
					"description": "Get contentSharingSessions from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions/{{$parameter[\"contentSharingSession-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls Update Content Sharing Sessions",
					"value": "App Calls Update Content Sharing Sessions",
					"action": "Update the navigation property contentSharingSessions in app",
					"description": "Update the navigation property contentSharingSessions in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions/{{$parameter[\"contentSharingSession-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls List Operations",
					"value": "App Calls List Operations",
					"action": "Get operations from app",
					"description": "Get operations from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/operations"
						}
					}
				},
				{
					"name": "App Calls Create Operations",
					"value": "App Calls Create Operations",
					"action": "Create new navigation property to operations for app",
					"description": "Create new navigation property to operations for app",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/operations"
						}
					}
				},
				{
					"name": "App Calls Delete Operations",
					"value": "App Calls Delete Operations",
					"action": "Delete navigation property operations for app",
					"description": "Delete navigation property operations for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/operations/{{$parameter[\"commsOperation-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls Get Operations",
					"value": "App Calls Get Operations",
					"action": "Get operations from app",
					"description": "Get operations from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/operations/{{$parameter[\"commsOperation-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls Update Operations",
					"value": "App Calls Update Operations",
					"action": "Update the navigation property operations in app",
					"description": "Update the navigation property operations in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/operations/{{$parameter[\"commsOperation-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls List Participants",
					"value": "App Calls List Participants",
					"action": "List participants",
					"description": "Retrieve a list of participant objects in the call.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants"
						}
					}
				},
				{
					"name": "App Calls Create Participants",
					"value": "App Calls Create Participants",
					"action": "Create new navigation property to participants for app",
					"description": "Create new navigation property to participants for app",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants"
						}
					}
				},
				{
					"name": "App Calls Delete Participants",
					"value": "App Calls Delete Participants",
					"action": "Delete navigation property participants for app",
					"description": "Delete navigation property participants for app",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls Get Participants",
					"value": "App Calls Get Participants",
					"action": "Get participants from app",
					"description": "Get participants from app",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}"
						}
					}
				},
				{
					"name": "App Calls Update Participants",
					"value": "App Calls Update Participants",
					"action": "Update the navigation property participants in app",
					"description": "Update the navigation property participants in app",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/app/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /app/calls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App List Calls"
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
						"App Call"
					],
					"operation": [
						"App List Calls"
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
						"App Call"
					],
					"operation": [
						"App List Calls"
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
						"App Call"
					],
					"operation": [
						"App List Calls"
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
						"App Call"
					],
					"operation": [
						"App List Calls"
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
						"App Call"
					],
					"operation": [
						"App List Calls"
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
						"App Call"
					],
					"operation": [
						"App List Calls"
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
						"App Call"
					],
					"operation": [
						"App List Calls"
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
						"App Call"
					],
					"operation": [
						"App List Calls"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Create Calls"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Create Calls"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/calls/{call-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Delete Calls"
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
						"App Call"
					],
					"operation": [
						"App Delete Calls"
					]
				}
			}
		},
		{
			"displayName": "GET /app/calls/{call-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Get Calls"
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
						"App Call"
					],
					"operation": [
						"App Get Calls"
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
						"App Call"
					],
					"operation": [
						"App Get Calls"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Update Calls"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Update Calls"
					]
				}
			}
		},
		{
			"displayName": "GET /app/calls/{call-id}/audioRoutingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls List Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls List Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls List Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls List Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls List Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls List Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls List Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls List Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls List Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/audioRoutingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Create Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/audioRoutingGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Create Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Delete Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls Delete Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Get Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls Get Audio Routing Groups"
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
						"App Call"
					],
					"operation": [
						"App Calls Get Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Update Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Update Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /app/calls/{call-id}/contentSharingSessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls List Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls List Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls List Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls List Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls List Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls List Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls List Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls List Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls List Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/contentSharingSessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Create Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/contentSharingSessions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Create Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Delete Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls Delete Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Get Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls Get Content Sharing Sessions"
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
						"App Call"
					],
					"operation": [
						"App Calls Get Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Update Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Update Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /app/calls/{call-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls List Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls List Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls List Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls List Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls List Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls List Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls List Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls List Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/calls/{call-id}/operations/{commsOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Delete Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /app/calls/{call-id}/operations/{commsOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Get Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls Get Operations"
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
						"App Call"
					],
					"operation": [
						"App Calls Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}/operations/{commsOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}/operations/{commsOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /app/calls/{call-id}/participants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls List Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls List Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls List Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls List Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls List Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls List Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls List Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls List Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls List Participants"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/participants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Create Participants"
					]
				}
			}
		},
		{
			"displayName": "POST /app/calls/{call-id}/participants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Create Participants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /app/calls/{call-id}/participants/{participant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Delete Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls Delete Participants"
					]
				}
			}
		},
		{
			"displayName": "GET /app/calls/{call-id}/participants/{participant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Get Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls Get Participants"
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
						"App Call"
					],
					"operation": [
						"App Calls Get Participants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}/participants/{participant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Update Participants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /app/calls/{call-id}/participants/{participant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"App Call"
					],
					"operation": [
						"App Calls Update Participants"
					]
				}
			}
		},
];

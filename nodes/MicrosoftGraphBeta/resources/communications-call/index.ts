import type { INodeProperties } from 'n8n-workflow';

export const communicationsCallDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					]
				}
			},
			"options": [
				{
					"name": "Communications List Calls",
					"value": "Communications List Calls",
					"action": "Get calls from communications",
					"description": "Get calls from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls"
						}
					}
				},
				{
					"name": "Communications Create Calls",
					"value": "Communications Create Calls",
					"action": "Create call",
					"description": "Create call enables your bot to create a new outgoing peer-to-peer or group call, or join an existing meeting. You will need to register the calling bot and go through the list of permissions needed.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls"
						}
					}
				},
				{
					"name": "Communications Delete Calls",
					"value": "Communications Delete Calls",
					"action": "Delete navigation property calls for communications",
					"description": "Delete navigation property calls for communications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Get Calls",
					"value": "Communications Get Calls",
					"action": "Get calls from communications",
					"description": "Get calls from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Update Calls",
					"value": "Communications Update Calls",
					"action": "Update the navigation property calls in communications",
					"description": "Update the navigation property calls in communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls List Audio Routing Groups",
					"value": "Communications Calls List Audio Routing Groups",
					"action": "List audio routing groups",
					"description": "Retrieve a list of **audioRoutingGroup** objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups"
						}
					}
				},
				{
					"name": "Communications Calls Create Audio Routing Groups",
					"value": "Communications Calls Create Audio Routing Groups",
					"action": "Create audio routing group",
					"description": "Create a new **audioRoutingGroup**.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups"
						}
					}
				},
				{
					"name": "Communications Calls Delete Audio Routing Groups",
					"value": "Communications Calls Delete Audio Routing Groups",
					"action": "Delete navigation property audioRoutingGroups for communications",
					"description": "Delete navigation property audioRoutingGroups for communications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups/{{$parameter[\"audioRoutingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls Get Audio Routing Groups",
					"value": "Communications Calls Get Audio Routing Groups",
					"action": "Get audioRoutingGroups from communications",
					"description": "Get audioRoutingGroups from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups/{{$parameter[\"audioRoutingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls Update Audio Routing Groups",
					"value": "Communications Calls Update Audio Routing Groups",
					"action": "Update the navigation property audioRoutingGroups in communications",
					"description": "Update the navigation property audioRoutingGroups in communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/audioRoutingGroups/{{$parameter[\"audioRoutingGroup-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls List Content Sharing Sessions",
					"value": "Communications Calls List Content Sharing Sessions",
					"action": "List contentSharingSessions",
					"description": "Retrieve a list of contentSharingSession objects in a call.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions"
						}
					}
				},
				{
					"name": "Communications Calls Create Content Sharing Sessions",
					"value": "Communications Calls Create Content Sharing Sessions",
					"action": "Create new navigation property to contentSharingSessions for communications",
					"description": "Create new navigation property to contentSharingSessions for communications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions"
						}
					}
				},
				{
					"name": "Communications Calls Delete Content Sharing Sessions",
					"value": "Communications Calls Delete Content Sharing Sessions",
					"action": "Delete navigation property contentSharingSessions for communications",
					"description": "Delete navigation property contentSharingSessions for communications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions/{{$parameter[\"contentSharingSession-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls Get Content Sharing Sessions",
					"value": "Communications Calls Get Content Sharing Sessions",
					"action": "Get contentSharingSessions from communications",
					"description": "Get contentSharingSessions from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions/{{$parameter[\"contentSharingSession-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls Update Content Sharing Sessions",
					"value": "Communications Calls Update Content Sharing Sessions",
					"action": "Update the navigation property contentSharingSessions in communications",
					"description": "Update the navigation property contentSharingSessions in communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/contentSharingSessions/{{$parameter[\"contentSharingSession-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls List Operations",
					"value": "Communications Calls List Operations",
					"action": "Get operations from communications",
					"description": "Get operations from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Communications Calls Create Operations",
					"value": "Communications Calls Create Operations",
					"action": "Create new navigation property to operations for communications",
					"description": "Create new navigation property to operations for communications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/operations"
						}
					}
				},
				{
					"name": "Communications Calls Delete Operations",
					"value": "Communications Calls Delete Operations",
					"action": "Delete navigation property operations for communications",
					"description": "Delete navigation property operations for communications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/operations/{{$parameter[\"commsOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls Get Operations",
					"value": "Communications Calls Get Operations",
					"action": "Get operations from communications",
					"description": "Get operations from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/operations/{{$parameter[\"commsOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls Update Operations",
					"value": "Communications Calls Update Operations",
					"action": "Update the navigation property operations in communications",
					"description": "Update the navigation property operations in communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/operations/{{$parameter[\"commsOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls List Participants",
					"value": "Communications Calls List Participants",
					"action": "List participants",
					"description": "Retrieve a list of participant objects in the call.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants"
						}
					}
				},
				{
					"name": "Communications Calls Create Participants",
					"value": "Communications Calls Create Participants",
					"action": "Create new navigation property to participants for communications",
					"description": "Create new navigation property to participants for communications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants"
						}
					}
				},
				{
					"name": "Communications Calls Delete Participants",
					"value": "Communications Calls Delete Participants",
					"action": "Delete navigation property participants for communications",
					"description": "Delete navigation property participants for communications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls Get Participants",
					"value": "Communications Calls Get Participants",
					"action": "Get participants from communications",
					"description": "Get participants from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Calls Update Participants",
					"value": "Communications Calls Update Participants",
					"action": "Update the navigation property participants in communications",
					"description": "Update the navigation property participants in communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications/calls/{{$parameter[\"call-id\"]}}/participants/{{$parameter[\"participant-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /communications/calls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications List Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications List Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications List Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications List Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications List Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications List Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications List Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications List Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications List Calls"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Create Calls"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Create Calls"
					]
				}
			}
		},
		{
			"displayName": "DELETE /communications/calls/{call-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Delete Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications Delete Calls"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/calls/{call-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Get Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications Get Calls"
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
						"Communications Call"
					],
					"operation": [
						"Communications Get Calls"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Update Calls"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Update Calls"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/calls/{call-id}/audioRoutingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/audioRoutingGroups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Create Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/audioRoutingGroups<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Create Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Delete Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Delete Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Audio Routing Groups"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Update Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}/audioRoutingGroups/{audioRoutingGroup-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Update Audio Routing Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/calls/{call-id}/contentSharingSessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/contentSharingSessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Create Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/contentSharingSessions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Create Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Delete Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Delete Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Content Sharing Sessions"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Update Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}/contentSharingSessions/{contentSharingSession-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Update Content Sharing Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/calls/{call-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /communications/calls/{call-id}/operations/{commsOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Delete Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/calls/{call-id}/operations/{commsOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Operations"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}/operations/{commsOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}/operations/{commsOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/calls/{call-id}/participants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls List Participants"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/participants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Create Participants"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/calls/{call-id}/participants<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Create Participants"
					]
				}
			}
		},
		{
			"displayName": "DELETE /communications/calls/{call-id}/participants/{participant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Delete Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Delete Participants"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/calls/{call-id}/participants/{participant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Participants"
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
						"Communications Call"
					],
					"operation": [
						"Communications Calls Get Participants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}/participants/{participant-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Update Participants"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/calls/{call-id}/participants/{participant-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call"
					],
					"operation": [
						"Communications Calls Update Participants"
					]
				}
			}
		},
];

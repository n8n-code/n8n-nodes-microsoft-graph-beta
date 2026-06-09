import type { INodeProperties } from 'n8n-workflow';

export const communicationsCallRecordDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					]
				}
			},
			"options": [
				{
					"name": "Communications List Call Records",
					"value": "Communications List Call Records",
					"action": "Get callRecords from communications",
					"description": "Get callRecords from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/callRecords"
						}
					}
				},
				{
					"name": "Communications Create Call Records",
					"value": "Communications Create Call Records",
					"action": "Create new navigation property to callRecords for communications",
					"description": "Create new navigation property to callRecords for communications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/callRecords"
						}
					}
				},
				{
					"name": "Communications Delete Call Records",
					"value": "Communications Delete Call Records",
					"action": "Delete navigation property callRecords for communications",
					"description": "Delete navigation property callRecords for communications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Get Call Records",
					"value": "Communications Get Call Records",
					"action": "Get callRecords from communications",
					"description": "Get callRecords from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Update Call Records",
					"value": "Communications Update Call Records",
					"action": "Update the navigation property callRecords in communications",
					"description": "Update the navigation property callRecords in communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Call Records List Sessions",
					"value": "Communications Call Records List Sessions",
					"action": "List callRecord sessions",
					"description": "Retrieve the list of sessions associated with a callRecord object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions"
						}
					}
				},
				{
					"name": "Communications Call Records Create Sessions",
					"value": "Communications Call Records Create Sessions",
					"action": "Create new navigation property to sessions for communications",
					"description": "Create new navigation property to sessions for communications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions"
						}
					}
				},
				{
					"name": "Communications Call Records Delete Sessions",
					"value": "Communications Call Records Delete Sessions",
					"action": "Delete navigation property sessions for communications",
					"description": "Delete navigation property sessions for communications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions/{{$parameter[\"session-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Call Records Get Sessions",
					"value": "Communications Call Records Get Sessions",
					"action": "Get sessions from communications",
					"description": "List of sessions involved in the call. Peer-to-peer calls typically only have one session, whereas group calls typically have at least one session per participant. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions/{{$parameter[\"session-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Call Records Update Sessions",
					"value": "Communications Call Records Update Sessions",
					"action": "Update the navigation property sessions in communications",
					"description": "Update the navigation property sessions in communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions/{{$parameter[\"session-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Call Records Sessions List Segments",
					"value": "Communications Call Records Sessions List Segments",
					"action": "Get segments from communications",
					"description": "The list of segments involved in the session. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions/{{$parameter[\"session-id\"]}}/segments"
						}
					}
				},
				{
					"name": "Communications Call Records Sessions Create Segments",
					"value": "Communications Call Records Sessions Create Segments",
					"action": "Create new navigation property to segments for communications",
					"description": "Create new navigation property to segments for communications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions/{{$parameter[\"session-id\"]}}/segments"
						}
					}
				},
				{
					"name": "Communications Call Records Sessions Delete Segments",
					"value": "Communications Call Records Sessions Delete Segments",
					"action": "Delete navigation property segments for communications",
					"description": "Delete navigation property segments for communications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions/{{$parameter[\"session-id\"]}}/segments/{{$parameter[\"segment-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Call Records Sessions Get Segments",
					"value": "Communications Call Records Sessions Get Segments",
					"action": "Get segments from communications",
					"description": "The list of segments involved in the session. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions/{{$parameter[\"session-id\"]}}/segments/{{$parameter[\"segment-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Call Records Sessions Update Segments",
					"value": "Communications Call Records Sessions Update Segments",
					"action": "Update the navigation property segments in communications",
					"description": "Update the navigation property segments in communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications/callRecords/{{$parameter[\"callRecord-id\"]}}/sessions/{{$parameter[\"session-id\"]}}/segments/{{$parameter[\"segment-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /communications/callRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications List Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications List Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications List Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications List Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications List Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications List Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications List Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications List Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications List Call Records"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/callRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Create Call Records"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/callRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Create Call Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /communications/callRecords/{callRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Delete Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Delete Call Records"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/callRecords/{callRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Get Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Get Call Records"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Get Call Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/callRecords/{callRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Update Call Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/callRecords/{callRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Update Call Records"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/callRecords/{callRecord-id}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records List Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records List Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records List Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records List Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records List Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records List Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records List Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records List Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records List Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/callRecords/{callRecord-id}/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Create Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/callRecords/{callRecord-id}/sessions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Create Sessions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Delete Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Delete Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/callRecords/{callRecord-id}/sessions/{session-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Get Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Get Sessions"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Get Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Update Sessions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Update Sessions"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions List Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions List Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions List Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions List Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions List Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions List Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions List Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions List Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions List Segments"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions Create Segments"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions Create Segments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions Delete Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions Delete Segments"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions Get Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions Get Segments"
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
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions Get Segments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions Update Segments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/callRecords/{callRecord-id}/sessions/{session-id}/segments/{segment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Call Record"
					],
					"operation": [
						"Communications Call Records Sessions Update Segments"
					]
				}
			}
		},
];

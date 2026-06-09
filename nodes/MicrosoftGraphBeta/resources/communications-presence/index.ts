import type { INodeProperties } from 'n8n-workflow';

export const communicationsPresenceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Presence"
					]
				}
			},
			"options": [
				{
					"name": "Communications List Presences",
					"value": "Communications List Presences",
					"action": "Get presences from communications",
					"description": "Get presences from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/presences"
						}
					}
				},
				{
					"name": "Communications Create Presences",
					"value": "Communications Create Presences",
					"action": "Create new navigation property to presences for communications",
					"description": "Create new navigation property to presences for communications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communications/presences"
						}
					}
				},
				{
					"name": "Communications Delete Presences",
					"value": "Communications Delete Presences",
					"action": "Delete navigation property presences for communications",
					"description": "Delete navigation property presences for communications",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/communications/presences/{{$parameter[\"presence-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Get Presences",
					"value": "Communications Get Presences",
					"action": "Get presences from communications",
					"description": "Get presences from communications",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communications/presences/{{$parameter[\"presence-id\"]}}"
						}
					}
				},
				{
					"name": "Communications Update Presences",
					"value": "Communications Update Presences",
					"action": "Update the navigation property presences in communications",
					"description": "Update the navigation property presences in communications",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/communications/presences/{{$parameter[\"presence-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /communications/presences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Presence"
					],
					"operation": [
						"Communications List Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications List Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications List Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications List Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications List Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications List Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications List Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications List Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications List Presences"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/presences",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Presence"
					],
					"operation": [
						"Communications Create Presences"
					]
				}
			}
		},
		{
			"displayName": "POST /communications/presences<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Presence"
					],
					"operation": [
						"Communications Create Presences"
					]
				}
			}
		},
		{
			"displayName": "DELETE /communications/presences/{presence-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Presence"
					],
					"operation": [
						"Communications Delete Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications Delete Presences"
					]
				}
			}
		},
		{
			"displayName": "GET /communications/presences/{presence-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Presence"
					],
					"operation": [
						"Communications Get Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications Get Presences"
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
						"Communications Presence"
					],
					"operation": [
						"Communications Get Presences"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/presences/{presence-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Presence"
					],
					"operation": [
						"Communications Update Presences"
					]
				}
			}
		},
		{
			"displayName": "PATCH /communications/presences/{presence-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Communications Presence"
					],
					"operation": [
						"Communications Update Presences"
					]
				}
			}
		},
];

import type { INodeProperties } from 'n8n-workflow';

export const securityTriggersRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					]
				}
			},
			"options": [
				{
					"name": "Security Delete Triggers",
					"value": "Security Delete Triggers",
					"action": "Delete navigation property triggers for security",
					"description": "Delete navigation property triggers for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/triggers"
						}
					}
				},
				{
					"name": "Security Get Triggers",
					"value": "Security Get Triggers",
					"action": "Get triggers from security",
					"description": "Get triggers from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/triggers"
						}
					}
				},
				{
					"name": "Security Update Triggers",
					"value": "Security Update Triggers",
					"action": "Update the navigation property triggers in security",
					"description": "Update the navigation property triggers in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/triggers"
						}
					}
				},
				{
					"name": "Security Triggers List Retention Events",
					"value": "Security Triggers List Retention Events",
					"action": "List retentionEvents",
					"description": "Get a list of the retentionEvent objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/triggers/retentionEvents"
						}
					}
				},
				{
					"name": "Security Triggers Create Retention Events",
					"value": "Security Triggers Create Retention Events",
					"action": "Create retentionEvent",
					"description": "Create a new retentionEvent object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/triggers/retentionEvents"
						}
					}
				},
				{
					"name": "Security Triggers Delete Retention Events",
					"value": "Security Triggers Delete Retention Events",
					"action": "Delete navigation property retentionEvents for security",
					"description": "Delete navigation property retentionEvents for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/triggers/retentionEvents/{{$parameter[\"retentionEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Security Triggers Get Retention Events",
					"value": "Security Triggers Get Retention Events",
					"action": "Get retentionEvents from security",
					"description": "Get retentionEvents from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/triggers/retentionEvents/{{$parameter[\"retentionEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Security Triggers Update Retention Events",
					"value": "Security Triggers Update Retention Events",
					"action": "Update the navigation property retentionEvents in security",
					"description": "Update the navigation property retentionEvents in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/triggers/retentionEvents/{{$parameter[\"retentionEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Security Triggers Retention Events Get Retention Event Type",
					"value": "Security Triggers Retention Events Get Retention Event Type",
					"action": "Get retentionEventType from security",
					"description": "Specifies the event that will start the retention period for labels that use this event type when an event is created.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/triggers/retentionEvents/{{$parameter[\"retentionEvent-id\"]}}/retentionEventType"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /security/triggers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Delete Triggers"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Delete Triggers"
					]
				}
			}
		},
		{
			"displayName": "GET /security/triggers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Get Triggers"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Get Triggers"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Get Triggers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/triggers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Update Triggers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/triggers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Update Triggers"
					]
				}
			}
		},
		{
			"displayName": "GET /security/triggers/retentionEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers List Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers List Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers List Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers List Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers List Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers List Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers List Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers List Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers List Retention Events"
					]
				}
			}
		},
		{
			"displayName": "POST /security/triggers/retentionEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Create Retention Events"
					]
				}
			}
		},
		{
			"displayName": "POST /security/triggers/retentionEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Create Retention Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/triggers/retentionEvents/{retentionEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Delete Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Delete Retention Events"
					]
				}
			}
		},
		{
			"displayName": "GET /security/triggers/retentionEvents/{retentionEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Get Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Get Retention Events"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Get Retention Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/triggers/retentionEvents/{retentionEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Update Retention Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/triggers/retentionEvents/{retentionEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Update Retention Events"
					]
				}
			}
		},
		{
			"displayName": "GET /security/triggers/retentionEvents/{retentionEvent-id}/retentionEventType",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Retention Events Get Retention Event Type"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Retention Events Get Retention Event Type"
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
						"Security Triggers Root"
					],
					"operation": [
						"Security Triggers Retention Events Get Retention Event Type"
					]
				}
			}
		},
];

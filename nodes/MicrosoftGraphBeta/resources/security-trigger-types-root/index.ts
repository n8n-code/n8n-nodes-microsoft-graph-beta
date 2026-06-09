import type { INodeProperties } from 'n8n-workflow';

export const securityTriggerTypesRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					]
				}
			},
			"options": [
				{
					"name": "Security Delete Trigger Types",
					"value": "Security Delete Trigger Types",
					"action": "Delete navigation property triggerTypes for security",
					"description": "Delete navigation property triggerTypes for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/triggerTypes"
						}
					}
				},
				{
					"name": "Security Get Trigger Types",
					"value": "Security Get Trigger Types",
					"action": "Get triggerTypes from security",
					"description": "Get triggerTypes from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/triggerTypes"
						}
					}
				},
				{
					"name": "Security Update Trigger Types",
					"value": "Security Update Trigger Types",
					"action": "Update the navigation property triggerTypes in security",
					"description": "Update the navigation property triggerTypes in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/triggerTypes"
						}
					}
				},
				{
					"name": "Security Trigger Types List Retention Event Types",
					"value": "Security Trigger Types List Retention Event Types",
					"action": "List retentionEventTypes",
					"description": "Get a list of the retentionEventType objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/triggerTypes/retentionEventTypes"
						}
					}
				},
				{
					"name": "Security Trigger Types Create Retention Event Types",
					"value": "Security Trigger Types Create Retention Event Types",
					"action": "Create retentionEventType",
					"description": "Create a new retentionEventType object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/security/triggerTypes/retentionEventTypes"
						}
					}
				},
				{
					"name": "Security Trigger Types Delete Retention Event Types",
					"value": "Security Trigger Types Delete Retention Event Types",
					"action": "Delete navigation property retentionEventTypes for security",
					"description": "Delete navigation property retentionEventTypes for security",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/security/triggerTypes/retentionEventTypes/{{$parameter[\"retentionEventType-id\"]}}"
						}
					}
				},
				{
					"name": "Security Trigger Types Get Retention Event Types",
					"value": "Security Trigger Types Get Retention Event Types",
					"action": "Get retentionEventTypes from security",
					"description": "Get retentionEventTypes from security",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/security/triggerTypes/retentionEventTypes/{{$parameter[\"retentionEventType-id\"]}}"
						}
					}
				},
				{
					"name": "Security Trigger Types Update Retention Event Types",
					"value": "Security Trigger Types Update Retention Event Types",
					"action": "Update the navigation property retentionEventTypes in security",
					"description": "Update the navigation property retentionEventTypes in security",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/security/triggerTypes/retentionEventTypes/{{$parameter[\"retentionEventType-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /security/triggerTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Delete Trigger Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Delete Trigger Types"
					]
				}
			}
		},
		{
			"displayName": "GET /security/triggerTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Get Trigger Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Get Trigger Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Get Trigger Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/triggerTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Update Trigger Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/triggerTypes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Update Trigger Types"
					]
				}
			}
		},
		{
			"displayName": "GET /security/triggerTypes/retentionEventTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types List Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types List Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types List Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types List Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types List Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types List Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types List Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types List Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types List Retention Event Types"
					]
				}
			}
		},
		{
			"displayName": "POST /security/triggerTypes/retentionEventTypes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types Create Retention Event Types"
					]
				}
			}
		},
		{
			"displayName": "POST /security/triggerTypes/retentionEventTypes<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types Create Retention Event Types"
					]
				}
			}
		},
		{
			"displayName": "DELETE /security/triggerTypes/retentionEventTypes/{retentionEventType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types Delete Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types Delete Retention Event Types"
					]
				}
			}
		},
		{
			"displayName": "GET /security/triggerTypes/retentionEventTypes/{retentionEventType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types Get Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types Get Retention Event Types"
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
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types Get Retention Event Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types Update Retention Event Types"
					]
				}
			}
		},
		{
			"displayName": "PATCH /security/triggerTypes/retentionEventTypes/{retentionEventType-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Security Trigger Types Root"
					],
					"operation": [
						"Security Trigger Types Update Retention Event Types"
					]
				}
			}
		},
];

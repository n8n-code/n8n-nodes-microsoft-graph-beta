import type { INodeProperties } from 'n8n-workflow';

export const privilegedSignupStatusPrivilegedSignupStatusDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Privileged Signup Status"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Signup Status Privileged Signup Status List Privileged Signup Status",
					"value": "Privileged Signup Status Privileged Signup Status List Privileged Signup Status",
					"action": "Get entities from privilegedSignupStatus",
					"description": "Get entities from privilegedSignupStatus",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedSignupStatus"
						}
					}
				},
				{
					"name": "Privileged Signup Status Privileged Signup Status Create Privileged Signup Status",
					"value": "Privileged Signup Status Privileged Signup Status Create Privileged Signup Status",
					"action": "Add new entity to privilegedSignupStatus",
					"description": "Add new entity to privilegedSignupStatus",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedSignupStatus"
						}
					}
				},
				{
					"name": "Privileged Signup Status Privileged Signup Status Delete Privileged Signup Status",
					"value": "Privileged Signup Status Privileged Signup Status Delete Privileged Signup Status",
					"action": "Delete entity from privilegedSignupStatus",
					"description": "Delete entity from privilegedSignupStatus",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedSignupStatus/{{$parameter[\"privilegedSignupStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Signup Status Privileged Signup Status Get Privileged Signup Status",
					"value": "Privileged Signup Status Privileged Signup Status Get Privileged Signup Status",
					"action": "Get entity from privilegedSignupStatus by key",
					"description": "Get entity from privilegedSignupStatus by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedSignupStatus/{{$parameter[\"privilegedSignupStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Signup Status Privileged Signup Status Update Privileged Signup Status",
					"value": "Privileged Signup Status Privileged Signup Status Update Privileged Signup Status",
					"action": "Update entity in privilegedSignupStatus",
					"description": "Update entity in privilegedSignupStatus",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedSignupStatus/{{$parameter[\"privilegedSignupStatus-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedSignupStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status List Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status List Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status List Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status List Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status List Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status List Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status List Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status List Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status List Privileged Signup Status"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedSignupStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status Create Privileged Signup Status"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedSignupStatus<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status Create Privileged Signup Status"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedSignupStatus/{privilegedSignupStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status Delete Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status Delete Privileged Signup Status"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedSignupStatus/{privilegedSignupStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status Get Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status Get Privileged Signup Status"
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
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status Get Privileged Signup Status"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status Update Privileged Signup Status"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedSignupStatus/{privilegedSignupStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Privileged Signup Status"
					],
					"operation": [
						"Privileged Signup Status Privileged Signup Status Update Privileged Signup Status"
					]
				}
			}
		},
];

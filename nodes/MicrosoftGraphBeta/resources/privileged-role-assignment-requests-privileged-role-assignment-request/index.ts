import type { INodeProperties } from 'n8n-workflow';

export const privilegedRoleAssignmentRequestsPrivilegedRoleAssignmentRequestDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request",
					"value": "Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request",
					"action": "List privilegedRoleAssignmentRequests",
					"description": "Retrieve a collection of privilegedRoleAssignmentRequest.  **Note:** This requester must have at least one role assignment on the resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoleAssignmentRequests"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Privileged Role Assignment Request Create Privileged Role Assignment Request",
					"value": "Privileged Role Assignment Requests Privileged Role Assignment Request Create Privileged Role Assignment Request",
					"action": "Create privilegedRoleAssignmentRequest",
					"description": "Create a privilegedroleassignmentrequest object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedRoleAssignmentRequests"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Privileged Role Assignment Request Delete Privileged Role Assignment Request",
					"value": "Privileged Role Assignment Requests Privileged Role Assignment Request Delete Privileged Role Assignment Request",
					"action": "Delete entity from privilegedRoleAssignmentRequests",
					"description": "Delete entity from privilegedRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Privileged Role Assignment Request Get Privileged Role Assignment Request",
					"value": "Privileged Role Assignment Requests Privileged Role Assignment Request Get Privileged Role Assignment Request",
					"action": "Get entity from privilegedRoleAssignmentRequests by key",
					"description": "Get entity from privilegedRoleAssignmentRequests by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}"
						}
					}
				},
				{
					"name": "Privileged Role Assignment Requests Privileged Role Assignment Request Update Privileged Role Assignment Request",
					"value": "Privileged Role Assignment Requests Privileged Role Assignment Request Update Privileged Role Assignment Request",
					"action": "Update entity in privilegedRoleAssignmentRequests",
					"description": "Update entity in privilegedRoleAssignmentRequests",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/privilegedRoleAssignmentRequests/{{$parameter[\"privilegedRoleAssignmentRequest-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedRoleAssignmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request List Privileged Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoleAssignmentRequests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Create Privileged Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedRoleAssignmentRequests<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Create Privileged Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "DELETE /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Delete Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Delete Privileged Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Get Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Get Privileged Role Assignment Request"
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
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Get Privileged Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Update Privileged Role Assignment Request"
					]
				}
			}
		},
		{
			"displayName": "PATCH /privilegedRoleAssignmentRequests/{privilegedRoleAssignmentRequest-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request"
					],
					"operation": [
						"Privileged Role Assignment Requests Privileged Role Assignment Request Update Privileged Role Assignment Request"
					]
				}
			}
		},
];
